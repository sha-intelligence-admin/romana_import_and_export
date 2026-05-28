import { promises } from '../data';

export default function Promise() {
  return (
    <section className="relative z-[2] bg-paper py-[80px] sm:py-[100px] lg:py-[140px]">
      <div className="max-w-page mx-auto px-pad">
        <div className="grid gap-16 lg:gap-[100px] grid-cols-1 lg:grid-cols-2 items-start">
          <div className="lg:sticky lg:top-[120px]">
            <div className="reveal section-label mb-6">The Promise</div>
            <h2 className="reveal font-serif font-normal leading-[1.06] tracking-[-0.02em] max-w-[950px] mb-6 text-[clamp(34px,5.5vw,64px)]">
              What it means
              <br />
              to trade with <em className="italic font-light text-terracotta-deep">Romana.</em>
            </h2>
            <p className="reveal text-[16px] sm:text-[18px] max-w-[680px] text-ink-mute leading-[1.6] font-light">
              Five commitments that turn a transaction into a long-term partnership.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {promises.map((p, i) => (
              <div
                key={p.num}
                className={`reveal py-9 border-t border-rule grid gap-6 items-start grid-cols-1 sm:grid-cols-[70px_1fr] ${
                  i === promises.length - 1 ? 'border-b border-rule' : ''
                }`}
              >
                <div className="font-mono text-[12px] tracking-[0.1em] text-terracotta-deep pt-1">
                  / {p.num}
                </div>
                <div>
                  <h3 className="font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.01em] mb-2.5 text-ink">
                    {p.title}
                  </h3>
                  <p className="text-[15.5px] leading-[1.6] text-ink-mute font-light">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
