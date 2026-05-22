'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Donation');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(`AshaJyothi Contact Form: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Topic: ${topic}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:mallavalli79@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('sent');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 800);
  };

  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <header className="ph">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <h1 className="reveal" data-delay="1">
            Come and see. <em>We pick up.</em>
          </h1>
          <p className="lead reveal" data-delay="2">
            Walk-ins welcome with a day's notice. Or call, write, message us on Facebook or Instagram — Madhavi or one of the team will reply directly.
          </p>
        </div>
      </header>

      {/* ─── CONTACT GRID ─────────────────────────────────────── */}
      <section className="cg">
        <div className="container cg-grid">
          <div className="visit">
            <div className="vcard reveal">
              <span className="pre">Visit the campus</span>
              <h3>AshaJyothi Handicapped Welfare Society</h3>
              <p>
                Hanuman Junction
                <br />
                West Godavari District
                <br />
                Andhra Pradesh, India — 521105
              </p>
              <a href="https://www.google.com/maps?q=Hanuman+Junction+Andhra+Pradesh" target="_blank" rel="noopener noreferrer">
                Get directions →
              </a>
            </div>

            <div className="vcard reveal" data-delay="1">
              <span className="pre">Call or message</span>
              <p style={{ marginBottom: '-4px' }}>Madhavi or one of the team. We answer most days between 9am &amp; 7pm IST.</p>
              <div className="biggie">+91 96030 21871</div>
              <a href="mailto:contact@ashajyothiindia.org">contact@ashajyothiindia.org →</a>
            </div>

            <div className="map reveal" data-delay="2">
              <span className="pin">AshaJyothi · Hanuman Junction</span>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.78%2C16.61%2C81.0%2C16.78&amp;layer=mapnik&amp;marker=16.69,80.89"
                title="Map of Hanuman Junction, Andhra Pradesh"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form className="cform reveal" data-delay="1" onSubmit={handleSubmit}>
            <h2>
              Drop us <em>a note.</em>
            </h2>
            <p className="sub">Tell us what brings you here — donation, volunteering, partnership, press, or a personal question.</p>

            <div className="row">
              <div className="field">
                <label>/ First name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>/ Last name</label>
                <input
                  type="text"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>/ Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>/ Phone number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>/ What's this about?</label>
              <div className="ptype">
                {['Donation', 'Volunteer', 'Visit', 'Partnership', 'Press', 'Other'].map((t) => (
                  <label key={t}>
                    <input
                      type="radio"
                      name="topic"
                      checked={topic === t}
                      onChange={() => setTopic(t)}
                    />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>/ Message</label>
              <textarea
                placeholder="Hi AshaJyothi …"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit" disabled={status === 'sending'}>
              <span>
                {status === 'sent'
                  ? 'Sent · we will reply within 48h'
                  : status === 'sending'
                  ? 'Sending...'
                  : 'Send message'}
              </span>
              <span className="arr">→</span>
            </button>
          </form>
        </div>
      </section>

      {/* ─── SOCIAL STRIP ─────────────────────────────────────── */}
      <section className="socialstrip">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">On the socials</span>
            <span className="n">/ 02</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              Updates straight from <em>Madhavi.</em>
            </h2>
            <p>
              The fastest way to see what's actually happening at AshaJyothi is to follow Madhavi directly — she posts new arrivals, recoveries, medical camps, and the occasional birthday.
            </p>
          </div>

          <div className="sgrid">
            <a className="sblock fb reveal" href="https://www.facebook.com/madhavi.latha.560" target="_blank" rel="noopener noreferrer">
              <div className="top">
                <div className="logo">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8z" />
                  </svg>
                </div>
                <div className="handle">@madhavi.latha.560</div>
              </div>
              <h4>Facebook</h4>
              <p>Daily updates from the campus, photo albums of medical camps and celebrations, and Madhavi's longer reflections.</p>
              <span className="more">Follow on Facebook →</span>
            </a>

            <a className="sblock ig reveal" data-delay="1" href="https://www.instagram.com/madhavi.latha.560?igsh=MTZsa2R0bHF3d2RvdQ==" target="_blank" rel="noopener noreferrer">
              <div className="top">
                <div className="logo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div className="handle">@madhavi.latha.560</div>
              </div>
              <h4>Instagram</h4>
              <p>Photos and short reels straight from campus — the children, the carers, the kitchen, the everyday.</p>
              <span className="more">Follow on Instagram →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─────────────────────────────────────────── */}
      <section className="partners">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Walking with us</span>
            <span className="n">/ 03</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              Three organisations that <em>showed up.</em>
            </h2>
            <p>The partners who have made our work possible — year after year, quietly.</p>
          </div>
          <div className="pcards">
            <div className="pc reveal">
              <div className="pimg">
                <img
                  src="https://static.wixstatic.com/media/437f08_63a9e850b3a44bb982e9b7b1960d62da~mv2.jpg/v1/fill/w_900,h_560,al_c,q_85,enc_avif,quality_auto/Chicago%20Andhra%20(8).jpg"
                  alt="CAA Annadanam"
                />
              </div>
              <div className="pbody">
                <div className="ptype-pre">Annadanam · daily food</div>
                <h4>Chicago Andhra Association</h4>
                <p>Daily food through the Annadanam scheme. Women's empowerment, school renovations, student scholarships.</p>
              </div>
            </div>
            <div className="pc reveal" data-delay="1">
              <div className="pimg">
                <img
                  src="https://static.wixstatic.com/media/437f08_d0e29eedf367472bbf7207d4edf8e0ae~mv2.jpg/v1/fill/w_900,h_560,al_c,q_85,enc_avif,quality_auto/collage.jpg"
                  alt="Save the Child Foundation"
                />
              </div>
              <div className="pbody">
                <div className="ptype-pre">Programs · aids · relief</div>
                <h4>Save the Child Foundation</h4>
                <p>PARI, aids &amp; appliances, child sponsorship, half-saree celebrations, Covid relief, vocational training, medical camps.</p>
              </div>
            </div>
            <div className="pc reveal" data-delay="2">
              <div className="pimg">
                <img
                  src="https://static.wixstatic.com/media/437f08_17507bf4c86745b6a7ff4b26abf9d78d~mv2.jpg/v1/fill/w_900,h_560,al_c,q_85,enc_avif,quality_auto/PHOTO-2021-04-19-13-39-17.jpg"
                  alt="Empower &amp; Excel"
                />
              </div>
              <div className="pbody">
                <div className="ptype-pre">501(c)(3) · California, USA</div>
                <h4>Empower &amp; Excel</h4>
                <p>Backing AshaJyothi since 2019 with donor-funded project initiatives. California-based US 501(c)(3).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="faq">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Common questions</span>
            <span className="n">/ 04</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              If you're wondering, <em>so were others.</em>
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item reveal" open>
              <summary>Can I visit AshaJyothi?</summary>
              <div className="body">
                Yes — please call or write a day in advance so we can plan a tour. Visiting hours are typically 10am to 4pm IST. Children appreciate gentle company; please don't bring sweets.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary>Are my donations tax-deductible?</summary>
              <div className="body">
                All non-cash donations are exempt under Section 80G &amp; 12A of the Income Tax Act, 1961. We send a digital receipt within 48 hours of receiving your gift.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary>What's the difference between sponsoring a child and a one-time gift?</summary>
              <div className="body">
                Sponsorship is monthly ($150/child) and covers everything that child needs — food, school, medical, hygiene. One-time gifts buy a specific thing (wheelchair, day's food, hearing aid) or go to the general fund.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary>Can I volunteer?</summary>
              <div className="body">
                Yes. We particularly welcome qualified physiotherapists, special educators, and medical professionals. Long-term volunteers from Ireland and Germany return each year. Please write to us with your skills and availability.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary>How do I know my money is being used well?</summary>
              <div className="body">
                When your gift is spent, we tell you what on — with a photograph where appropriate. Annual reports are available on request. Our overhead stays under 10%.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary>Do you take corporate or institutional partnerships?</summary>
              <div className="body">
                Yes — we currently work with Chicago Andhra Association, Save the Child Foundation, Empower &amp; Excel, and Neurogen Mumbai. Reach out via the form above marked "Partnership".
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────── */}
      <section className="cta-strip">
        <div className="container">
          <h3>
            Eighty-three children are waiting at home <em>right now.</em>
          </h3>
          <div className="right">
            <Link href="/donate">Sponsor a child · $150/mo <span>→</span></Link>
            <Link className="alt" href="/about">Read our story <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
