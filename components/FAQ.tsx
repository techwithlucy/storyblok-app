import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'When does the keyboard launch?',
    answer:
      'The K75 launches on October 20. Join the waitlist to be the first to know the moment it goes live.',
  },
  {
    question: 'Does it support macOS?',
    answer:
      'Yes. The K75 works with macOS, Windows and Linux, with a dedicated toggle to switch the modifier layout instantly.',
  },
  {
    question: 'Are the switches hot-swappable?',
    answer:
      'Absolutely. You can swap switches in seconds without any soldering, so you can fine-tune the feel whenever you like.',
  },
  {
    question: 'Will international shipping be available?',
    answer:
      'We plan to ship internationally at launch. Exact regions and shipping costs will be shared with waitlist members closer to October 20.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t-2 border-cyan-400/10 py-24">
      <div className="container max-w-3xl">
        <h2 className="mb-12 text-center font-pixel text-xl leading-relaxed text-white sm:text-2xl">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-2 border-cyan-400/20 bg-white/[0.02] p-5 pixel-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-pixel text-xs leading-relaxed text-white marker:hidden">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-retro text-lg leading-snug text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
