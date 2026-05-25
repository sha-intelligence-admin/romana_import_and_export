import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] border-b border-rule-soft transition-all duration-300 px-pad py-pad-nav"
      style={{
        backdropFilter: 'blur(20px)',
        background: 'rgba(250, 246, 238, 0.85)',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.04)' : 'none',
      }}
    >
      <div className="max-w-page mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-terracotta" />
          <span className="font-serif text-[22px] font-medium tracking-[-0.02em]">
            Romana{' '}
            <em className="italic text-ink-mute font-normal ml-1 hidden sm:inline">
              Import &amp; Export
            </em>
          </span>
        </a>
        <div className="flex gap-3 sm:gap-9 items-center text-[13.5px] font-normal text-ink-soft">
          <a href="#commodities" className="nav-link hidden sm:inline relative transition-colors hover:text-gold-deep">
            Portfolio
          </a>
          <a href="#corridors" className="nav-link hidden sm:inline relative transition-colors hover:text-gold-deep">
            Trade Routes
          </a>
          <a href="#process" className="nav-link hidden sm:inline relative transition-colors hover:text-gold-deep">
            How We Work
          </a>
          <a
            href="#contact"
            className="bg-ink text-paper px-5 py-2.5 rounded-full font-medium transition-colors hover:bg-terracotta-deep"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
