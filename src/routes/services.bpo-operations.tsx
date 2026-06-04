import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Headphones, Users2, Globe2, Activity } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/bpo-operations")({
  head: () => ({
    meta: [
      { title: "BPO & Operations — ZOUM Placement Services" },
      { name: "description", content: "High-Velocity Staffing. Mass-scale operational talent sourcing, customer experience specialists, and KPO verticals." },
      { property: "og:title", content: "BPO & Operations — ZOUM" },
      { property: "og:description", content: "Mass-scale BPO and KPO staffing by ZOUM." },
    ],
  }),
  component: BPOPage,
});

const frameworks = [
  { icon: Users2, name: "Mass Talent Sourcing", desc: "100-1000+ seat ramps across voice, chat, and back-office." },
  { icon: Headphones, name: "Customer Experience Pods", desc: "Tier-1 to escalation CSAT specialists with SLA discipline." },
  { icon: Globe2, name: "KPO Verticals", desc: "Medical billing, edtech, jewellery, IT and real estate desks." },
  { icon: Activity, name: "Velocity Hiring Engine", desc: "Sourcing-to-offer in 9 days at scale, with quality gates." },
];

const cases = [
  { client: "Teleperformance BPO", result: "320 seats", duration: "60 days", note: "Voice and chat ramp for global retail brand." },
  { client: "AGS Health Medical Billing", result: "180 hires", duration: "1 quarter", note: "Certified coders and AR callers, US shift." },
  { client: "KGK Real Estate", result: "45 specialists", duration: "5 weeks", note: "Inside-sales and lead-qualification desk." },
];

function BPOPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader pill="BPO & Operations" title="High-Velocity" italic="Staffing." sub="Mass-scale operational talent sourcing, customer experience specialists, and KPO verticals — delivered at ramp speed." />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Overview" kicker="/ verticals">
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

            <Section id="process" title="Ramp Roadmap" kicker="/ process">
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
                  { tier: "Pilot Seat", price: "Per-hire", time: "≤ 25 seats", feats: ["Sourcing + screening", "Onboarding ops", "30-day guarantee"] },
                  { tier: "Managed Ramp", price: "Retainer", time: "25-250 seats", feats: ["Dedicated TA pod", "Quality scorecards", "SLA-bound"], highlight: true },
                  { tier: "Enterprise Build-Out", price: "Custom", time: "250+ seats", feats: ["Full account team", "Site selection", "Multi-shift"] },
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
