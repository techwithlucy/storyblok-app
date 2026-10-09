import { Cloud } from 'lucide-react';

export default function Navbar({ offset = false }: { offset?: boolean }) {
  return (
    <header
      className={`fixed inset-x-0 ${
        offset ? "top-10" : "top-0"
      } z-50 border-b-2 border-cyan-400/20 bg-[#0b0b14]/85 backdrop-blur-md`}
    >
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center border-2 border-cyan-400/50 bg-cyan-400/10 text-cyan-300">
            <Cloud className="h-4 w-4" />
          </span>
          <span className="font-pixel text-sm text-white">K75</span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 font-pixel text-[10px] uppercase tracking-wider md:flex">
          <a href="#features" className="text-zinc-400 transition-colors hover:text-cyan-300">
            Features
          </a>
          <a href="#specs" className="text-zinc-400 transition-colors hover:text-cyan-300">
            Specs
          </a>
          <a href="#faq" className="text-zinc-400 transition-colors hover:text-cyan-300">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="border-2 border-cyan-200 bg-cyan-400 px-4 py-2 font-pixel text-[10px] uppercase text-black pixel-shadow-cyan transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}