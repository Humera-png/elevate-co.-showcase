import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Cpu, Workflow, Bot, Database } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation — ZOUM Placement Services" },
      { name: "description", content: "Production AI Architectures. Custom autonomous workflows, OpenAI/GPT-4 API integrations, and backend engine execution." },
      { property: "og:title", content: "AI Automation — ZOUM" },
      { property: "og:description", content: "Production AI Architectures by ZOUM." },
    ],
  }),
  component: AIPage,
});

const frameworks = [
  { icon: Bot, name: "Autonomous Agent Workflows", desc: "Multi-step agents that plan, execute, and self-correct across your stack." },
  { icon: Cpu, name: "GPT-4 / OpenAI Integrations", desc: "Production-grade prompt orchestration, function calling, and evals." },
  { icon: Workflow, name: "Backend Engine Execution", desc: "Queues, retries, observability — built for high-throughput automation." },
  { icon: Database, name: "Private RAG Pipelines", desc: "Vectorized institutional knowledge, secured to your tenant." },
];

const cases = [
  { client: "Fintech Ops", result: "−84% manual", duration: "10 weeks", note: "Replaced 3 BPO teams with an autonomous reconciliation agent." },
  { client: "Legal Tech", result: "12× throughput", duration: "1 quarter", note: "GPT-4 contract triage with human-in-the-loop review." },
  { client: "Insurance", result: "$2.1M / yr", duration: "6 months", note: "Claims intake agent integrated with legacy mainframe." },
];

function AIPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader pill="AI Automation" title="Production AI" italic="Architectures." sub="Custom autonomous workflows, OpenAI/GPT-4 API integrations, and backend engine execution — engineered for revenue impact." />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Overview" kicker="/ what we build">
              <div className="grid md:grid-cols-2 gap-5">
                {frameworks.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group glass node-bloom rounded-2xl p-6">
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{f.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{f.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="Build Roadmap" kicker="/ process">
              <div className="grid md:grid-cols-3 gap-4">
                {cases.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-strong rounded-2xl p-6 hover-glow-lime transition">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.client}</div>
                    <div className="font-display text-3xl mt-2 text-foreground">{c.result}</div>
                    <div className="text-xs text-lime mt-1">{c.duration}</div>
                    <div className="text-sm text-muted-foreground mt-4">{c.note}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Engagement Tiers" kicker="/ pricing">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { tier: "Prototype", price: "$28K", time: "3 weeks", feats: ["Single workflow PoC", "GPT-4 integration", "Eval harness"] },
                  { tier: "Production Build", price: "$140K", time: "8-12 weeks", feats: ["End-to-end agents", "Backend + queues", "Observability"], highlight: true },
                  { tier: "Embedded AI Team", price: "Custom", time: "Quarterly", feats: ["Dedicated engineers", "Roadmap ownership", "On-call SLAs"] },
                ].map((t, i) => (
                  <div key={i} className={`glass-strong rounded-3xl p-8 transition ${t.highlight ? "ring-2 ring-[var(--brand-deep)] shadow-[0_24px_60px_-24px_var(--brand-glow)]" : ""}`}>
                    {t.highlight && <div className="text-[10px] inline-block bg-lime text-white px-2.5 py-1 rounded-full font-medium mb-3 tracking-wider uppercase">Most engaged</div>}
                    <div className="font-display text-2xl">{t.tier}</div>
                    <div className="font-display text-4xl mt-2">{t.price}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t.time}</div>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {t.feats.map(f => (<li key={f} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-lime" />{f}</li>))}
                    </ul>
                    <Link to="/contact" className="mt-6 block text-center glass rounded-full py-3 text-sm hover:bg-white transition">Inquire</Link>
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
