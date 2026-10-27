"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-2 shadow-[0_0_8px] shadow-brand-2/70" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, count, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-7 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:border-brand/25",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--x) var(--y), rgb(157 140 245 / 0.09), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
