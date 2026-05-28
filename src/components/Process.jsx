import { processSteps } from '../data';

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-[2] bg-paper-2 py-[80px] sm:py-[100px] lg:py-[140px]"
    >
      <div className="max-w-page mx-auto px-pad">
        <div className="reveal section-label mb-6">How We Work</div>
        <h2 className="reveal font-serif font-normal leading-[1.06] tracking-[-0.02em] max-w-[950px] mb-6 text-[clamp(34px,5.5vw,64px)]">
          Four stages.
          <br />
          <em className="italic font-light text-terracotta-deep">From the farm to your warehouse.</em>
        </h2>
        <p className="reveal text-[16px] sm:text-[18px] max-w-[680px] text-ink-mute leading-[1.6] font-light mb-9 sm:mb-14">
          The trade looks complex on paper. Done right, it's four simple stages — handled by
          professionals who do this every single day.
        </p>

        <div className="grid gap-9 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14">
          {processSteps.map((s) => (
            <div key={s.num} className="reveal process-step-divider">
              <div className="font-serif text-[48px] text-terracotta-deep leading-none tracking-[-0.02em] mb-6 font-normal">
                {s.num}
              </div>
              <h4 className="font-serif text-[22px] font-medium leading-[1.25] mb-3 text-ink">
                {s.title}
              </h4>
              <p className="text-[14.5px] leading-[1.6] text-ink-mute font-light">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
