"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Mail, MapPin, Phone, Plus, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { faqs, navLinks, services, site, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Reveal, SectionHeading } from "./motion";

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = (d: number) =>
    setState(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setState(([i]) => [(i + 1) % testimonials.length, 1]),
      6000,
    );
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Trusted by <span className="text-gradient">technology leaders</span>
          </>
        }
      />
      <Reveal delay={0.2}>
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="glass relative mt-14 overflow-hidden rounded-3xl p-8 sm:p-12"
        >
          <Quote className="absolute right-8 top-8 h-20 w-20 text-white/5" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="relative mt-6 min-h-[210px] sm:min-h-[170px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-semibold text-white">
                    {t.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    i === index ? "w-8 bg-brand-2" : "w-2 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions? <span className="text-gradient">We&apos;ve got answers.</span>
          </>
        }
      />
      <div className="mt-14 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.05}>
              <div
                className={cn(
                  "rounded-2xl border transition-colors duration-300",
                  isOpen ? "border-brand/40 bg-brand/[0.06]" : "border-border bg-card/40",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium"
                >
                  {f.q}
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-5 w-5 shrink-0 text-brand-2" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted/60 focus:border-brand/60 focus:ring-4 focus:ring-brand/15";

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/25 via-card to-brand-2/15" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 animate-aurora rounded-full bg-brand-3/20 blur-[100px]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

        <div className="grid gap-12 p-8 sm:p-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build what&apos;s <span className="text-gradient">next</span>, together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-muted">
                Book a free 30-minute consultation. We&apos;ll review your goals and send back a
                tailored action plan — no strings attached.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-5">
                {[
                  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
                  { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
                  { icon: MapPin, label: site.address },
                ].map((c) => (
                  <li key={c.label} className="flex items-center gap-4">
                    <span className="glass grid h-11 w-11 place-items-center rounded-xl">
                      <c.icon className="h-5 w-5 text-brand-2" />
                    </span>
                    {c.href ? (
                      <a href={c.href} className="transition-colors hover:text-brand-2">
                        {c.label}
                      </a>
                    ) : (
                      <span>{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass relative rounded-3xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20"
                    >
                      <Check className="h-8 w-8 text-emerald-400" />
                    </motion.span>
                    <h3 className="mt-6 font-display text-2xl font-semibold">Message received!</h3>
                    <p className="mt-2 text-muted">A Vensora consultant will reach out within one business day.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input required name="name" placeholder="Full name" className={inputClass} />
                      <input required type="email" name="email" placeholder="Work email" className={inputClass} />
                    </div>
                    <input name="company" placeholder="Company" className={inputClass} />
                    <select name="service" defaultValue="" className={cn(inputClass, "appearance-none")}>
                      <option value="" disabled>
                        What can we help with?
                      </option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title} className="bg-card">
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className={cn(inputClass, "resize-none")}
                    />
                    <button
                      type="submit"
                      className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium"
                    >
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-16 pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-muted">
            IT consulting for cloud, cybersecurity, AI, and custom software. We help businesses
            build technology that lasts.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="flex-1 rounded-xl border border-border bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-brand/60"
            />
            <button className="rounded-full bg-white/90 px-5 text-sm font-medium text-black transition-colors duration-300 hover:bg-white">
              Join
            </button>
          </form>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition-colors hover:text-foreground">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
        <p>© 2026 Vensora Tech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
