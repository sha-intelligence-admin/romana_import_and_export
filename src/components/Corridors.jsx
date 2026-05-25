import { ArrowRight, ArrowLeft } from 'lucide-react';
import { exportCorridors, importCorridors } from '../data';

function CorridorBlock({ direction, headline, items }) {
  const isOut = direction === 'out';
  return (
    <div className="reveal bg-paper-2 border border-rule-soft p-6 sm:p-9 lg:p-11 relative">
      <div className="flex justify-between items-center mb-7 pb-5 border-b border-rule">
        <span
          className={`font-mono text-[10.5px] tracking-[0.22em] uppercase ${
            isOut ? 'text-gold-deep' : 'text-terracotta-deep'
          }`}
        >
          {isOut ? 'Exporting From Nigeria' : 'Importing Into Nigeria'}
        </span>
        {isOut ? (
          <ArrowRight size={26} strokeWidth={1.2} className="text-gold" />
        ) : (
          <ArrowLeft size={26} strokeWidth={1.2} className="text-gold" />
        )}
      </div>
      <h3 className="font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.02em] text-ink mb-8">
        {headline}
      </h3>
      <div className="flex flex-col">
        {items.map((c, i) => (
          <div
            key={c.country}
            className={`py-5 border-t border-rule-soft ${
              i === items.length - 1 ? 'border-b border-rule-soft' : ''
            }`}
          >
            <div className="font-serif text-[17px] font-medium text-ink mb-1.5 tracking-[-0.01em]">
              {c.country}
            </div>
            <div className="text-[13px] leading-[1.55] text-ink-mute font-light">{c.products}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Corridors() {
  return (
    <section
      id="corridors"
      className="relative z-[2] bg-paper py-[80px] sm:py-[100px] lg:py-[140px]"
    >
      <div className="max-w-page mx-auto px-pad">
        <div className="reveal section-label mb-6">Trade Corridors</div>
        <h2 className="reveal font-serif font-normal leading-[1.02] tracking-[-0.025em] max-w-[950px] mb-6 text-[clamp(34px,5.5vw,64px)]">
          Where Nigeria <em className="italic font-light text-terracotta-deep">sends out</em>.
          <br />
          Where Nigeria <em className="italic font-light text-terracotta-deep">brings in</em>.
        </h2>
        <p className="reveal text-[16px] sm:text-[18px] max-w-[680px] text-ink-mute leading-[1.6] font-light mb-9 sm:mb-12">
          Eight active trade routes connect Nigeria to the world's most important commodity buyers
          and suppliers. From export markets in the United States, European Union, and Asia, to
          import sources across Europe, Asia, and the Americas, Romana Import and Export Limited
          moves what moves the global economy.
        </p>

        <div className="grid gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 mt-16">
          <CorridorBlock
            direction="out"
            headline="Nigeria sends out to the world."
            items={exportCorridors}
          />
          <CorridorBlock
            direction="in"
            headline="Nigeria brings in from the world."
            items={importCorridors}
          />
        </div>
      </div>
    </section>
  );
}
