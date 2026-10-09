import { Cloud } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-cyan-400/20 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center border-2 border-cyan-400/50 bg-cyan-400/10 text-cyan-300">
            <Cloud className="h-4 w-4" />
          </span>
          <span className="font-pixel text-sm text-white">K75</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 font-pixel text-[10px] uppercase tracking-wider">
          <a href="#features" className="text-zinc-400 transition-colors hover:text-cyan-300">
            Features
          </a>
          <a href="#specs" className="text-zinc-400 transition-colors hover:text-cyan-300">
            Specs
          </a>
          <a href="#faq" className="text-zinc-400 transition-colors hover:text-cyan-300">
            FAQ
          </a>
          <a href="#waitlist" className="text-zinc-400 transition-colors hover:text-cyan-300">
            Join Waitlist
          </a>
        </nav>

        <p className="font-pixel text-[10px] uppercase tracking-wider text-zinc-500">© 2025 K75</p>
      </div>
    </footer>
  );
}
