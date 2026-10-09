import { ArrowRight } from "lucide-react";

type FinalCTAProps = {
  launchMessage: string;
  ctaText: string;
};

export default function FinalCTA({
  launchMessage,
  ctaText,
}: FinalCTAProps) {
  return (
    <section id="waitlist" className="relative overflow-hidden border-t-2 border-cyan-400/10 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/15 blur-[120px]"
      />

      <div className="container text-center">
        <p className="mb-6 font-pixel text-[10px] uppercase tracking-[0.2em] text-fuchsia-400 text-glow-fuchsia sm:text-xs">
          {launchMessage}
        </p>

        <h2 className="mx-auto max-w-2xl font-pixel text-2xl leading-[1.5] text-white text-glow-cyan sm:text-3xl sm:leading-[1.4]">
          Be first in line for launch day
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-retro text-xl text-zinc-400 sm:text-2xl">
          Join the waitlist and get early access, launch-day pricing and a heads-up before the K75
          goes public.
        </p>

        <div className="mx-auto mt-9 flex max-w-md flex-col items-stretch gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border-2 border-cyan-400/30 bg-cyan-400/5 px-5 py-3 font-retro text-xl text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none"
          />

          <a
            href="#waitlist"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-cyan-200 bg-cyan-400 px-7 py-3 font-pixel text-[10px] uppercase text-black pixel-shadow-cyan transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-5 font-retro text-lg text-zinc-500">
          No spam. Just one email when we launch.
        </p>
      </div>
    </section>
  );
}