import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="px-6 pb-12 pt-20 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <div className="font-display text-3xl tracking-tight">
              Stay in the <span className="text-lime">signal.</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">Quarterly briefings on capital, leadership, and execution.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) { setDone(true); setEmail(""); setTimeout(() => setDone(false), 3000); } }}
            className="glass rounded-full p-2 flex items-center gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-transparent flex-1 px-4 py-2 text-sm placeholder:text-muted-foreground outline-none text-foreground"
            />
            <button className="btn-lime text-sm font-medium px-5 py-2.5 rounded-full pulse-lime">
              {done ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="h-6 w-6 rounded-full bg-lime border border-foreground grid place-items-center">
              <span className="text-[9px] font-bold text-foreground">E</span>
            </div>
            <span className="font-display text-sm">Elevate & Co.</span>
            <span className="text-muted-foreground text-xs ml-3">© 2026 — All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground">Contact</Link>
            <div className="flex items-center gap-2">
              {[Twitter, Linkedin, Instagram].map((I, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-lime hover:border-foreground transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
