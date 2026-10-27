"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, BrainCircuit, CirclePlay, Cloud, CodeXml, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { rotatingWords } from "@/lib/data";

const orbitIcons = [Cloud, ShieldCheck, BrainCircuit, CodeXml];
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 opacity-70">
        <div className="absolute left-0 top-10 h-96 w-96 animate-aurora rounded-full bg-brand/25 blur-[140px]" />
        <div className="absolute right-0 top-0 h-96 w-96 animate-aurora rounded-full bg-brand-2/15 blur-[140px] [animation-delay:-9s]" />
        <div className="absolute left-1/3 top-48 h-80 w-80 animate-aurora rounded-full bg-brand-3/15 blur-[140px] [animation-delay:-18s]" />
      </div>

      <motion.div style={{ y, opacity }} className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="glass group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              <Sparkles className="h-4 w-4 text-brand-2" />
              Now offering AI Readiness Assessments
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="mt-8 font-display text-[2.2rem] font-semibold leading-[1.08] tracking-tight min-[400px]:text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4.2rem]"
            >
              IT Consulting for
              <span className="mt-1 block whitespace-nowrap">
                Smarter{" "}
                <span className="relative inline-grid h-[1.2em] overflow-hidden align-bottom">
                  {rotatingWords.map((w) => (
                    <span key={w} aria-hidden className="invisible col-start-1 row-start-1 leading-[1.2]">
                      {w}
                    </span>
                  ))}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={rotatingWords[index]}
                      initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.6, ease }}
                      className="text-gradient col-start-1 row-start-1 block leading-[1.2]"
                    >
                      {rotatingWords[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              Vensora Tech helps ambitious companies modernize infrastructure, secure their
              business, and unlock AI — with senior engineers who deliver measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition-colors duration-300 hover:bg-white/[0.07]"
              >
                <CirclePlay className="h-5 w-5 text-brand-2" />
                See Our Work
              </a>
            </motion.div>
          </div>

          <BrandMark />
        </div>

        <HeroDashboard />
      </motion.div>
    </section>
  );
}

function BrandMark() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.3, ease }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1000 }}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
    >
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-brand/25 via-brand-2/10 to-brand-3/20 blur-3xl" />

      <div className="absolute inset-[4%] animate-spin-slow rounded-full border border-white/[0.06]">
        {orbitIcons.map((Icon, i) => (
          <span
            key={i}
            className="glass absolute grid h-10 w-10 place-items-center rounded-2xl"
            style={{
              top: `${50 - 50 * Math.cos((i * Math.PI) / 2 + Math.PI / 4)}%`,
              left: `${50 + 50 * Math.sin((i * Math.PI) / 2 + Math.PI / 4)}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon className="h-4 w-4 text-brand-2" />
          </span>
        ))}
      </div>
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/[0.05]" />

      <motion.div style={{ rotateX, rotateY }} className="absolute inset-[10%] animate-float">
        <Image
          src="/vensora-logo.png"
          alt="Vensora Tech VT monogram"
          fill
          priority
          sizes="(min-width: 1024px) 400px, 80vw"
          suppressHydrationWarning
          className="object-contain drop-shadow-[0_0_40px_rgba(157,140,245,0.25)]"
        />
      </motion.div>
    </motion.div>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease }}
      className="relative mx-auto mt-24 max-w-5xl"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-brand/30 via-brand-2/10 to-transparent" />
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="ml-3 rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-muted">
            vensora.tech/ops-dashboard
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Uptime", value: "99.99%", color: "text-emerald-300/90" },
            { label: "Monthly cloud spend", value: "-41%", color: "text-brand-2" },
            { label: "Threats blocked", value: "12,480", color: "text-brand-3" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease }}
              className="rounded-2xl border border-border bg-white/[0.02] p-5"
            >
              <p className="text-sm text-muted">{m.label}</p>
              <p className={`mt-2 font-display text-3xl font-semibold ${m.color}`}>{m.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-white/[0.02] p-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Deployment velocity</span>
            <span className="text-emerald-300/90">+212%</span>
          </div>
          <div className="mt-6 flex h-32 items-end gap-2">
            {[30, 45, 38, 60, 52, 70, 64, 82, 75, 90, 86, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.06, duration: 1, ease }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-brand/20 to-brand-2/70"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
