import React, { useEffect, useRef, useState } from 'react';
import kaiSvg from '../../assets/svg/kai.svg';

const sectionBehaviors = {
  hero: { maxSpeed: 1.5, filter: 'brightness(1)', scale: 1 },
  dive: { maxSpeed: 1.5, filter: 'brightness(1)', scale: 1 },
  coral: { maxSpeed: 2.0, filter: 'brightness(1.15) saturate(1.3)', scale: 1.05 },
  threat: { maxSpeed: 1.0, filter: 'brightness(0.6) saturate(0.4)', scale: 0.9 },
  hope: { maxSpeed: 1.8, filter: 'brightness(1.2) saturate(1.2)', scale: 1.1 },
  action: { maxSpeed: 1.5, filter: 'brightness(1)', scale: 1 }
};

const InteractiveFish = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [ripples, setRipples] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  
  const fishRef = useRef(null);
  const requestRef = useRef();
  
  // Physics state
  const fishPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight + 200 }); // start offscreen bottom
  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const velocity = useRef({ x: 0, y: 0 });
  const rotation = useRef(0);
  
  const isInvestigatingRipple = useRef(false);
  const investigateTime = useRef(0);
  
  const isFleeing = useRef(false);
  const fleeTime = useRef(0);
  
  const lastRandomMoveTime = useRef(Date.now());
  const lastBubbleTime = useRef(0);

  const [isVisible, setIsVisible] = useState(false);

  // Section Tracking & Visibility
  useEffect(() => {
    const handleScroll = () => {
      const coralEl = document.getElementById("chapter-coral");
      if (coralEl) {
        // Appear ONLY from Coral Reef section onwards (never on Surface or Dive)
        setIsVisible(window.scrollY >= coralEl.offsetTop - 100);
      } else {
        setIsVisible(false);
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      const threatEl = document.getElementById("chapter-threat");
      const hopeEl = document.getElementById("chapter-hope");
      const actionEl = document.getElementById("chapter-action");
      const diveEl = document.getElementById("chapter-dive");

      let detectedSection = "hero";
      if (actionEl && scrollPos >= actionEl.offsetTop) {
        detectedSection = "action";
      } else if (hopeEl && scrollPos >= hopeEl.offsetTop) {
        detectedSection = "hope";
      } else if (threatEl && scrollPos >= threatEl.offsetTop) {
        detectedSection = "threat";
      } else if (coralEl && scrollPos >= coralEl.offsetTop) {
        detectedSection = "coral";
      } else if (diveEl && scrollPos >= diveEl.offsetTop) {
        detectedSection = "dive";
      }
      
      setActiveSection(detectedSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Event Listeners (Pointer Down for Ripples)
  useEffect(() => {
    const onPointerDown = (e) => {
      // Ignore clicks on UI elements or the fish itself
      if (e.target.closest('.z-50, .z-40, button, a, [role="button"], .interactive-fish-element')) {
        return;
      }
      
      // Do not attract if not visible (e.g. on surface hero section)
      if (!isVisible || activeSection === 'hero') return;

      const x = e.clientX;
      const y = e.clientY;
      
      targetPos.current = { x, y };
      isInvestigatingRipple.current = true;
      investigateTime.current = Date.now();
      
      // Cancel fleeing if they tap somewhere else
      isFleeing.current = false;
      
      // Create ripple effect
      const id = Date.now();
      setRipples(prev => [...prev, { id, x, y }]);
      setTimeout(() => {
         setRipples(prev => prev.filter(r => r.id !== id));
      }, 1000);
    };

    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [activeSection, isVisible]);
  
  const handleFishClick = (e) => {
    e.stopPropagation();
    isFleeing.current = true;
    fleeTime.current = Date.now();
    isInvestigatingRipple.current = false;
    
    // Pick a target far away in a random direction away from the click
    const dx = fishPos.current.x - e.clientX;
    const dy = fishPos.current.y - e.clientY;
    let angle = Math.atan2(dy, dx);
    
    // Add some randomness to the flee angle
    angle += (Math.random() - 0.5) * 1.5; 
    
    targetPos.current = {
      x: fishPos.current.x + Math.cos(angle) * 1500,
      y: fishPos.current.y + Math.sin(angle) * 1500
    };
  };

  // Animation Loop
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (time) => {
      const dt = time - lastTime;
      lastTime = time;
      
      if (dt > 100) {
         requestRef.current = requestAnimationFrame(updatePhysics);
         return;
      }
      
      const now = Date.now();
      const behavior = sectionBehaviors[activeSection] || sectionBehaviors.coral;
      
      // Bubbles
      if (activeSection !== 'hero') {
         const bubbleInterval = activeSection === 'threat' ? 4000 : (activeSection === 'hope' ? 1200 : 2000);
         if (now - lastBubbleTime.current > bubbleInterval) {
            lastBubbleTime.current = now;
            if (Math.random() > 0.4) {
               const id = Date.now();
               const bx = fishPos.current.x + Math.cos(rotation.current * Math.PI / 180) * 30;
               const by = fishPos.current.y + Math.sin(rotation.current * Math.PI / 180) * 30;
               setBubbles(prev => [...prev.slice(-4), { id, x: bx, y: by }]);
               setTimeout(() => {
                  setBubbles(prev => prev.filter(b => b.id !== id));
               }, 3000);
            }
         }
      }

      // Flee Logic
      if (isFleeing.current && now - fleeTime.current > 2000) {
         isFleeing.current = false;
         lastRandomMoveTime.current = now;
      }

      // Investigating Logic
      if (isInvestigatingRipple.current && now - investigateTime.current > 5000) {
         isInvestigatingRipple.current = false;
         lastRandomMoveTime.current = now;
      }

      // Calculate top Y boundary (never swim above the top of Coral Reef)
      const coralEl = document.getElementById("chapter-coral");
      let minY = 50;
      if (coralEl) {
        const rect = coralEl.getBoundingClientRect();
        minY = Math.max(50, rect.top + 40);
      }

      // Random Wandering Logic
      if (!isInvestigatingRipple.current && !isFleeing.current) {
        const dx = targetPos.current.x - fishPos.current.x;
        const dy = targetPos.current.y - fishPos.current.y;
        const distToTarget = Math.sqrt(dx * dx + dy * dy);
        
        // Pick new random target when reached, or occasionally
        if (distToTarget < 100 || now - lastRandomMoveTime.current > 8000) {
           targetPos.current = {
              x: Math.random() * (window.innerWidth - 100) + 50,
              y: Math.max(minY, Math.random() * Math.max(100, window.innerHeight - minY - 100) + minY)
           };
           lastRandomMoveTime.current = now;
        }
      }

      // --- INERTIA BASED PHYSICS ---
      
      const dx = targetPos.current.x - fishPos.current.x;
      const dy = targetPos.current.y - fishPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      let currentMaxSpeed = behavior.maxSpeed;
      if (isFleeing.current) currentMaxSpeed = 10;
      else if (isInvestigatingRipple.current) currentMaxSpeed = behavior.maxSpeed * 1.8;

      let desiredVx = 0;
      let desiredVy = 0;

      if (dist > 1) {
         desiredVx = (dx / dist) * currentMaxSpeed;
         desiredVy = (dy / dist) * currentMaxSpeed;
      }
      
      // Acceleration determines how "sluggish" or smooth the fish feels
      const acceleration = isFleeing.current ? 0.08 : 0.015;
      
      velocity.current.x += (desiredVx - velocity.current.x) * acceleration;
      velocity.current.y += (desiredVy - velocity.current.y) * acceleration;
      
      fishPos.current.x += velocity.current.x;
      fishPos.current.y += velocity.current.y;

      // Strict boundary check: do not let fish swim above Coral Reef top line
      if (fishPos.current.y < minY) {
         fishPos.current.y = minY;
         if (velocity.current.y < 0) velocity.current.y = Math.abs(velocity.current.y);
      }
      
      // Calculate smooth rotation based on VELOCITY, not target position.
      // This makes the fish always face the direction it's actually moving!
      const moveSpeed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
      
      if (moveSpeed > 0.1) {
        let targetRotation = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);
        let rotDiff = targetRotation - rotation.current;
        while (rotDiff > 180) rotDiff -= 360;
        while (rotDiff < -180) rotDiff += 360;
        
        // Rotate smoothly towards the movement direction
        rotation.current += rotDiff * 0.05;
      }

      if (fishRef.current) {
        const flipY = (rotation.current > 90 || rotation.current < -90) ? -1 : 1;
        // Subtle bobbing
        const bobbing = Math.sin(now * 0.002) * (isFleeing.current ? 0 : 3);
        
        const transformStr = `translate3d(${fishPos.current.x}px, ${fishPos.current.y + bobbing}px, 0) rotate(${rotation.current}deg) scaleY(${flipY}) scale(${behavior.scale})`;
        
        fishRef.current.style.transform = transformStr;
        fishRef.current.style.filter = behavior.filter;
      }
      
      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(requestRef.current);
  }, [activeSection]);

  if (!isVisible || activeSection === 'hero' || activeSection === 'dive') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {/* Tap Ripples */}
      {ripples.map(r => (
        <div 
          key={r.id} 
          className="absolute rounded-full border-2 border-cyan-400 animate-[ripple_1s_ease-out_forwards]"
          style={{ 
            left: r.x, 
            top: r.y,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px'
          }} 
        />
      ))}
      
      {/* Bubbles */}
      {bubbles.map(b => (
        <div 
          key={b.id}
          className="absolute rounded-full border border-white/40 bg-white/10 animate-[floatUp_3s_ease-in_forwards]"
          style={{
            left: b.x,
            top: b.y,
            width: Math.random() * 6 + 4 + 'px',
            height: Math.random() * 6 + 4 + 'px',
          }}
        />
      ))}

      {/* The Fish */}
      <div 
        ref={fishRef}
        onClick={handleFishClick}
        className="interactive-fish-element absolute left-0 top-0 w-16 h-16 sm:w-20 sm:h-20 origin-center transition-[filter] duration-700 ease-in-out pointer-events-auto cursor-pointer"
        style={{
          marginLeft: '-32px',
          marginTop: '-32px',
          willChange: 'transform, filter'
        }}
      >
        <img 
          src={kaiSvg} 
          alt="Interactive Fish" 
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
          style={{
             animation: 'tailWagSwim 0.8s ease-in-out infinite'
          }}
        />
      </div>
      
      <style>{`
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(${Math.random() * 20 - 10}px) scale(1.5); opacity: 0; }
        }
        @keyframes tailWagSwim {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.85); }
        }
      `}</style>
    </div>
  );
};

export default InteractiveFish;

