import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/training")({
  head: () => ({
    meta: [
      { title: "Corporate Training — Elevate & Co." },
      { name: "description", content: "Unified Excellence. Team culture, productivity, skill upscaling." },
    ],
  }),
  component: TrainingPage,
});

const modules = [
  {
    code: "M01",
    title: "Executive Decision Velocity",
    duration: "2 days",
    desc: "Compress the decision cycle from weeks to hours without sacrificing quality.",
    bullets: ["Pre-mortem methodology", "Single-threaded ownership", "Reversible vs. irreversible frameworks", "Async written escalation"],
  },
  {
    code: "M02",
    title: "Operating Cadence Architecture",
    duration: "3 days",
    desc: "Engineer the meetings, metrics, and rituals that make execution inevitable.",
    bullets: ["Weekly business review", "Monthly operating review", "Quarterly capital review", "Annual strategy offsite"],
  },
  {
    code: "M03",
    title: "High-Performance Team Design",
    duration: "2 days",
    desc: "Recruit, level, and compensate teams to compound talent density quarterly.",
    bullets: ["Competency leveling", "Comp band design", "Performance calibration", "Hiring loops that scale"],
  },
  {
    code: "M04",
    title: "Cross-Functional Communication",
    duration: "1 day",
    desc: "Eliminate ambiguity at the seams between product, sales, and operations.",
    bullets: ["RACI without the politics", "Shared definitions of done", "Conflict resolution scripts"],
  },
  {
    code: "M05",
    title: "Leadership Under Constraint",
    duration: "2 days",
    desc: "Lead at full conviction during downturns, restructurings, and pivots.",
    bullets: ["Narrative discipline", "Capital triage", "RIF execution", "Re-recruiting your A-players"],
  },
  {
    code: "M06",
    title: "Culture as Operating System",
    duration: "1 day",
    desc: "Embed values into the literal mechanics of how the company operates.",
    bullets: ["Behavior-based values", "Ritual design", "Onboarding architecture"],
  },
];

function TrainingPage() {
  return (
    <main className="pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
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
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-strong rounded-2xl p-8">
                    <div className="font-display text-5xl">{s.v}</div>
                    <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="Workshop Curriculum" kicker="/ curriculum">
              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((m, i) => (
                  <motion.div key={m.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.08 }} className="glass rounded-2xl overflow-hidden">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={m.code} className="border-0">
                        <AccordionTrigger className="px-6 py-5 hover:no-underline">
                          <div className="text-left flex-1">
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-display text-lime">{m.code}</span>
                              <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">{m.duration}</span>
                            </div>
                            <div className="font-display text-xl mt-1">{m.title}</div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5">
                          <p className="text-sm text-muted-foreground">{m.desc}</p>
                          <ul className="mt-4 space-y-1.5">
                            {m.bullets.map(b => (
                              <li key={b} className="text-sm flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-lime" />{b}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.div>
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
                  <div key={i} className="glass-strong rounded-3xl p-8">
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
