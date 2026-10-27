"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand via-brand-2 to-brand-3"
      />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-2xl shadow-black/40" : "border border-transparent",
        )}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_-10px] hover:shadow-brand/60 sm:inline-flex"
          >
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass mx-3 mt-2 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-foreground/90 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white/90 px-4 py-3 font-medium text-black"
            >
              Book a Call <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
