import {
  RefreshCw,
  Bluetooth,
  Laptop,
  Command,
  BatteryFull,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: RefreshCw,
    title: 'Hot-swappable switches',
    description: 'Swap switches in seconds — no soldering, no downtime. Tune the feel to your taste.',
  },
  {
    icon: Bluetooth,
    title: 'Multi-device connectivity',
    description: 'Pair up to three devices over Bluetooth and jump between them with a single key.',
  },
  {
    icon: Laptop,
    title: 'Mac & Windows support',
    description: 'A dedicated toggle remaps the modifiers instantly for macOS or Windows layouts.',
  },
  {
    icon: Command,
    title: 'Customisable shortcuts',
    description: 'Remap any key and build per-app macros for your cloud and CLI workflows.',
  },
  {
    icon: BatteryFull,
    title: 'Long battery life',
    description: 'Up to six weeks on a single charge, with fast top-ups over USB-C.',
  },
  {
    icon: Layers,
    title: 'Premium aluminium frame',
    description: 'A CNC-machined body with a gasket mount for a deep, stable typing sound.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="border-t-2 border-cyan-400/10 py-24">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-pixel text-xl leading-relaxed text-white sm:text-2xl">
            Built for the way you work
          </h2>
          <p className="mt-5 font-retro text-xl text-zinc-400 sm:text-2xl">
            Every decision on the K75 was made with engineers and long working days in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-2 border-white/10 bg-white/[0.02] p-6 pixel-shadow transition-all hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center border-2 border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-pixel text-xs leading-relaxed text-white">{feature.title}</h3>
              <p className="mt-3 font-retro text-lg leading-snug text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
