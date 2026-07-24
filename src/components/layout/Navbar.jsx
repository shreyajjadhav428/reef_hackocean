import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Coral Tree SVG Logo Icon
const CoralLogoIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
  >
    <path
      d="M16 28V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 20C12 18 10 14 10 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 18C20 16 22 12 22 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 24C11 23 8 20 8 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 22C21 21 24 18 24 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="10" cy="10" r="2" fill="currentColor" />
    <circle cx="22" cy="8" r="2" fill="currentColor" />
    <circle cx="8" cy="16" r="1.8" fill="currentColor" />
    <circle cx="24" cy="14" r="1.8" fill="currentColor" />
    <circle cx="16" cy="6" r="2" fill="currentColor" />
    <path
      d="M16 14V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Learn", path: "/learn" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Impact", path: "/impact" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full z-50 pt-2 pb-2">
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#040912]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white font-bold tracking-widest text-xl sm:text-2xl group"
        >
          <CoralLogoIcon />
          <span className="font-extrabold tracking-[0.2em] text-white">
            REEF
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-300 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Donate Pill Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/volunteer"
            className="px-5 py-1.5 rounded-full border border-cyan-500/60 hover:border-cyan-300 text-white text-sm font-medium transition duration-200 shadow-[0_0_12px_rgba(34,211,238,0.2)] hover:shadow-[0_0_18px_rgba(34,211,238,0.4)] hover:bg-cyan-950/40"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-6 py-4 bg-[#050b15]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-950/60 text-cyan-300 font-semibold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <Link
                to="/volunteer"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2 text-center rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 text-sm font-semibold transition"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


