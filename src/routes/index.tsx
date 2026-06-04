import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, TrendingUp, Users, Cpu, Headphones, Quote, Star } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZOUM Placement Services — Architecting Alpha" },
      { name: "description", content: "ZOUM Placement Services — premium consultancy scaling companies and accelerating careers through data-driven strategy." },
      { property: "og:title", content: "ZOUM Placement Services" },
      { property: "og:description", content: "Business & Career Mastery consultancy." },
    ],
  }),
  component: Index,
});

const marqueeClients = [
  "Teleperformance BPO",
  "Genpact KPO",
  "Accenture KPO",
  "Knack Global Medical Billing",
  "AGS Health Medical Billing",
  "Timoespro Edtech",
  "Raniwalas Jewellery",
  "KGK Real Estate",
  "Infosys IT",
  "Celebal Tech Company",
];

function GlassVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 80, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="relative aspect-square w-full max-w-[560px] mx-auto" style={{ perspective: 1200 }}>
      <div className="ambient-orb h-72 w-72 -top-10 -left-10" style={{ background: "rgba(31,203,107,0.45)" }} />
      <div className="ambient-orb h-80 w-80 bottom-0 right-0" style={{ background: "rgba(14,124,66,0.35)" }} />

      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative h-full w-full">
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-8 rounded-3xl glass-strong" style={{ transform: "translateZ(40px)" }} />
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-20 right-0 h-48 w-48 rounded-3xl glass-strong overflow-hidden" style={{ transform: "translateZ(80px)" }}>
          <div className="p-5 text-xs text-muted-foreground">PLACEMENTS · 1 YR</div>
          <div className="px-5 font-display text-4xl"><span className="text-foreground">700</span><span className="text-brand">+</span></div>
          <div className="mt-4 mx-5 h-16 rounded-md" style={{ background: "linear-gradient(to top, rgba(31,203,107,0.65), transparent)" }} />
        </motion.div>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 left-0 h-40 w-56 rounded-3xl glass-strong p-5" style={{ transform: "translateZ(120px)" }}>
          <div className="text-[11px] text-muted-foreground">CLIENTS PLACED · Q4</div>
          <div className="mt-1 font-display text-3xl text-foreground">42</div>
          <div className="mt-3 flex -space-x-2">
            {[0,1,2,3].map(i => (
              <div key={i} className="h-7 w-7 rounded-full border border-foreground/20" style={{background: i===3 ? "var(--brand)" : "rgba(255,255,255,0.85)"}} />
            ))}
          </div>
        </motion.div>
        <div className="absolute inset-0 rounded-full border border-foreground/10" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-12 rounded-full border border-dashed border-foreground/15" />
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 mx-auto w-full max-w-full overflow-hidden block"
    >
      <div className="ambient-orb h-[500px] w-[500px] top-20 -left-40" style={{ background: "rgba(31,203,107,0.28)" }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-lime pulse-lime" />
            Now accepting Q2 partnerships
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight whitespace-normal break-words"
          >
            Architecting <span className="italic font-serif text-lime">Alpha</span>:
            <br />
            Business &amp; Career <span className="text-gradient-charcoal">Mastery.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-xl">
            ZOUM Placement Services scales companies and accelerates careers through data-driven strategy, executive precision, and uncompromising execution.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <MagneticButton href="/contact" className="btn-lime w-full md:w-auto font-semibold px-7 py-4 rounded-full inline-flex items-center justify-center text-white">
              Start the engagement <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              to="/services/business"
              className="w-full md:w-auto glass px-7 py-4 rounded-full text-sm font-semibold text-foreground hover:bg-white transition inline-flex items-center justify-center"
            >
              Explore services
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-12 md:mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground/70">
            <div>FORBES <span className="text-foreground/70">— "Sharp."</span></div>
            <div>BLOOMBERG <span className="text-foreground/70">— "Disciplined."</span></div>
            <div className="hidden md:block">WSJ <span className="text-foreground/70">— "Effective."</span></div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <GlassVisual />
        </motion.div>
      </div>
    </section>
  );
}

