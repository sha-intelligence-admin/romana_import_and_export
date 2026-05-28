import { useState } from 'react';
import { Plus } from 'lucide-react';
import { categories } from '../data';

export default function Categories() {
  const [direction, setDirection] = useState('export');
  const [openCat, setOpenCat] = useState(null);

  const switchDir = (d) => {
    setDirection(d);
    setOpenCat(null);
  };

  const toggle = (num) => {
    setOpenCat((prev) => (prev === num ? null : num));
  };

  const visible = categories.filter((c) => c.dir === direction);

  return (
    <section
      id="commodities"
      className="cat-radial relative z-[2] bg-paper-2 text-ink py-[80px] sm:py-[100px] lg:py-[140px] overflow-hidden"
    >
      <div className="max-w-page mx-auto px-pad relative z-10">
        <div className="reveal section-label mb-6">The Full Portfolio</div>
        <h2 className="reveal font-serif font-normal leading-[1.06] tracking-[-0.02em] max-w-[950px] mb-6 text-ink text-[clamp(34px,5.5vw,64px)]">
          Seven categories.
          <br />
          <em className="italic font-light text-terracotta">Everything Nigeria sends out</em>,<br />
          everything we bring in.
        </h2>
        <p className="reveal text-[16px] sm:text-[18px] max-w-[680px] text-ink-mute leading-[1.6] font-light mb-9 sm:mb-12">
          Romana Import and Export Limited is a full-spectrum trading house. Tap any category to
          see what falls inside. Every product moves under global trade standards, with full
          documentation, certification, and compliance.
        </p>

        {/* Trade toggle */}
        <div
          className="reveal inline-flex border border-black/10 rounded-full p-1 mt-2 mb-12 bg-ink/5 max-sm:w-full"
          role="tablist"
        >
          {['export', 'import'].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => switchDir(d)}
              className={`max-sm:flex-1 font-mono text-[10.5px] tracking-[0.2em] uppercase px-5 sm:px-[22px] py-3 rounded-full cursor-pointer transition-all duration-300 ${
                direction === d
                  ? 'bg-gold text-ink'
                  : 'bg-transparent text-ink/60 hover:text-terracotta'
              }`}
            >
              {d === 'export' ? 'Export from Nigeria' : 'Import into Nigeria'}
            </button>
          ))}
        </div>

        {/* Categories list */}
        <div className="reveal flex flex-col border-t border-black/10">
          {visible.map((cat) => {
            const isOpen = openCat === cat.num;
            return (
              <div
                key={cat.num}
                className={`border-b border-black/10 transition-colors duration-300 ${
                  isOpen ? 'bg-gold/[0.06]' : 'hover:bg-gold/[0.04]'
                }`}
              >
                <div
                  className="grid items-center cursor-pointer gap-5 sm:gap-6 lg:gap-8 px-4 sm:px-5 lg:px-6 py-6 sm:py-7 lg:py-8 grid-cols-[1fr_auto] sm:grid-cols-[48px_1fr_auto] lg:grid-cols-[60px_1fr_auto_auto]"
                  onClick={() => toggle(cat.num)}
                >
                  <div className="font-mono text-[12px] text-terracotta tracking-[0.15em] hidden sm:block">
                    / {cat.num}
                  </div>
                  <div className="font-serif font-normal leading-[1.1] tracking-[-0.02em] text-ink text-[20px] sm:text-[24px] lg:text-[32px] min-w-0">
                    {cat.nameStart}
                    <em className="italic text-terracotta font-light">{cat.nameEm}</em>
                  </div>
                  <div className="font-mono text-[10.5px] text-ink/60 tracking-[0.15em] uppercase whitespace-nowrap hidden lg:block">
                    {cat.items.length} Products
                  </div>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-gold text-ink border-gold rotate-45'
                        : 'border-black/15 text-terracotta'
                    }`}
                  >
                    <Plus size={16} strokeWidth={1.5} />
                  </div>
                </div>

                <div className={`cat-body ${isOpen ? 'open' : ''}`}>
                  <div className="pl-[18px] pr-[18px] pb-7 sm:pl-[76px] sm:pr-6 sm:pb-8 lg:pl-[116px] lg:pb-10">
                    <div className="font-serif text-[17px] italic font-light text-ink-mute leading-[1.5] max-w-[700px] mb-8 pb-6 border-b border-black/[0.08]">
                      {cat.tagline}
                    </div>
                    <div className="grid gap-px bg-paper border border-black/10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-paper px-[22px] pt-[22px] pb-5 transition-colors duration-300 hover:bg-gold/[0.08] flex flex-col min-h-[132px]"
                        >
                          <div className="font-serif text-[16px] font-medium leading-[1.2] text-ink mb-2 tracking-[-0.01em]">
                            {item.name}
                          </div>
                          <div className="text-[12.5px] leading-[1.55] text-ink/60 font-light">
                            {item.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logistics handoff card */}
        <div
          className="logistics-radial reveal mt-20 p-8 sm:p-10 lg:p-14 relative overflow-hidden border border-gold-soft/[0.18]"
          style={{
            background:
              'linear-gradient(135deg, rgba(184, 134, 11, 0.08) 0%, rgba(139, 58, 31, 0.06) 100%)',
          }}
        >
          <div className="logistics-tag mb-[18px]">After the trade</div>
          <h3 className="font-serif font-normal leading-[1.18] tracking-[-0.015em] text-ink mb-[18px] max-w-[760px] text-[clamp(22px,4vw,42px)]">
            <em className="italic text-terracotta font-light">Romana Logistics</em> handles the last
            mile.
          </h3>
          {/* <p className="text-[15px] sm:text-[16px] leading-[1.65] text-paper/70 font-light max-w-[760px]">
            Once a container leaves origin, our sister company{' '}
            <strong className="text-terracotta font-medium">Romana Logistics</strong> takes over —
            moving every shipment to its final destination across our global hub network in Lagos,
            Dubai, Barcelona, Rotterdam, London, Nairobi, Johannesburg, São Paulo, and Mexico City.
            Trade in. Trade out. Delivered.
          </p> */}
        </div>
      </div>
    </section>
  );
}
