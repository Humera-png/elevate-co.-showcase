import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Target, Compass, Rocket, Trophy, Sparkles, Briefcase, ArrowUpRight } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "./services.business";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/services/career")({
  head: () => ({
    meta: [
      { title: "Career Mastery — ZOUM Placement Services" },
      { name: "description", content: "The Executive Leap. High-ticket roles, personal branding, leadership architecture." },
      { property: "og:title", content: "Career Mastery — ZOUM" },
      { property: "og:description", content: "High-ticket placements with ZOUM." },
    ],
  }),
  component: CareerPage,
});

const milestones: { icon: any; code: string; title: string; desc: string; metric?: string; span: string }[] = [
  { icon: Compass, code: "M1", title: "Inventory", desc: "Audit your last 24 months of operating leverage and identify the asymmetric stories.", metric: "24 mo", span: "md:col-span-2" },
  { icon: Target, code: "M2", title: "Position", desc: "Refactor your professional identity into a single, defensible thesis.", span: "md:col-span-2 md:row-span-2" },
  { icon: Rocket, code: "M3", title: "Activate", desc: "Targeted intros, executive search alignment, offer staging.", metric: "85+ network", span: "" },
  { icon: Briefcase, code: "M4", title: "Close", desc: "Compensation modeling, term sheet review, transition runway.", span: "" },
  { icon: Trophy, code: "M5", title: "Land", desc: "First-90-days operating plan with weekly executive coaching.", metric: "90 days", span: "md:col-span-2" },
  { icon: Sparkles, code: "M6", title: "Compound", desc: "Annual review with board prep, equity strategy, and next-role mapping.", span: "" },
];

const successes = [
  { name: "Operating exec, fintech", before: "VP Product", after: "Chief Product Officer", lift: "+$420K TC" },
  { name: "GM, consumer", before: "Director", after: "SVP, GM", lift: "+$380K TC" },
  { name: "Tech leader, AI", before: "Staff Eng", after: "VP Engineering", lift: "+$510K TC" },
  { name: "Marketing, SaaS", before: "Sr. Director", after: "CMO", lift: "+$290K TC" },
  { name: "Finance, PE-backed", before: "Controller", after: "CFO", lift: "+$350K TC" },
  { name: "Ops exec, healthcare", before: "VP Ops", after: "COO", lift: "+$440K TC" },
];

function BentoMilestones() {
  return (
    <div className="grid md:grid-cols-4 md:auto-rows-[180px] gap-4">
      {milestones.map((m, i) => (
        <motion.div
          key={m.code}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 90, damping: 18 }}
          className={`group relative glass node-bloom rounded-3xl p-6 overflow-hidden flex flex-col justify-between ${m.span}`}
        >
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-lime/0 group-hover:bg-lime/20 blur-3xl transition-all duration-700" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
              <m.icon className="h-4.5 w-4.5" />
            </div>
            <span className="text-[10px] font-display text-lime tracking-widest">{m.code}</span>
          </div>
          <div className="relative z-10">
            <div className="font-display text-2xl md:text-3xl">{m.title}</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">{m.desc}</p>
            {m.metric && (
              <div className="mt-3 inline-block text-[10px] tracking-wider uppercase text-brand-deep border border-brand-deep/30 rounded-full px-2 py-0.5">{m.metric}</div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CareerPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader pill="Career Mastery" title="The Executive" italic="Leap." sub="A private practice for senior operators positioning into C-suite, GM, and board seats." />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Who we work with" kicker="/ overview">
              <div className="glass-strong rounded-3xl p-10 relative overflow-hidden">
                <div className="ambient-orb h-72 w-72 -top-24 -right-10" style={{ background: "rgba(31,203,107,0.3)" }} />
                <Quote className="h-6 w-6 text-lime mb-4 relative" />
                <p className="font-serif italic text-2xl md:text-3xl leading-snug relative">
                  "We don't write resumes. We architect the next decade of your operating leverage."
                </p>
                <div className="mt-6 text-sm text-muted-foreground relative">
                  Cohorts are limited to 12 operators per quarter. Average pre-engagement TC: $400K+.
                </div>
              </div>
            </Section>

            <Section id="process" title="Milestone Frameworks" kicker="/ process">
              <BentoMilestones />
            </Section>

            <section id="pricing" className="scroll-mt-32">
              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">/ pricing</div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">Client Success Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {successes.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass node-bloom rounded-2xl p-6 transition">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.name}</div>
                    <div className="mt-4 flex items-end gap-3">
                      <div className="text-sm text-muted-foreground line-through">{s.before}</div>
                      <div className="font-display text-xl">
                        <ArrowUpRight className="inline h-4 w-4 text-lime" /> {s.after}
                      </div>
                    </div>
                    <div className="mt-3 inline-block text-xs bg-lime text-white px-2.5 py-1 rounded-full font-medium">{s.lift}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 grid md:grid-cols-2 gap-5">
                {[
                  { tier: "Cohort Program", price: "$28K", desc: "12-week guided cohort, 6 sessions, group access." },
                  { tier: "Private Engagement", price: "$95K", desc: "1:1 with a Managing Partner. 6-month placement target." },
                ].map((t, i) => (
                  <div key={i} className="glass-strong rounded-3xl p-8 hover-glow-lime transition">
                    <div className="font-display text-2xl">{t.tier}</div>
                    <div className="font-display text-4xl mt-2">{t.price}</div>
                    <div className="text-sm text-muted-foreground mt-3">{t.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
