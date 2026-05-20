import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "./services.business";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/services/training")({
  head: () => ({
    meta: [
      { title: "Corporate Training — ZOUM Placement Services" },
      { name: "description", content: "Unified Excellence. Team culture, productivity, skill upscaling." },
      { property: "og:title", content: "Corporate Training — ZOUM" },
      { property: "og:description", content: "Embedded leadership programs by ZOUM." },
    ],
  }),
  component: TrainingPage,
});

const modules = [
  { code: "M01", title: "Executive Decision Velocity", duration: "2 days", desc: "Compress the decision cycle from weeks to hours without sacrificing quality.", bullets: ["Pre-mortem methodology", "Single-threaded ownership", "Reversible vs. irreversible frameworks", "Async written escalation"] },
  { code: "M02", title: "Operating Cadence Architecture", duration: "3 days", desc: "Engineer the meetings, metrics, and rituals that make execution inevitable.", bullets: ["Weekly business review", "Monthly operating review", "Quarterly capital review", "Annual strategy offsite"] },
  { code: "M03", title: "High-Performance Team Design", duration: "2 days", desc: "Recruit, level, and compensate teams to compound talent density quarterly.", bullets: ["Competency leveling", "Comp band design", "Performance calibration", "Hiring loops that scale"] },
  { code: "M04", title: "Cross-Functional Communication", duration: "1 day", desc: "Eliminate ambiguity at the seams between product, sales, and operations.", bullets: ["RACI without the politics", "Shared definitions of done", "Conflict resolution scripts"] },
  { code: "M05", title: "Leadership Under Constraint", duration: "2 days", desc: "Lead at full conviction during downturns, restructurings, and pivots.", bullets: ["Narrative discipline", "Capital triage", "RIF execution", "Re-recruiting your A-players"] },
  { code: "M06", title: "Culture as Operating System", duration: "1 day", desc: "Embed values into the literal mechanics of how the company operates.", bullets: ["Behavior-based values", "Ritual design", "Onboarding architecture"] },
];

function ModuleAccordion({ m, index, open, onToggle }: { m: typeof modules[number]; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 2) * 0.06, type: "spring", stiffness: 90, damping: 18 }}
      className={`glass node-bloom rounded-2xl overflow-hidden transition ${open ? "ring-1 ring-[var(--brand-deep)]/30" : ""}`}
    >
      <button onClick={onToggle} className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-display text-lime">{m.code}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">{m.duration}</span>
          </div>
          <div className="font-display text-xl mt-1.5">{m.title}</div>
        </div>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="h-8 w-8 grid place-items-center rounded-full glass-strong shrink-0">
          <Plus className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 20, mass: 0.6 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-sm text-muted-foreground">{m.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {m.bullets.map(b => (
                  <li key={b} className="text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />{b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TrainingPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader pill="Corporate Training" title="Unified" italic="Excellence." sub="Embedded leadership programs for teams that won't accept being average." />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Programs at a glance" kicker="/ overview">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { v: "120+", l: "Companies trained" },
                  { v: "8,400", l: "Operators upskilled" },
                  { v: "94%", l: "Recommend to peers" },
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-strong rounded-2xl p-8 hover-glow-lime transition">
                    <div className="font-display text-5xl">{s.v}</div>
                    <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="Workshop Curriculum" kicker="/ curriculum">
              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((m, i) => (
                  <ModuleAccordion
                    key={m.code}
                    m={m}
                    index={i}
                    open={openIdx === i}
                    onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                  />
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Delivery formats" kicker="/ pricing">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { tier: "Workshop", price: "$18K /day", desc: "On-site or virtual. Up to 25 participants." },
                  { tier: "Cohort Series", price: "$120K", desc: "8-week series across 4 modules. Includes coaching." },
                  { tier: "Embedded Program", price: "Custom", desc: "Annual partnership across exec, mid, and IC layers." },
                ].map((t, i) => (
                  <div key={i} className="glass-strong rounded-3xl p-8 hover-glow-lime transition">
                    <div className="font-display text-2xl">{t.tier}</div>
                    <div className="font-display text-4xl mt-2">{t.price}</div>
                    <div className="text-sm text-muted-foreground mt-3">{t.desc}</div>
                  </div>
                ))}
              </div>
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
