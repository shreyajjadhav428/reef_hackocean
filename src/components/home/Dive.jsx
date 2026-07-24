import { motion } from "framer-motion";

const Dive = () => {
  return (
    <section
      id="chapter-dive"
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none flex items-center justify-center snap-start snap-always"
    >
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="w-full bg-[#040810] relative min-h-screen flex flex-col sm:flex-row items-center justify-between py-10 sm:py-16 px-6 sm:px-12 lg:px-16 overflow-hidden gap-8"
      >
        {/* Background Video Element */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/a_to_sec_clip_of_water_lik.mp4" type="video/mp4" />
          </video>
          {/* Smooth overlay gradients for text readability & seamless section blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/60 via-transparent to-[#040810]/60 z-10" />
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#040810]/80 to-transparent z-10" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#040810]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#040810]/15 z-10" />
        </div>

        {/* Subtle Ambient Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[150px] opacity-40"></div>
        </div>



        {/* Right Side Headline: "Dive deeper. Discover the unseen." */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 max-w-md lg:max-w-xl ml-auto mr-12 sm:mr-24 lg:mr-36 text-left py-8 sm:py-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Dive deeper. <br />
            <span className="text-slate-300 font-normal">Discover the unseen.</span>
          </h2>
          <div className="mt-6 bg-cyan-950/40 border border-cyan-500/30 p-4 rounded-2xl backdrop-blur-md">
            <p className="text-cyan-50 text-sm sm:text-base leading-relaxed font-medium">
              💡 <span className="font-bold text-white">Tip:</span> For further progress through the website, you will need to read Luna's story. Click on <span className="font-bold text-cyan-300 px-2 py-0.5 bg-cyan-900/50 rounded-md">Read Next →</span> to unlock scrolling.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Dive;
