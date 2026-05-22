import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us · AshaJyothi',
  description: 'A permanent home for special-needs children since 1998. Learn about our story, founder, mission, and the conditions we care for.',
};

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────────── */}
      <header className="ph">
        <div className="container grid">
          <div>
            <div className="crumbs reveal">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>About</span>
            </div>
            <h1 className="reveal" data-delay="1">
              A family of <em>last resort</em>, since 1998.
            </h1>
            <p className="lead reveal" data-delay="2">
              AshaJyothi began with one father's grief, ten children, and a small house at Hanuman Junction.
              Twenty-seven years later it is a campus of 70+ children — and the same people are still here.
            </p>
            <div className="quickfacts reveal" data-delay="3">
              / Founded <b>1998</b><br />
              / Chairman <b>Madhavi Latha Mareedu</b><br />
              / Status <b>Registered Voluntary Org · 80G &amp; 12A</b>
            </div>
            <Link href="/chairman" className="reveal" data-delay="3" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '28px',
              background: 'var(--paper-2)',
              border: '1.5px solid var(--line)',
              padding: '14px 20px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '14px',
              color: 'var(--heading)',
              transition: 'background .2s, border-color .2s',
              textDecoration: 'none'
            }}>
              <span style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                background: 'var(--paper-3)'
              }}>
                <img
                  src="https://res.cloudinary.com/dshrpij9a/image/upload/v1779075269/IMG_20161206_172013_gr0obu.jpg"
                  alt="Madhavi Latha"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </span>
              Meet our Chairman, Madhavi Latha <span style={{ color: 'var(--accent)' }}>→</span>
            </Link>
          </div>
          <div className="hero-img reveal" data-delay="2">
            <img
              src="https://static.wixstatic.com/media/437f08_36971083bb934aa69a028399d805308c~mv2.jpg/v1/fill/w_900,h_1125,al_c,q_85,enc_avif,quality_auto/ashajyothi.jpg"
              alt="The AshaJyothi campus"
            />
          </div>
        </div>
      </header>

      {/* ─── FOUNDER ───────────────────────────────────────────── */}
      <section className="founder">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Letter from the director</span>
            <span className="n">/ 01</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">One father's grief, turned <em>outward.</em></h2>
          </div>

          <div className="founder-grid">
            <div className="founder-portrait reveal">
              <img
                src="https://static.wixstatic.com/media/437f08_4eac094f810646b797ef918f7a832e14~mv2.jpg/v1/fill/w_900,h_1125,al_c,q_85,enc_avif,quality_auto/IMG_20160907_115554.jpg"
                alt="Medical camp"
              />
              <div className="tape">
                A medical camp on campus, 2016. Every child has a right to proper healthcare.
              </div>
            </div>
            <div className="founder-text reveal" data-delay="1">
              <p className="pull">
                "AshaJyothi was born from our family's own tragedy — the loss of my daughter <em>BalaJyothi</em>, who
                suffered from mental illness. I honour her memory by saving children with special needs."
              </p>
              <p className="body">
                In 1998 we opened a small home at Hanuman Junction for ten abandoned children. In 2005, with sponsors
                Care n Share, we moved into our own building — beds, kitchen, school, paramedical support, 24/7 nursing.
                In 2016 the PARI unit began, bringing menstrual hygiene to every girl.
              </p>
              <p className="body">
                We work with children who are physically challenged, speech and hearing impaired, autistic, Down
                syndrome, or blind — children who often cannot walk, eat, or bathe on their own. All of them were
                either abandoned or orphaned at an incredibly young age.
              </p>
              <p className="body">
                Our mission is only to see smiles on these children's faces — <em>and that those smiles sustain for a
                lifetime.</em>
              </p>
              <div className="founder-sig">
                <div className="avatar">ML</div>
                <div className="who">
                  <strong>Madhavi Latha</strong>
                  <span>Director · AshaJyothi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─────────────────────────────────── */}
      <section className="mission">
        <div className="container">
          <div className="reveal">
            <span className="label">
              <span className="d"></span>Our mission
            </span>
            <h2>
              Every abandoned child with a disability has the natural right to <em>a home</em> — with love, food,
              healthcare, and a real education.
            </h2>
          </div>
          <div className="threecol">
            <div className="item reveal">
              <h4>A home, first.</h4>
              <p>Shelter, food, hygiene, safety — the basics that should never have been negotiable.</p>
            </div>
            <div className="item reveal" data-delay="1">
              <h4>Healthcare, in-house.</h4>
              <p>24/7 nursing, physiotherapy, regular medical camps, and Neurogen treatments for severe cases.</p>
            </div>
            <div className="item reveal" data-delay="2">
              <h4>Independence, eventually.</h4>
              <p>Schooling and vocational training so that, where possible, our children can build a life beyond us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ──────────────────────────────────────────── */}
      <section className="timeline">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Our story, in three chapters</span>
            <span className="n">/ 02</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">Twenty-seven years. Three <em>milestones.</em></h2>
            <p>The history of AshaJyothi, in three moments — with many more still being written.</p>
          </div>
          <div className="tl">
            <div className="tl-cell reveal">
              <div className="img">
                <img
                  src="https://static.wixstatic.com/media/437f08_5f89a9c5a662457da9676f385244ae6f~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/1999.jpg"
                  alt="AshaJyothi 1999"
                />
              </div>
              <div className="body">
                <span className="year">1998</span>
                <h4>Ten children, one small home.</h4>
                <p>A family's grief, turned into protection. AshaJyothi opens at Hanuman Junction with the first ten children.</p>
              </div>
            </div>
            <div className="tl-cell reveal" data-delay="1">
              <div className="img">
                <img
                  src="https://static.wixstatic.com/media/437f08_b197c26d83e145629f386f42aec6718e~mv2.jpg/v1/crop/x_281,y_0,w_3402,h_2304/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/2005%202.jpg"
                  alt="AshaJyothi 2005"
                />
              </div>
              <div className="body">
                <span className="year">2005</span>
                <h4>A roof of our own.</h4>
                <p>With sponsor Care n Share, we move into our own premises — beds, kitchen, toilets, school, healthcare.</p>
              </div>
            </div>
            <div className="tl-cell reveal" data-delay="2">
              <div className="img">
                <img
                  src="https://static.wixstatic.com/media/437f08_652fea278d1641188a434a3381b348fa~mv2.png/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/2016%20PARI.png"
                  alt="PARI Unit 2016"
                />
              </div>
              <div className="body">
                <span className="year">2016</span>
                <h4>The PARI unit begins.</h4>
                <p>Menstrual hygiene management on campus. Dignity for every girl, quietly, ever since.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TREATMENTS ────────────────────────────────────────── */}
      <section>
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Conditions we work with</span>
            <span className="n">/ 03</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">Plain words for <em>real</em> conditions.</h2>
            <p>Five conditions account for almost every child at AshaJyothi. We explain them as a doctor would — without softening.</p>
          </div>
          <div className="tlist">
            <Link className="trow reveal" href="/programs#rehabilitation">
              <span className="n">01</span>
              <h5>Cerebral Palsy</h5>
              <p className="desc">
                A non-progressive disorder caused by brain damage around birth. Severity ranges from mild physical to
                severe with intellectual involvement and seizures.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/programs#rehabilitation">
              <span className="n">02</span>
              <h5>Autism</h5>
              <p className="desc">
                Impaired social interaction, verbal &amp; non-verbal communication, and restricted, repetitive behaviour.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/programs#rehabilitation">
              <span className="n">03</span>
              <h5>Intellectual Disability</h5>
              <p className="desc">
                Difficulty with self-care, communication, social skills, academics. Classified mild to profound.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/programs#rehabilitation">
              <span className="n">04</span>
              <h5>Down Syndrome</h5>
              <p className="desc">
                A genetic condition caused by an extra copy of chromosome 21. Delayed growth, affected cognitive function.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/programs#rehabilitation">
              <span className="n">05</span>
              <h5>Physically Challenged</h5>
              <p className="desc">
                Polio, accidents, neurological conditions that limit basic movement and independence.
              </p>
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────── */}
      <section className="cta-strip">
        <div className="container">
          <h3>Eighty-three children call AshaJyothi <em>home</em> today.</h3>
          <div className="right">
            <Link href="/donate">Sponsor a child · $150/mo <span>→</span></Link>
            <Link className="alt" href="/programs">What we do <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
