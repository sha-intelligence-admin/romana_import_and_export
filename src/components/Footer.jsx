const navLinks = [
  { label: 'Trade Portfolio', href: '#commodities' },
  { label: 'Trade Corridors', href: '#corridors' },
  { label: 'How We Work', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const groupLinks = [
  { label: 'Romana Group', href: '#' },
  { label: 'Investor Relations', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press & Media', href: '#' },
  { label: 'Newsroom', href: '#' },
];

const compliance = [
  { tag: 'NEPC', label: 'Nigerian Export Promotion Council' },
  { tag: 'NCS', label: 'Nigeria Customs Service' },
  { tag: 'CBN', label: 'Central Bank of Nigeria' },
  { tag: 'NAFDAC', label: 'Food & Drug Authority' },
  { tag: 'SON', label: 'Standards Organisation' },
  { tag: 'CAC', label: 'Corporate Affairs Commission' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        {/* Brand block */}
        {/* <div className="footer-brand-block"> */}
          {/* <div className="footer-brand">
            <span className="footer-mark" />
            Romana <em>Import &amp; Export</em> Limited
          </div> */}
          {/* <p className="footer-tag">
            A Nigerian commodity trading house connecting African resources to verified buyers
            across Europe, Asia, and the Americas. Built on trust, discipline, and the soil of
            Nigeria.
          </p>
          <div className="footer-locale">Headquartered in Abuja, Nigeria</div> */}
        {/* </div> */}

        {/* 4 columns */}
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-label">Navigate</div>
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-label">Contact</div>
            <ul>
              <li>
                <a href="mailto:info@romanaie.co">info@romanaie.com</a>
              </li>
              <li>
                <a href="tel:+2348036802214">+234 803 680 2214</a>
              </li>
              <li className="footer-address">
                Plot 510, Olusegun Obasanjo Way,
                <br />
                Wuse Zone 1, Abuja,
                <br />
                Federal Republic of Nigeria.
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-label">The Group</div>
            <ul>
              {groupLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-label">Compliance</div>
            <ul className="footer-compliance">
              {compliance.map((c) => (
                <li key={c.tag}>
                  <span className="reg-tag">{c.tag}</span>
                  <span className="reg-label">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Romana Import &amp; Export Limited. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="dot">·</span>
            <a href="#">Terms of Trade</a>
            <span className="dot">·</span>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-domain">romanaie.co</div>
        </div>
      </div>
    </footer>
  );
}
