import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Counter } from "@/components/Counter";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ZOUM Placement Services" },
      { name: "description", content: "Meet the advisory board behind ZOUM Placement Services." },
      { property: "og:title", content: "About — ZOUM Placement Services" },
      { property: "og:description", content: "Operators, not consultants. Meet the ZOUM advisory board." },
    ],
  }),
  component: AboutPage,
});

const board = [
  { name: "Helena Marchetti", role: "Managing Partner", bio: "Former COO, public SaaS. 22 years in operations.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Daniel Okonkwo", role: "Partner, Strategy", bio: "Ex-McKinsey. PE operating partner, $4B AUM.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Mei-Lin Zhao", role: "Partner, Career Practice", bio: "Former CHRO. Led 80+ executive placements.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
  { name: "Rafael Costa", role: "Partner, Capital", bio: "Former MD, growth equity. Board seats across 12 companies.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Anya Petrov", role: "Partner, Training", bio: "Built leadership programs for 3 unicorns.", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80" },
  { name: "James Whitford", role: "Senior Advisor", bio: "Three-time founder. Two exits over $400M.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
];

function AboutPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="pt-12 max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-lime">/ about</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-4 font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
            A private firm of <span className="italic font-serif text-lime">operators</span>, not consultants.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Founded in 2014, ZOUM Placement Services partners with companies and individuals through high-stakes inflection points. Every Partner has run a P&L, closed a round, or held a C-suite seat.
          </motion.p>
        </header>

        <section className="mt-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">/ advisory board</div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight">The people behind the work.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">Hover to bring them into focus.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {board.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group glass rounded-3xl overflow-hidden hover-glow-lime transition">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-lime">{m.role}</div>
                  <div className="font-display text-2xl mt-1 flex items-center justify-between">
                    {m.name}
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-brand-deep transition" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="glass-strong rounded-3xl p-10 md:p-14 grid md:grid-cols-3 gap-10 relative overflow-hidden">
            <div className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2" style={{ background: "rgba(31,203,107,0.35)" }} />
            {[
              { v: 150, suffix: "+", label: "Companies Scaled" },
              { v: 500, prefix: "$", suffix: "M+", label: "Revenue Generated" },
              { v: 1000, suffix: "+", label: "Careers Placed" },
            ].map((s, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="font-display text-5xl md:text-6xl tracking-tight">
                  <Counter to={s.v} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
