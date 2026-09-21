import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[130px]"
      />

      <div className="container animate-fade-up text-center">
        {/* Availability indicator */}
        <div className="mb-8 inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-cyan-400/5 px-4 py-2 font-pixel text-[10px] uppercase tracking-wider text-cyan-300 pixel-shadow">
          <span className="h-2 w-2 animate-pulse bg-cyan-400" />
          Coming Soon
        </div>

        {/* Eyebrow / product name */}
        <p className="mb-6 font-pixel text-[10px] uppercase tracking-[0.2em] text-fuchsia-400 text-glow-fuchsia sm:text-xs">
          The K75 Mechanical Keyboard
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl font-pixel text-2xl leading-[1.5] text-white text-glow-cyan sm:text-4xl sm:leading-[1.4] lg:text-5xl lg:leading-[1.35]">
          Designed for Cloud Engineers
        </h1>

        {/* Launch message — large */}
        <p className="mt-8 font-pixel text-xl text-cyan-300 text-glow-cyan sm:text-2xl">
          Launching October 20
        </p>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl font-retro text-xl leading-relaxed text-zinc-400 sm:text-2xl">
          A premium 75% mechanical keyboard built for people who live in the terminal — hot-swappable
          switches, multi-device connectivity and a machined aluminium frame.
        </p>

        {/* Single primary CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-3 border-2 border-cyan-200 bg-cyan-400 px-10 py-5 font-pixel text-sm uppercase text-black pixel-shadow-cyan transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Large transparent product image with edge glow */}
      <div className="container mt-16">
        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-2/3 rounded-full bg-cyan-500/20 blur-[110px]"
          />
          <img
            src="/images/keyboard-hero-transparent.png"
            alt="The K75 mechanical keyboard with cloud-themed keycaps"
            className="keeb-glow animate-float mx-auto h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
