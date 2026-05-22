import React from 'react';
import Link from 'next/link';
import NewsFeed from '@/components/NewsFeed';

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <header className="hero" id="top">
        <div className="container">
          <div className="topline reveal">
            <span>Hanuman Junction · Andhra Pradesh · est. 1998</span>
            <span className="live">
              <span className="pulse-ring"></span>
              <span className="pulse-ring delay-1"></span>
              <span className="pulse-ring delay-2"></span>
              <span className="pulse-dot"></span>
              70+ children at home today
            </span>
          </div>

          <h1 className="mega reveal reveal-split" data-delay="1">
            We are a <em>home</em>
            <span className="chip">
              <img 
                src="https://static.wixstatic.com/media/437f08_0fb69566f899453ea5ca54dacdf00004~mv2.jpg/v1/fill/w_440,h_280,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Kids%20(23)_JPG.jpg" 
                alt="AshaJyothi Kids"
              />
            </span>
            for children<br />others left behind.
          </h1>

          <div className="hero-foot reveal" data-delay="2">
            <p className="lead">
              For 27 years AshaJyothi has been the family of last resort for abandoned children with cerebral palsy, autism, Down syndrome and severe physical disabilities. <strong>We feed them, treat them, school them — and we don't stop.</strong>
            </p>

            <div className="quickdo">
              <Link href="/about" className="ctaprimary">
                <span>Read our story</span>
                <span className="pill">since 1998</span>
              </Link>
              <div className="ctagrid">
                <Link href="/donate">Donate <span>→</span></Link>
                <Link href="/programs">What we do <span>→</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bleed reveal" data-delay="3">
          <div className="yt-wrap">
            <iframe 
              src="https://www.youtube.com/embed/xrmAAJg-1nw?autoplay=1&mute=1&loop=1&playlist=xrmAAJg-1nw&controls=0&rel=0&modestbranding=1&playsinline=1" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="AshaJyothi Video Loop"
            ></iframe>
          </div>
          <div className="overlay">
            <h3>The AshaJyothi campus — Hanuman Junction, West Godavari District.</h3>
            <div className="meta">
              70+ children · 24/7 care<br />
              in-house school &amp; physio<br />
              founded 1998
            </div>
          </div>
        </div>
      </header>

      {/* ─── IMPACT TICKER ────────────────────────────────────── */}
      <div className="impact-ticker" aria-hidden="true">
        <div className="ticker-track">
          <div className="ticker-item"><span className="ticker-num">70+</span><span className="ticker-sep"></span><span className="ticker-label">children on campus today</span></div>
          <div className="ticker-item"><span className="ticker-num">27</span><span className="ticker-sep"></span><span className="ticker-label">years of unbroken care</span></div>
          <div className="ticker-item"><span className="ticker-num">$150</span><span className="ticker-sep"></span><span className="ticker-label">sponsors a child for a month</span></div>
          <div className="ticker-item"><span className="ticker-num">24/7</span><span className="ticker-sep"></span><span className="ticker-label">care, 365 days a year</span></div>
          <div className="ticker-item"><span className="ticker-num">0</span><span className="ticker-sep"></span><span className="ticker-label">children ever turned away</span></div>
          <div className="ticker-item"><span className="ticker-num">$100</span><span className="ticker-sep"></span><span className="ticker-label">buys a new wheelchair</span></div>
          <div className="ticker-item"><span className="ticker-num">1998</span><span className="ticker-sep"></span><span className="ticker-label">when it all began</span></div>
          {/* duplicate for seamless loop */}
          <div className="ticker-item"><span className="ticker-num">70+</span><span className="ticker-sep"></span><span className="ticker-label">children on campus today</span></div>
          <div className="ticker-item"><span className="ticker-num">27</span><span className="ticker-sep"></span><span className="ticker-label">years of unbroken care</span></div>
          <div className="ticker-item"><span className="ticker-num">$150</span><span className="ticker-sep"></span><span className="ticker-label">sponsors a child for a month</span></div>
          <div className="ticker-item"><span className="ticker-num">24/7</span><span className="ticker-sep"></span><span className="ticker-label">care, 365 days a year</span></div>
          <div className="ticker-item"><span className="ticker-num">0</span><span className="ticker-sep"></span><span className="ticker-label">children ever turned away</span></div>
          <div className="ticker-item"><span className="ticker-num">$100</span><span className="ticker-sep"></span><span className="ticker-label">buys a new wheelchair</span></div>
          <div className="ticker-item"><span className="ticker-num">1998</span><span className="ticker-sep"></span><span className="ticker-label">when it all began</span></div>
        </div>
      </div>

      {/* ─── REALITY ───────────────────────────────────────────── */}
      <section className="reality" id="impact">
        <div className="container">
          <div className="seclabel reveal"><span className="dot"></span><span className="t">The reality</span><span class="n">/ 01</span></div>
          <div className="sec-intro reveal">
            <h2 className="big">Twenty-seven years, told <em>plainly.</em></h2>
            <p>No glossy frame, no rounded numbers — the figures behind the work, exactly as they stand.</p>
          </div>
          <div className="stats">
            <div className="stat reveal">
              <span className="pre">/ Children</span>
              <span className="num">70<em>+</em></span>
              <p>Living on campus right now — cerebral palsy, autism, Down syndrome, blind, deaf.</p>
            </div>
            <div className="stat reveal" data-delay="1">
              <span className="pre">/ Years</span>
              <span className="num">27<em>.</em></span>
              <p>Of unbroken care since the first ten children arrived in 1998.</p>
            </div>
            <div className="stat reveal" data-delay="2">
              <span className="pre">/ Wheelchairs</span>
              <span className="num">20<em>+</em></span>
              <p>20+ total wheelchairs today. But we need more to help Asha Jyothi children. A new one costs ~ $100.</p>
            </div>
            <div className="stat reveal" data-delay="3">
              <span className="pre">/ Per month</span>
              <span className="num"><em>$</em>150</span>
              <p>Sponsors a child for a month — food, hygiene, school, medicine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORIES SNAPSHOT ──────────────────────────────────── */}
      <section className="stories">
        <div className="container">
          <div className="seclabel reveal"><span class="dot"></span><span className="t">From the campus</span><span class="n">/ 02</span></div>
          <div className="sec-intro reveal">
            <h2 className="big">Recent moments from <em>the campus.</em></h2>
            <p>Real moments, written by us. Posted when they happen — no PR voice, no schedule.</p>
          </div>

          <div className="story-grid">
            <a className="scard lg reveal" href="https://www.facebook.com/madhavi.latha.560" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://static.wixstatic.com/media/437f08_4eac094f810646b797ef918f7a832e14~mv2.jpg/v1/fill/w_900,h_700,al_c,q_85,enc_avif,quality_auto/IMG_20160907_115554.jpg" 
                alt="Medical camp" 
                loading="lazy"
              />
              <div className="scontent">
                <div className="top"><span>FIELD NOTE · Medical camp</span><span className="date">Recent</span></div>
                <div>
                  <h3>Sixty-seven check-ups in one afternoon.</h3>
                  <p>The monthly Neurogen-supported camp. Two new hearing-aid fittings, three physio plans updated, one cataract referral.</p>
                </div>
              </div>
            </a>
            <a className="scard reveal" data-delay="1" href="https://www.facebook.com/madhavi.latha.560" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://static.wixstatic.com/media/437f08_d8de5227de6f4a6a81f8642180e4ed5a~mv2.jpg/v1/fill/w_700,h_700,al_c,q_85,enc_avif,quality_auto/Local%20Sponsors%20(16).jpg" 
                alt="Chicago Andhra event" 
                loading="lazy"
              />
              <div className="scontent">
                <div className="top"><span>PARTNER</span><span className="date">Ongoing</span></div>
                <h3>Chicago Andhra funds a month of meals.</h3>
              </div>
            </a>
            <a className="scard reveal" data-delay="2" href="https://www.facebook.com/madhavi.latha.560" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://static.wixstatic.com/media/437f08_8dca7b2d49d64202878d25bb91a7dc03~mv2.jpg/v1/fill/w_700,h_700,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Activities%20(21)_JPG.jpg" 
                alt="Tailoring Batch" 
                loading="lazy"
              />
              <div className="scontent">
                <div className="top"><span>VOCATIONAL</span><span className="date">Latest batch</span></div>
                <h3>A new batch finishes tailoring training.</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── LATEST NEWS ──────────────────────────────────────── */}
      <section className="campus-news" id="latest-news">
        <div className="container">
          <div className="seclabel reveal"><span className="dot"></span><span className="t">Latest news</span><span class="n">/ 03</span></div>
          <div className="sec-intro reveal">
            <h2 className="big">Live from <em>the campus.</em></h2>
            <p>Photos and videos posted straight from our team — as they happen.</p>
          </div>
          <NewsFeed />
        </div>
      </section>

      {/* ─── 3 WAYS TO HELP ───────────────────────────────────── */}
      <section className="help">
        <div className="container">
          <div className="seclabel reveal"><span className="dot"></span><span className="t">Three ways in</span><span class="n">/ 04</span></div>
          <div className="sec-intro reveal">
            <h2 className="big">Where you fit, <em>in plain terms.</em></h2>
            <p>You don't need to give everything — you just need to pick one.</p>
          </div>
          <div className="help-grid">
            <Link className="hcard reveal" href="/donate">
              <span className="ico">$</span>
              <span className="pre">Monthly</span>
              <h3>Sponsor a child for $150 a month.</h3>
              <p>One child, every month. Food, school, medical, hygiene — everything covered, no gaps.</p>
              <span className="more">Sponsor monthly <span>→</span></span>
            </Link>
            <Link className="hcard reveal" data-delay="1" href="/donate#items">
              <span className="ico">★</span>
              <span className="pre">One-time</span>
              <h3>Buy one specific thing.</h3>
              <p>A wheelchair, a hearing aid, a day's food for everyone, a month of PARI pads. Pick the one that fits.</p>
              <span className="more">Pick an item <span>→</span></span>
            </Link>
            <Link className="hcard reveal" data-delay="2" href="/contact">
              <span className="ico">✻</span>
              <span className="pre">In person</span>
              <h3>Visit, volunteer or partner.</h3>
              <p>Come to the campus, send your skills, or bring your organisation alongside ours.</p>
              <span className="more">Get in touch <span>→</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CHAIRMAN PROFILE ──────────────────────────────────── */}
      <section style={{ background: 'var(--paper-2)', padding: '60px 0' }}>
        <div className="container">
          <div className="ch-home-grid">
            <div className="ch-home-photo reveal">
              <img 
                src="https://res.cloudinary.com/dshrpij9a/image/upload/v1779077932/IMG-20260518-WA0000_d98kec.jpg" 
                alt="Madhavi Latha Mareedu, Chairman of AshaJyothi"
              />
            </div>
            <div className="ch-home-text">
              <div className="seclabel reveal"><span className="dot"></span><span class="t">The person behind it</span><span class="n">/ 05</span></div>
              <h2 className="big reveal">Madhavi Latha <em>Mareedu.</em></h2>
              <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--ink-soft)', margin: '0 0 20px' }}>
                Chairman and founder of AshaJyothi since 1998. She started with two abandoned children and a borrowed room. Twenty-seven years later, she has built a campus of 70+ children — and she is still there every day.
              </p>
              <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--ink-soft)', margin: '0 0 32px' }}>
                Her work spans medical rehabilitation, inclusive education, disaster relief, and women's empowerment — impacting 4,100+ lives across Andhra Pradesh. Recognised by the Chief Minister of AP, the Government of India, and international humanitarian organisations.
              </p>
              <Link href="/chairman" className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--ink)', color: 'var(--paper)', padding: '16px 26px', borderRadius: '12px', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>
                Read her full bio <span style={{ color: 'var(--accent)' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────── */}
      <section className="cta-strip">
        <div className="container">
          <h3>Eighty-three children are waiting at home <em>right now.</em></h3>
          <div className="right">
            <Link href="/donate">Sponsor a child · $150/mo <span>→</span></Link>
            <Link className="alt" href="/about">Read our story <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
