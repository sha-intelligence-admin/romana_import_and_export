import { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvzroww';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          _subject: `Sourcing Inquiry \u2014 ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMsg(
          data?.errors?.map((er) => er.message).join(', ') ||
            'Something went wrong. Please try again.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section
      id="contact"
      className="contact-radial relative z-[2] bg-paper-2 text-ink overflow-hidden py-[80px] sm:py-[100px] lg:py-[140px]"
    >
      <div className="max-w-page mx-auto px-pad relative z-10">
        <div className="reveal section-label mb-6">Start The Conversation</div>
        <h2 className="reveal font-serif font-normal leading-[1.04] tracking-[-0.02em] max-w-[1000px] mb-16 text-[clamp(38px,7vw,96px)]">
          Let's discuss what
          <br className="hidden sm:block" />
          <em className="italic text-terracotta">Nigeria can deliver</em>
          <br className="hidden sm:block" />
          for your business.
        </h2>

        <div className="grid gap-16 lg:gap-[100px] grid-cols-1 lg:grid-cols-2 items-start">
          <div className="reveal flex flex-col gap-7">
            <div className="pb-6 border-b border-black/10">
              <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-terracotta mb-2.5 flex items-center gap-2">
                <Mail size={12} /> Email
              </div>
              <a
                href="mailto:info@romanaie.co"
                className="font-serif text-[22px] font-normal text-ink transition-colors hover:text-terracotta"
              >
                info@romanaie.co
              </a>
            </div>
            <div className="pb-6 border-b border-black/10">
              <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-terracotta mb-2.5 flex items-center gap-2">
                <Phone size={12} /> Phone
              </div>
              <a
                href="tel:+2348036802214"
                className="font-serif text-[22px] font-normal text-ink transition-colors hover:text-terracotta"
              >
                +234 803 680 2214
              </a>
            </div>
            <div>
              <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-terracotta mb-2.5 flex items-center gap-2">
                <MapPin size={12} /> Headquarters
              </div>
              <div className="font-serif text-[17px] leading-[1.4] text-ink-mute">
                Plot 510, Olusegun Obasanjo Way,
                <br />
                Wuse Zone 1, Abuja,
                <br />
                Federal Republic of Nigeria.
              </div>
            </div>
          </div>

          <div className="reveal bg-white border border-black/10 p-7 sm:p-10 shadow-sm">
            <h4 className="font-serif text-[22px] font-normal leading-[1.2] mb-2 text-ink">Send us a note</h4>
            <p className="text-[14px] text-ink-mute mb-7 font-light">
              Tell us what you're sourcing. We'll respond personally within 48 hours.
            </p>

            {status === 'success' ? (
              <div className="border border-gold-soft/30 bg-gold/[0.08] p-6 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-terracotta shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-[18px] text-ink mb-1">Message received.</div>
                  <p className="text-[13.5px] text-ink-mute font-light">
                    Thank you. We'll respond personally within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-[12px] tracking-[0.15em] uppercase font-mono text-terracotta hover:text-ink transition-colors"
                  >
                    Send another →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <input
                  name="name"
                  className="field"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  disabled={status === 'submitting'}
                  required
                />
                <input
                  name="email"
                  className="field"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={onChange}
                  disabled={status === 'submitting'}
                  required
                />
                <input
                  name="company"
                  className="field"
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={onChange}
                  disabled={status === 'submitting'}
                />
                <textarea
                  name="message"
                  className="field"
                  placeholder="What are you sourcing? What volumes? Tell us a little."
                  value={form.message}
                  onChange={onChange}
                  disabled={status === 'submitting'}
                  required
                />

                {status === 'error' && (
                  <div className="mt-3 flex items-start gap-2 text-[13px] bg-terracotta/10 border border-terracotta/30 p-3">
                    <AlertCircle size={16} className="shrink-0 mt-0.5 text-terracotta" />
                    <span className="text-ink/80">{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group mt-6 bg-gold text-ink border-none px-7 py-4 font-sans font-medium text-[13.5px] tracking-[0.02em] rounded-full cursor-pointer transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5 inline-flex items-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <>
                      Sending
                      <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
