import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ZOUM Placement Services" },
      { name: "description", content: "Begin an engagement with ZOUM Placement Services." },
      { property: "og:title", content: "Contact — ZOUM Placement Services" },
      { property: "og:description", content: "Start an engagement with ZOUM." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="ambient-orb h-[500px] w-[500px] top-20 right-0" style={{ background: "rgba(31,203,107,0.22)" }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="pt-12 max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-lime">/ contact</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-4 font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
            Let's architect <span className="italic font-serif text-lime">your</span> alpha.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-muted-foreground max-w-xl">
            Tell us about your engagement. ZOUM responds within 24 hours, Monday through Friday.
          </motion.p>
        </header>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "New York · London · Singapore", sub: "Three offices, twelve time zones." },
                { icon: Mail, label: "partners@zoum.co", sub: "Inquiries answered within 24 hours." },
                { icon: Phone, label: "+1 (212) 555 — 0142", sub: "Mon-Fri · 9am – 7pm ET." },
              ].map((c, i) => (
                <div key={i} className="glass rounded-2xl p-5 flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-lime grid place-items-center shrink-0 text-white">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{c.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 glass rounded-3xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Global Presence</div>
              <div className="grid grid-cols-3 gap-3">
                {["NYC", "LDN", "SGP", "DXB", "TYO", "SYD"].map(c => (
                  <div key={c} className="aspect-square glass-strong rounded-xl grid place-items-center text-xs font-display tracking-widest hover:border-lime transition">{c}</div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