function ClientMarquee() {
  const row = [...marqueeClients, ...marqueeClients];
  return (
    <section aria-label="Client roster" className="relative py-10 border-y border-border bg-white/40 backdrop-blur overflow-hidden">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-6 px-6">
        / Placed across India's most demanding operators
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row.map((c, i) => (
            <span key={i} className="font-display text-xl md:text-2xl tracking-tight text-foreground/70 flex items-center gap-12">
              {c}
              <span className="text-lime">●</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Static portfolio metrics block */}
      <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-6">
        <div className="glass-strong rounded-2xl grid grid-cols-2 divide-x divide-border overflow-hidden">
          <div className="p-5 md:p-7 text-center">
            <div className="font-display text-4xl md:text-6xl tracking-tight text-foreground leading-none">700+</div>
            <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">Placements in 1 year</div>
          </div>
          <div className="p-5 md:p-7 text-center">
            <div className="font-display text-4xl md:text-6xl tracking-tight text-foreground leading-none">42</div>
            <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">Clients placed · Q4</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    headline: "Scale Without Friction.",
    body: "Operations, ROI, market dominance. We re-engineer the machine so growth compounds.",
    points: ["Operational redesign", "Margin expansion", "GTM acceleration"],
    to: "/services/business" as const,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Briefcase,
    title: "Career Mastery",
    headline: "The Executive Leap.",
    body: "High-ticket roles, personal branding, leadership architecture for senior operators.",
    points: ["C-suite positioning", "Compensation strategy", "Board readiness"],
    to: "/services/career" as const,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "Corporate Training",
    headline: "Unified Excellence.",
    body: "Team culture, productivity, skill upscaling — embedded across every function.",
    points: ["Leadership labs", "Performance ops", "Culture systems"],
    to: "/services/training" as const,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    headline: "Production AI Architectures.",
    body: "Autonomous workflows, OpenAI/GPT-4 integrations, and backend engines built for revenue impact.",
    points: ["Agent workflows", "GPT-4 / OpenAI", "RAG pipelines"],
    to: "/services/ai-automation" as const,
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Headphones,
    title: "BPO & Operations",
    headline: "High-Velocity Staffing.",
    body: "Mass-scale operational talent sourcing, CX specialists, and KPO verticals delivered at ramp speed.",
    points: ["Mass hiring", "CX pods", "KPO verticals"],
    to: "/services/bpo-operations" as const,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
];

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = s.icon;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group relative glass rounded-3xl p-6 hover-glow-lime transition-all duration-500 overflow-hidden flex flex-col h-full">
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-lime/0 group-hover:bg-lime/30 blur-3xl transition-all duration-700" />
      <Link to={s.to} className="relative z-10 flex flex-col h-full">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 glass-strong">
          <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        <div className="flex items-start justify-between">
          <div className="h-11 w-11 rounded-2xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-foreground group-hover:rotate-45 transition" />
        </div>
        <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.title}</div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight leading-tight">{s.headline}</h3>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.body}</p>
        <div className="mt-5 flex flex-wrap gap-1.5 mt-auto pt-5">
          {s.points.map(p => (<span key={p} className="text-[11px] glass rounded-full px-2.5 py-1">{p}</span>))}
        </div>
      </Link>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-4 sm:px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ services</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl leading-tight">
              Five pillars. <span className="italic font-serif text-muted-foreground">One outcome.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">A focused practice across the operating, leadership, human, intelligent, and operational layers of every modern enterprise.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = "Precision over noise. Results over rhetoric.".split(" ");
  return (
    <section id="about" ref={ref} className="relative px-4 sm:px-6 py-24 md:py-32">
      <div className="ambient-orb h-96 w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "rgba(31,203,107,0.18)" }} />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.3em] text-lime mb-8">/ our philosophy</motion.div>
        <p className="font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const opacity = useTransform(scrollYProgress, [start * 0.6 + 0.1, end * 0.6 + 0.1], [0.2, 1]);
            return (<motion.span key={i} style={{ opacity }} className="inline-block mr-3">{w}</motion.span>);
          })}
        </p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 text-muted-foreground max-w-xl mx-auto">
          Founded in 2014, ZOUM Placement Services is a private advisory firm partnering with operators who refuse the average curve.
        </motion.p>

        {/* Compact 2-col metric matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto glass-strong rounded-2xl grid grid-cols-2 divide-x divide-border overflow-hidden"
        >
          <div className="px-5 py-6 md:py-7 text-center">
            <div className="font-display text-3xl md:text-5xl tracking-tight text-foreground leading-none">700+</div>
            <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">Placements in a year</div>
          </div>
          <div className="px-5 py-6 md:py-7 text-center">
            <div className="font-display text-3xl md:text-5xl tracking-tight text-foreground leading-none">42</div>
            <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">Clients placed</div>
          </div>
        </motion.div>

        <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm text-foreground hover:text-lime transition">
          Meet the advisory board <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Sarim J.", role: "CTO, Fintech Ops", service: "AI Automation", quote: "ZOUM shipped an autonomous reconciliation agent that retired three BPO teams. Quietly the highest-leverage spend on our roadmap." },
  { name: "Priya Malhotra", role: "Founder, Series B SaaS", service: "Business Strategy", quote: "They re-architected our GTM in 11 months and we tripled ARR. No fluff — only the moves that matter." },
  { name: "Rajesh Kumar", role: "VP Engineering → CTO", service: "Career Mastery", quote: "Compensation jumped 2.4× and I landed the role I'd been circling for years. The board prep alone paid for itself." },
  { name: "Anita R.", role: "COO, Industrial Group", service: "Corporate Training", quote: "Our leadership labs changed the way 400 managers run their teams. Quarterly NPS up 38 points." },
  { name: "Vikram S.", role: "Director, Healthcare BPO", service: "BPO & Operations", quote: "We ramped 320 certified seats in 60 days. ZOUM's velocity engine is unlike anything else in the market." },
];

function Testimonials() {
  return (
    <section className="relative px-4 sm:px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ proof over rhetoric</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            Operators. Founders. <span className="italic font-serif text-muted-foreground">On record.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl p-7 flex flex-col h-full hover-glow-lime transition"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-lime" />
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(s => <Star key={s} className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />)}
                </div>
              </div>
              <blockquote className="mt-5 text-foreground text-base leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                <div className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] text-lime border border-brand-deep/30 rounded-full px-2 py-0.5">
                  {t.service}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 sm:px-6 py-24 md:py-32">
      <div className="ambient-orb h-[400px] w-[400px] top-0 right-0" style={{ background: "rgba(31,203,107,0.22)" }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ contact</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1]">
            Let's architect <span className="italic font-serif text-lime">your</span> alpha.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">Tell us about your engagement. We respond within 24 hours, Monday through Friday.</p>
          <div className="mt-10 glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Global Presence</div>
            <div className="grid grid-cols-3 gap-3">
              {["NYC", "LDN", "SGP", "DXB", "TYO", "SYD"].map(c => (
                <div key={c} className="aspect-square glass-strong rounded-xl grid place-items-center text-xs font-display tracking-widest hover:border-lime transition">{c}</div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <ClientMarquee />
      <Services />
      <Philosophy />
      <Testimonials />
      <Contact />
    </main>
  );
}
