import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/career")({
  head: () => ({
    meta: [
      { title: "Career Mastery — Elevate & Co." },
      { name: "description", content: "The Executive Leap. High-ticket roles, personal branding, leadership architecture." },
    ],
  }),
  component: CareerPage,
});

const method = [
  { step: "I", title: "Inventory", desc: "Audit your last 24 months of operating leverage. Identify the asymmetric stories." },
  { step: "II", title: "Position", desc: "Refactor your professional identity into a single, defensible thesis." },
  { step: "III", title: "Activate", desc: "Targeted introductions, executive search alignment, and offer staging." },
  { step: "IV", title: "Close", desc: "Compensation modeling, term sheet review, transition runway." },
  { step: "V", title: "Land", desc: "First-90-days operating plan with weekly executive coaching." },
];

const successes = [
  { name: "Operating exec, fintech", before: "VP Product", after: "Chief Product Officer", lift: "+$420K TC" },
  { name: "GM, consumer", before: "Director", after: "SVP, GM", lift: "+$380K TC" },
  { name: "Tech leader, AI", before: "Staff Eng", after: "VP Engineering", lift: "+$510K TC" },
  { name: "Marketing, SaaS", before: "Sr. Director", after: "CMO", lift: "+$290K TC" },
  { name: "Finance, PE-backed", before: "Controller", after: "CFO", lift: "+$350K TC" },
  { name: "Ops exec, healthcare", before: "VP Ops", after: "COO", lift: "+$440K TC" },
];

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative pl-12 md:pl-16">
      <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-border" />
      <motion.div style={{ height: lineH }} className="absolute left-3 md:left-5 top-0 w-px bg-foreground" />
      <div className="space-y-12">
        {method.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative">
            <div className="absolute -left-[42px] md:-left-[58px] top-1 h-7 w-7 rounded-full glass-strong border border-foreground grid place-items-center">
              <span className="font-display text-xs">{m.step}</span>
            </div>
            <div className="font-display text-3xl md:text-4xl">{m.title}</div>
            <p className="text-muted-foreground mt-2 max-w-xl">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CareerPage() {
  return (
    <main className="pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <PageHeader pill="Career Mastery" title="The Executive" italic="Leap." sub="A private practice for senior operators positioning into C-suite, GM, and board seats." />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Who we work with" kicker="/ overview">
              <div className="glass-strong rounded-3xl p-10">
                <Quote className="h-6 w-6 text-lime mb-4" />
                <p className="font-serif italic text-2xl md:text-3xl leading-snug">
                  "We don't write resumes. We architect the next decade of your operating leverage."
                </p>
                <div className="mt-6 text-sm text-muted-foreground">
                  Cohorts are limited to 12 operators per quarter. Average pre-engagement TC: $400K+.
                </div>
              </div>
            </Section>

            <Section id="process" title="The Signature Method" kicker="/ process">
              <Timeline />
            </Section>

            <section id="pricing" className="scroll-mt-32">
              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">/ pricing</div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">Client Success Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {successes.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6 hover-glow-lime transition">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.name}</div>
                    <div className="mt-4 flex items-end gap-3">
                      <div className="text-sm text-muted-foreground line-through">{s.before}</div>
                      <div className="font-display text-xl">→ {s.after}</div>
                    </div>
                    <div className="mt-3 inline-block text-xs bg-lime border border-foreground px-2 py-0.5 rounded-full font-medium">{s.lift}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 grid md:grid-cols-2 gap-5">
                {[
                  { tier: "Cohort Program", price: "$28K", desc: "12-week guided cohort, 6 sessions, group access." },
                  { tier: "Private Engagement", price: "$95K", desc: "1:1 with a Managing Partner. 6-month placement target." },
                ].map((t, i) => (
                  <div key={i} className="glass-strong rounded-3xl p-8">
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
