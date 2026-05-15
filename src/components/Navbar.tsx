import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services/business" as const, hasMenu: true },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const serviceItems = [
  { label: "Business Strategy", to: "/services/business" as const, desc: "Scale Without Friction." },
  { label: "Career Mastery", to: "/services/career" as const, desc: "The Executive Leap." },
  { label: "Corporate Training", to: "/services/training" as const, desc: "Unified Excellence." },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMenuOpen(false); }, [path]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))] glass rounded-full px-3 py-2 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]" : ""}`}
    >
      <Link to="/" className="flex items-center gap-2 pl-3">
        <div className="h-7 w-7 rounded-full bg-lime grid place-items-center border border-foreground">
          <span className="text-[10px] font-bold text-foreground">E</span>
        </div>
        <span className="font-display text-lg tracking-tight">Elevate <span className="text-lime">&</span> Co.</span>
      </Link>

      <div className="hidden md:flex items-center gap-1 text-sm relative">
        {links.map((l) => {
          const active = l.to === "/" ? path === "/" : path.startsWith(l.to.split("/").slice(0, 2).join("/"));
          if (l.hasMenu) {
            return (
              <div key={l.label} className="relative" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
                <button className={`px-4 py-2 rounded-full transition flex items-center gap-1 ${active ? "text-foreground" : "text-foreground/60"} hover:text-foreground hover:bg-black/5`}>
                  {l.label} <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 glass-strong rounded-2xl p-2"
                  >
                    {serviceItems.map(s => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-4 py-3 rounded-xl hover:bg-black/5 transition group"
                      >
                        <div className="text-sm font-medium flex items-center justify-between">
                          {s.label}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={l.label}
              to={l.to}
              className={`px-4 py-2 rounded-full transition ${active ? "text-foreground bg-black/5" : "text-foreground/60 hover:text-foreground hover:bg-black/5"}`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:block">
        <MagneticButton href="/contact" className="btn-lime font-medium text-sm px-5 py-2.5 rounded-full">
          Book Now <ArrowUpRight className="h-4 w-4" />
        </MagneticButton>
      </div>

      <button className="md:hidden mr-2 p-2" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full mt-3 left-0 right-0 glass-strong rounded-2xl p-3 flex flex-col"
        >
          {links.map(l => (
            <Link key={l.label} to={l.to} className="px-4 py-3 rounded-xl text-sm hover:bg-black/5">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-2 btn-lime text-center text-sm font-medium px-5 py-3 rounded-full">
            Book Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
