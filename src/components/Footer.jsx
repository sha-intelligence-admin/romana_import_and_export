export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50 px-pad pt-[60px] pb-10 border-t border-white/[0.08] relative z-[2]">
      <div className="max-w-page mx-auto grid gap-6 lg:gap-10 grid-cols-1 lg:grid-cols-[1fr_auto] items-end">
        <div>
          <div className="font-serif text-[18px] text-paper font-medium mb-2.5">
            Romana Import &amp; Export Limited
          </div>
          <p className="text-[12.5px] leading-[1.6] max-w-[420px] font-light">
            A subsidiary of Romana Group — a multinational conglomerate connecting Africa to the
            global economy. CAC registered. NEPC compliant.
          </p>
        </div>
        <div className="font-mono text-[10.5px] tracking-[0.15em] uppercase leading-[1.8] text-paper/40 lg:text-right">
          © 2026 Romana Group
          <br />
          All rights reserved
          <br />
          <span className="text-gold-soft">romanaie.co</span>
        </div>
      </div>
    </footer>
  );
}
