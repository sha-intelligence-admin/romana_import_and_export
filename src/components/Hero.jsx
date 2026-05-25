import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="hero-radial relative max-w-page mx-auto flex flex-col justify-center px-pad pt-[140px] sm:pt-[180px] pb-20 sm:pb-[100px] min-h-[92vh] z-[2]"
    >
      <h1 className="anim-fadeup font-serif font-normal leading-[0.92] tracking-[-0.035em] max-w-[1100px] text-ink mb-6 text-[clamp(48px,9vw,132px)]">
        Where <em className="italic font-light text-terracotta-deep">Africa</em>
        <br className="hidden sm:block" />
        trades with
        <br className="hidden sm:block" />
        the <span className="hero-underline">world.</span>
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
          className="py-[18px] font-medium text-[14.5px] text-ink border-b border-ink transition-all duration-300 hover:text-terracotta-deep hover:border-terracotta-deep"
        >
          Start a conversation →
        </a>
      </div>
    </section>
  );
}
