import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, TrendingUp, Users } from "lucide-react";
import { Counter } from "@/components/Counter";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevate & Co. — Architecting Alpha" },
      { name: "description", content: "Premium consultancy scaling companies and accelerating careers through data-driven strategy." },
      { property: "og:title", content: "Elevate & Co. — Architecting Alpha" },
      { property: "og:description", content: "Business & Career Mastery consultancy." },
    ],
  }),
  component: Index,
});

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
      <div className="ambient-orb h-72 w-72 -top-10 -left-10" style={{ background: "rgba(212,255,0,0.4)" }} />
      <div className="ambient-orb h-80 w-80 bottom-0 right-0" style={{ background: "rgba(180,200,255,0.5)" }} />

      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative h-full w-full">
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-8 rounded-3xl glass-strong" style={{ transform: "translateZ(40px)" }} />
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-20 right-0 h-48 w-48 rounded-3xl glass-strong overflow-hidden" style={{ transform: "translateZ(80px)" }}>
          <div className="p-5 text-xs text-muted-foreground">PORTFOLIO ROI</div>
          <div className="px-5 font-display text-4xl"><span className="text-foreground">+247</span><span className="text-lime">%</span></div>
          <div className="mt-4 mx-5 h-16 bg-gradient-to-t from-lime/60 to-transparent rounded-md" />
        </motion.div>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 left-0 h-40 w-56 rounded-3xl glass-strong p-5" style={{ transform: "translateZ(120px)" }}>
          <div className="text-[11px] text-muted-foreground">CLIENTS Q4</div>
          <div className="mt-1 font-display text-3xl text-foreground">42</div>
          <div className="mt-3 flex -space-x-2">
            {[0,1,2,3].map(i => (
              <div key={i} className="h-7 w-7 rounded-full border border-foreground/20" style={{background: i===3 ? "#D4FF00" : "rgba(255,255,255,0.8)"}} />
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
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="ambient-orb h-[500px] w-[500px] top-20 -left-40" style={{ background: "rgba(212,255,0,0.25)" }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-lime pulse-lime" />
            Now accepting Q2 partnerships
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Architecting <span className="italic font-serif text-lime">Alpha</span>:
            <br />
            Business & Career <span className="text-gradient-charcoal">Mastery.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-8 text-lg text-muted-foreground max-w-xl">
            We scale companies and accelerate careers through data-driven strategy, executive precision, and uncompromising execution.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" className="btn-lime font-medium px-7 py-4 rounded-full inline-flex items-center">
              Start the engagement <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <Link to="/services/business" className="glass px-7 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition">
              Explore services
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-14 flex items-center gap-8 text-xs text-muted-foreground/70">
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

const services = [
  { icon: TrendingUp, title: "Business Strategy", headline: "Scale Without Friction.", body: "Operations, ROI, market dominance. We re-engineer the machine so growth compounds.", points: ["Operational redesign", "Margin expansion", "GTM acceleration"], to: "/services/business" as const, span: "lg:col-span-2" },
  { icon: Briefcase, title: "Career Mastery", headline: "The Executive Leap.", body: "High-ticket roles, personal branding, leadership architecture for senior operators.", points: ["C-suite positioning", "Compensation strategy", "Board readiness"], to: "/services/career" as const, span: "" },
  { icon: Users, title: "Corporate Training", headline: "Unified Excellence.", body: "Team culture, productivity, skill upscaling — embedded across every function.", points: ["Leadership labs", "Performance ops", "Culture systems"], to: "/services/training" as const, span: "" },
];

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = s.icon;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className={`group relative glass rounded-3xl p-8 hover-glow-lime transition-all duration-500 ${s.span} overflow-hidden`}>
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-lime/0 group-hover:bg-lime/30 blur-3xl transition-all duration-700" />
      <Link to={s.to} className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="h-12 w-12 rounded-2xl glass-strong grid place-items-center group-hover:bg-lime transition">
            <Icon className="h-5 w-5 text-foreground" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-foreground group-hover:rotate-45 transition" />
        </div>
        <div className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.title}</div>
        <h3 className="mt-2 font-display text-3xl md:text-4xl tracking-tight">{s.headline}</h3>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">{s.body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {s.points.map(p => (<span key={p} className="text-[11px] glass rounded-full px-3 py-1">{p}</span>))}
        </div>
      </Link>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ services</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-2xl">
              Three pillars. <span className="italic font-serif text-muted-foreground">One outcome.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">A focused practice across the operating, leadership, and human layers of every modern enterprise.</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = "Precision over noise. Results over rhetoric.".split(" ");
  return (
    <section id="about" ref={ref} className="relative px-6 py-40">
      <div className="ambient-orb h-96 w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "rgba(212,255,0,0.18)" }} />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.3em] text-lime mb-8">/ our philosophy</motion.div>
        <p className="font-serif italic text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const opacity = useTransform(scrollYProgress, [start * 0.6 + 0.1, end * 0.6 + 0.1], [0.2, 1]);
            return (<motion.span key={i} style={{ opacity }} className="inline-block mr-3">{w}</motion.span>);
          })}
        </p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 text-muted-foreground max-w-xl mx-auto">
          Founded in 2014, Elevate & Co. is a private advisory firm partnering with operators who refuse the average curve.
        </motion.p>
        <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-lime transition">
          Meet the advisory board <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: 150, suffix: "+", label: "Companies Scaled" },
    { v: 500, prefix: "$", suffix: "M+", label: "Revenue Generated" },
    { v: 1000, suffix: "+", label: "Careers Transformed" },
  ];
  return (
    <section className="px-6 pb-32">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto glass-strong rounded-3xl p-10 md:p-14 grid md:grid-cols-3 gap-10 relative overflow-hidden">
        <div className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2" style={{ background: "rgba(212,255,0,0.35)" }} />
        {stats.map((s, i) => (
          <div key={i} className="relative text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl tracking-tight text-foreground">
              <Counter to={s.v} suffix={s.suffix} prefix={s.prefix} />
            </div>
            <div className="mt-3 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="ambient-orb h-[400px] w-[400px] top-0 right-0" style={{ background: "rgba(212,255,0,0.2)" }} />
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
                <div key={c} className="aspect-square glass-strong rounded-xl grid place-items-center text-xs font-display tracking-widest hover:border-foreground transition">{c}</div>
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
    <main className="relative">
      <Hero />
      <Services />
      <About />
      <Stats />
      <Contact />
    </main>
  );
}
