import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.email("Enter a valid email").max(255),
  type: z.string().trim().min(1, "Select an engagement type").max(120),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (_v: FormValues) => {
    await new Promise(r => setTimeout(r, 700));
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 grid place-items-center bg-white/90 backdrop-blur-xl rounded-3xl"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
                className="h-16 w-16 mx-auto rounded-full bg-lime border border-foreground grid place-items-center mb-4"
              >
                <Check className="h-8 w-8 text-foreground" strokeWidth={3} />
              </motion.div>
              <div className="font-display text-2xl">Inquiry received.</div>
              <div className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full name" placeholder="Your name" reg={register("name")} error={errors.name?.message} />
          <Field label="Company" placeholder="Company name" reg={register("company")} error={errors.company?.message} />
        </div>
        <Field label="Email" type="email" placeholder="you@company.com" reg={register("email")} error={errors.email?.message} />
        <Field label="Engagement type" placeholder="Strategy / Career / Training" reg={register("type")} error={errors.type?.message} />
        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
          <textarea
            rows={4}
            placeholder="Tell us about your goals…"
            {...register("message")}
            className={`mt-2 w-full bg-white/40 border border-border rounded-2xl px-4 py-3 text-sm placeholder:text-muted-foreground input-glow resize-none transition ${errors.message ? "input-error" : ""}`}
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
        </div>
        <MagneticButton type="submit" className="w-full btn-lime font-medium py-4 rounded-2xl flex items-center justify-center">
          {isSubmitting ? "Sending…" : "Send inquiry"} <ArrowUpRight className="h-4 w-4" />
        </MagneticButton>
      </form>
    </div>
  );
}

function Field({ label, type = "text", placeholder, reg, error }: { label: string; type?: string; placeholder?: string; reg: any; error?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...reg}
        className={`mt-2 w-full bg-white/40 border border-border rounded-2xl px-4 py-3 text-sm placeholder:text-muted-foreground input-glow transition ${error ? "input-error" : ""}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
