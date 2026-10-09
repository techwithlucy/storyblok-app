const specs = [
  { label: 'Layout', value: '75%' },
  { label: 'Connectivity', value: 'Bluetooth / USB-C / 2.4 GHz' },
  { label: 'Switches', value: 'Hot-swappable' },
  { label: 'Compatibility', value: 'macOS / Windows / Linux' },
  { label: 'Battery', value: '4,000 mAh — up to 6 weeks' },
  { label: 'Keycaps', value: 'Doubleshot PBT' },
  { label: 'Colours', value: 'Graphite / Silver / Midnight Blue' },
];

export default function ProductDetails() {
  return (
    <section id="specs" className="border-t-2 border-cyan-400/10 py-24">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left column */}
        <div>
          <h2 className="font-pixel text-xl leading-relaxed text-white sm:text-2xl">
            The details
          </h2>
          <p className="mt-5 max-w-md font-retro text-xl text-zinc-400 sm:text-2xl">
            A no-compromise 75% board that fits neatly on any desk without giving up the keys you
            actually use.
          </p>

          {/* Availability */}
          <div className="mt-10">
            <p className="font-pixel text-[10px] uppercase tracking-wider text-zinc-500">Availability</p>
            <span className="mt-4 inline-flex items-center gap-2 border-2 border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-2 font-pixel text-[10px] uppercase text-fuchsia-300 pixel-shadow">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Right column — spec list (details only) */}
        <div className="border-2 border-cyan-400/20 bg-white/[0.02] pixel-shadow">
          <dl className="divide-y-2 divide-cyan-400/10">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between gap-4 px-6 py-5">
                <dt className="font-pixel text-[10px] uppercase tracking-wider text-zinc-500">
                  {spec.label}
                </dt>
                <dd className="text-right font-retro text-xl text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
