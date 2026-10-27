"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useRef } from "react";
import { processSteps, projects, reasons, services, stats, techStack } from "@/lib/data";
import { Counter, Reveal, SectionHeading, SpotlightCard } from "./motion";

export function TechMarquee() {
  return (
    <section className="border-y border-border bg-white/[0.01] py-10">
      <p className="mb-6 text-center text-sm uppercase tracking-[0.25em] text-muted">
        Certified expertise across the modern stack
      </p>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl font-medium text-white/25 transition-colors duration-500 hover:text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="glass rounded-2xl p-7 text-center">
              <p className="font-display text-5xl font-semibold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            End-to-end IT services, <span className="text-gradient">built for scale</span>
          </>
        }
        description="From strategy to execution to 24/7 operations, Vensora Tech is the single technology partner your business needs."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.1}>
            <SpotlightCard className="h-full">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-2/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <s.icon className="h-6 w-6 text-brand-2" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-2 opacity-80 transition-all group-hover:gap-2 group-hover:opacity-100"
              >
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            className="text-left"
            eyebrow="Why Vensora"
            title={
              <>
                A partner that <span className="text-gradient">thinks like an owner</span>
              </>
            }
            description="We're not a body shop. We're a team of senior consultants who care about your outcomes as much as you do."
          />
          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-3">
              {[
                "Fixed-price assessments with clear deliverables",
                "Dedicated engagement lead from day one",
                "Knowledge transfer built into every project",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/90">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.06]">
                <r.icon className="h-6 w-6 text-brand transition-transform duration-500 group-hover:scale-125" />
                <h3 className="mt-4 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 50%"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            A proven process, <span className="text-gradient">zero surprises</span>
          </>
        }
        description="Four clear phases take you from first conversation to measurable impact."
      />
      <div ref={ref} className="relative mt-20">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
        <motion.div
          style={{ width }}
          className="absolute left-0 top-7 hidden h-px bg-gradient-to-r from-brand via-brand-2 to-brand-3 lg:block"
        />
        <div className="grid gap-10 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.15}>
              <div className="relative">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card shadow-lg shadow-brand/10">
                  <step.icon className="h-6 w-6 text-brand-2" />
                </div>
                <p className="mt-6 font-mono text-sm text-brand">0{i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Case studies"
        title={
          <>
            Results that <span className="text-gradient">speak for themselves</span>
          </>
        }
        description="A selection of recent engagements across cloud, security, AI, and software."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-6xl font-semibold text-white/85 transition-transform duration-700 group-hover:scale-110">
                    {p.result.split(" ")[0]}
                  </span>
                </div>
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs">{p.category}</span>
                <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-xs">{p.year}</span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-brand-2">{p.result}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
