import React from 'react';
import Link from 'next/link';
import ChairmanTabs from '@/components/ChairmanTabs';

export const metadata = {
  title: 'Our Chairman · AshaJyothi',
  description: 'Madhavi Latha Mareedu, Founder & Chairperson of AshaJyothi Handicapped Welfare Society. 27 years of dedicated service for children with special needs.',
};

export default function ChairmanPage() {
  return (
    <>
      {/* ─── PAGE INTRO ────────────────────────────────────────── */}
      <div className="ch-intro">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/about">About</Link>
            <span className="sep">/</span>
            <span>Our Chairman</span>
          </div>
        </div>
      </div>

      {/* ─── PROFILE HERO ──────────────────────────────────────── */}
      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="profile-hero">
            <div className="profile-photo reveal">
              <div className="profile-photo-wrap">
                <img
                  src="https://res.cloudinary.com/dshrpij9a/image/upload/v1779077605/Mother_Theresa_Award_iglq1b.jpg"
                  alt="Madhavi Latha Mareedu receiving the Mother Teresa Award, 2018"
                />
              </div>
              <div className="profile-caption">
                <strong>Mother Teresa Award · 2018</strong>
                Health Care International, Hyderabad — for 20 years of service to children with disabilities.
              </div>
            </div>

            <div className="profile-text">
              <div className="eyebrow reveal">Chairman · AshaJyothi</div>
              <h1 className="reveal" data-delay="1">
                Madhavi<br />
                <em>Latha</em><br />
                Mareedu
              </h1>
              <p className="role reveal" data-delay="2">
                Chief Functionary · Secretary · Correspondent · Since 1998
              </p>

              <p className="bio reveal" data-delay="2">
                Founder of AshaJyothi since 1998. Started with two abandoned children and a borrowed room — built a permanent campus of 70+ children with severe disabilities. Twenty-seven years of unbroken care, still on campus every day. Her work spans medical rehabilitation, inclusive education, women's empowerment, disaster relief, and judicial child welfare across Andhra Pradesh.
              </p>

              <div className="reveal" data-delay="3" style={{ marginBottom: '18px' }}>
                <p style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  margin: '0 0 10px'
                }}>
                  Education
                </p>
                <div className="cred-pills">
                  <span className="cred-pill">MSW · Acharya Nagarjuna University</span>
                  <span className="cred-pill">M.Sc. Psychology</span>
                  <span className="cred-pill">Diploma in Hearing, Language &amp; Speech</span>
                </div>
              </div>

              <div className="reveal" data-delay="3">
                <p style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  margin: '0 0 10px'
                }}>
                  Current Appointments
                </p>
                <div className="committee-tags">
                  <span className="ctag">Forum for Child Rights</span>
                  <span className="ctag">National Trust · WG Dist.</span>
                  <span className="ctag">ASRAM Hospital ICC</span>
                  <span className="ctag">PN &amp; PNDT ACT Committee</span>
                  <span className="ctag">SC/ST Vigilance Committee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT NUMBERS ────────────────────────────────────── */}
      <section className="ch-impact">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">27 years in numbers</span>
            <span className="n">/ 01</span>
          </div>
          <div className="impact-grid">
            <div className="impact-stat reveal">
              <span className="pre">/ People impacted</span>
              <span className="num">4,100<em>+</em></span>
              <p>Women &amp; children with disabilities across Krishna and West Godavari.</p>
            </div>
            <div className="impact-stat reveal" data-delay="1">
              <span className="pre">/ Children rehabilitated</span>
              <span className="num">1,000<em>+</em></span>
              <p>Brought back to health, mobility, and education through sustained care.</p>
            </div>
            <div className="impact-stat reveal" data-delay="2">
              <span className="pre">/ Sanitary pads</span>
              <span className="num">1<em>M+</em></span>
              <p>Distributed via PARI — generating employment and restoring dignity.</p>
            </div>
            <div className="impact-stat reveal" data-delay="3">
              <span className="pre">/ Girls educated</span>
              <span className="num">25<em>K+</em></span>
              <p>On menstrual hygiene across AP and Telangana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─────────────────────────────────────────────── */}
      <section className="ch-quote">
        <div className="container">
          <blockquote className="reveal">
            "Every child who came to us was abandoned or turned away. We never turned one away. <em>We never will.</em>"
          </blockquote>
          <cite className="reveal" data-delay="1">
            — Madhavi Latha Mareedu, Chairman · AshaJyothi
          </cite>
        </div>
      </section>

      {/* ─── PHOTO BANNER ──────────────────────────────────────── */}
      <div className="photo-banner reveal" style={{ marginTop: 0 }}>
        <img
          src="https://static.wixstatic.com/media/437f08_36971083bb934aa69a028399d805308c~mv2.jpg/v1/fill/w_1800,h_900,al_c,q_85,enc_avif,quality_auto/ashajyothi.jpg"
          alt="AshaJyothi campus"
        />
        <div className="banner-overlay">
          <div className="banner-text">
            <span className="bl">The campus she built</span>
            <h3>A permanent home for children who had none.</h3>
          </div>
        </div>
      </div>

      {/* ─── WORK TABS ─────────────────────────────────────────── */}
      <section className="ch-work">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">What she built</span>
            <span className="n">/ 02</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">27 years of <em>work.</em></h2>
            <p>Four areas — one sustained commitment.</p>
          </div>

          <ChairmanTabs />
        </div>
      </section>

      {/* ─── CAREER & RECOGNITION ──────────────────────────────── */}
      <section className="ch-career">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Career &amp; recognition</span>
            <span className="n">/ 03</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">Milestones &amp; <em>honours.</em></h2>
          </div>
          <div className="career-grid">
            <div className="reveal">
              <p style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                margin: '0 0 4px'
              }}>
                Timeline
              </p>
              <div className="mini-tl">
                <div className="mini-tl-item">
                  <span className="yr">1998</span>
                  <div className="ev">
                    <strong>Co-founded AshaJyothi</strong>
                    <span>Two children, one small house at Hanuman Junction.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2002</span>
                  <div className="ev">
                    <strong>Mandal Rehabilitation Supervisor</strong>
                    <span>Helped 1,000+ women access disability pensions &amp; certificates.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2006</span>
                  <div className="ev">
                    <strong>First Cochlear Implant</strong>
                    <span>Coordinated surgery &amp; full post-operative speech therapy.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2008</span>
                  <div className="ev">
                    <strong>Permanent Campus</strong>
                    <span>Chief Minister lays the foundation stone.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2012</span>
                  <div className="ev">
                    <strong>District Best IED Teacher</strong>
                    <span>Sarva Shiksha Abhiyan — 100% enrollment for 145 children.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2018</span>
                  <div className="ev">
                    <strong>CWC Chairperson</strong>
                    <span>Judicial Magistrate powers, West Godavari District.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2021</span>
                  <div className="ev">
                    <strong>Stem Cell Therapy Launch</strong>
                    <span>50 children treated; CM Relief Fund secured for 40.</span>
                  </div>
                </div>
                <div className="mini-tl-item">
                  <span className="yr">2023</span>
                  <div className="ev">
                    <strong>ASRAM Hospital MOU</strong>
                    <span>Free exclusive ward for all orphan children in the district.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal" data-delay="1">
              <p style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                margin: '0 0 4px'
              }}>
                Awards &amp; Honours
              </p>
              <div className="award-list">
                <div className="award-row">
                  <span className="aw-yr">2021</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">REX Karmaveer Chakra — Platinum</div>
                    <div className="aw-body">ICONGO, New Delhi — highest humanitarian category.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2019</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">Rashtriya Samman Award</div>
                    <div className="aw-body">Govt. of Andhra Pradesh — PARI initiative.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2019</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">Kalamandir Foundation Award</div>
                    <div className="aw-body">Services to adolescent girls · ₹5 lakh cash award.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2018</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">Mother Teresa Award</div>
                    <div className="aw-body">Health Care International, Hyderabad.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2018</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">State Best Women Entrepreneur</div>
                    <div className="aw-body">Received from the AP Chief Minister.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2016</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">CM Award + World HRD Congress</div>
                    <div className="aw-body">International Women's Day · Mumbai.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2012</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">District Best IED Teacher</div>
                    <div className="aw-body">Sarva Shiksha Abhiyan.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">2003</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">District Best Social Worker</div>
                    <div className="aw-body">Presented by the District Collector.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">——</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">NATA Public Service Award</div>
                    <div className="aw-body">North American Telugu Association, USA.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">——</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">Sri Padma Medha Award</div>
                    <div className="aw-body">Sri Padmavathi Mahila Vidyalayam, Tirupathi.</div>
                  </div>
                </div>
                <div className="award-row">
                  <span className="aw-yr">——</span>
                  <div className="aw-dot"></div>
                  <div>
                    <div className="aw-name">Best NGO Award</div>
                    <div className="aw-body">Sri Karthikeya Misra IAS · Independence Day, Eluru.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUTURE VISION ─────────────────────────────────────── */}
      <section className="ch-vision">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">What's next</span>
            <span className="n">/ 04</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">The work <em>ahead.</em></h2>
          </div>
          <div className="vision-row">
            <div className="vi reveal">
              <span className="vi-num">01</span>
              <h4>Vocational Training for Girls</h4>
              <p>Market-aligned training centres for girls with disabilities — economic independence, not just shelter.</p>
            </div>
            <div className="vi reveal" data-delay="1">
              <span className="vi-num">02</span>
              <h4>10,000 Girls in Three Years</h4>
              <p>Strategic partnerships to support and educate 10,000+ girl children through scaled outreach.</p>
            </div>
            <div className="vi reveal" data-delay="2">
              <span className="vi-num">03</span>
              <h4>Enhanced Therapy Facilities</h4>
              <p>Deeper hydrotherapy and physio-rehabilitation infrastructure for every resident's development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────── */}
      <section className="cta-strip">
        <div className="container">
          <h3>Help Madhavi give every child a <em>home.</em></h3>
          <div className="right">
            <Link href="/donate">Sponsor a child · $150/mo <span>→</span></Link>
            <Link className="alt" href="/about">Back to About <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
