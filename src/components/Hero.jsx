import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="hero-radial relative max-w-page mx-auto flex flex-col justify-center px-pad pt-[120px] sm:pt-[140px] lg:pt-[180px] pb-16 sm:pb-20 lg:pb-[100px] lg:min-h-[92vh] z-[2]"
    >
      <h1 className="anim-fadeup font-serif font-normal tracking-[-0.035em] max-w-[1100px] text-ink mb-6 text-[44px] xs:text-[clamp(48px,9vw,132px)] leading-[1] sm:leading-[0.92]">
        Where <em className="italic font-light text-terracotta-deep">Africa</em>
        <br className="hidden sm:block" />
        trades with
        <br className="hidden sm:block" />
        the <span className="hero-underline whitespace-normal sm:whitespace-nowrap">world.</span>
      </h1>
      <div className="anim-fadeup-late flex gap-5 items-center flex-wrap mt-6 max-sm:flex-col max-sm:items-stretch">
        <a
          href="#commodities"
          className="group bg-ink text-paper px-8 py-[18px] rounded-full font-medium text-[14.5px] inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-terracotta-deep hover:-translate-y-0.5 justify-center"
        >
          Explore the Portfolio
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="px-8 py-[18px] rounded-full font-medium text-[14.5px] text-ink border border-ink inline-flex items-center gap-2.5 justify-center transition-all duration-300 hover:bg-ink hover:text-paper hover:-translate-y-0.5"
        >
          Start a conversation
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
