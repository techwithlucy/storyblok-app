import { storyblokEditable } from "@storyblok/react/rsc";

export default function AnnouncementBanner({ blok }: { blok: any }) {
  if (!blok.is_visible) return null;

  return (
    <div
      {...storyblokEditable(blok)}
      className="fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center gap-3 overflow-hidden border-b-2 border-fuchsia-400/40 bg-fuchsia-950 px-4 text-center font-pixel text-[10px] uppercase tracking-wider text-fuchsia-200"
    >
      <span className="truncate">{blok.message}</span>
      {blok.link_text && (
        <a
          href="#waitlist"
          className="shrink-0 text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
        >
          {blok.link_text}
        </a>
      )}
    </div>
  );
}