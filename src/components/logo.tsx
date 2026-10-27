import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-black ring-1 ring-white/10 transition-shadow duration-500 group-hover:shadow-[0_0_24px_-4px] group-hover:shadow-brand/60">
        <Image
          src="/vensora-logo.jpg"
          alt=""
          fill
          sizes="40px"
          suppressHydrationWarning
          className="scale-[1.2] object-cover transition-transform duration-700 group-hover:scale-[1.32]"
        />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Vensora<span className="text-gradient"> Tech</span>
      </span>
    </a>
  );
}
