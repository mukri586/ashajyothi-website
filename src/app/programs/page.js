import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Programs · AshaJyothi',
  description: 'Three programs, twenty-seven years. Learn about our adoption and home program, on-campus rehabilitation facility, and the PARI dignity initiative.',
};

export default function ProgramsPage() {
  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <header className="ph">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Programs</span>
          </div>
          <div className="grid">
            <div>
              <h1 className="reveal" data-delay="1">
                Three programs. <em>Twenty-seven years.</em>
              </h1>
              <p className="lead reveal" data-delay="2">
                We do a small number of things, and we have done them, without break, since 1998. Here is what actually happens on campus, every day.
              </p>
            </div>
            <div className="right reveal" data-delay="3">
              <div className="stat">
                <span className="l">/ Children housed</span>
                <span className="n">70+</span>
              </div>
              <div className="stat">
                <span className="l">/ Programs</span>
                <span className="n">03</span>
              </div>
              <div className="stat">
                <span className="l">/ Years running</span>
                <span className="n">27<em>.</em></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── PROGRAM 01 ─────────────────────────────────────────── */}
      <section className="pdetail" id="adoption">
        <div className="container pgrid">
          <div className="img reveal">
            <span className="badge">since 1998</span>
            <img
              src="https://static.wixstatic.com/media/437f08_0fb69566f899453ea5ca54dacdf00004~mv2.jpg/v1/fill/w_900,h_1125,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Kids%20(23)_JPG.jpg"
              alt="AshaJyothi kids"
            />
          </div>
          <div className="reveal" data-delay="1">
            <div className="pretitle">
              <span className="num">01</span> Adoption &amp; Home
            </div>
            <h2>
              We take in the children <em>no one else will.</em>
            </h2>
            <p className="body">
              AshaJyothi was born to save abandoned children. Food, shelter, medical care and dignity, offered without condition to children abandoned or orphaned with severe disabilities — usually at a very young age, by parents who could not cope.
            </p>
            <ul className="feats">
              <li>
                <div>
                  <strong>Abandoned children</strong>
                  <span>Left at orphanages or simply left.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Orphaned children</strong>
                  <span>No surviving family to take them.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Severe disability</strong>
                  <span>The children others turned away.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>No age cap</strong>
                  <span>From infancy to young adulthood.</span>
                </div>
              </li>
            </ul>
            <div className="since">
              <span>Program 01 · Adoption</span>
              <b>70+ children in care today</b>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAM 02 ─────────────────────────────────────────── */}
      <section className="pdetail" id="rehabilitation">
        <div className="container pgrid">
          <div className="img reveal">
            <span className="badge">24/7</span>
            <img
              src="https://static.wixstatic.com/media/437f08_cc922aa2384645728a5cb7a2ec9f1a2a~mv2.jpg/v1/fill/w_900,h_1125,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Rehab%201.jpg"
              alt="Rehabilitation work"
            />
          </div>
          <div className="reveal" data-delay="1">
            <div className="pretitle">
              <span className="num">02</span> Rehabilitation
            </div>
            <h2>
              Therapy, schooling and vocation — <em>on campus.</em>
            </h2>
            <p className="body">
              With Neurogen Mumbai we deliver advanced treatment for cerebral palsy and intellectual disability. Volunteers from Ireland and Germany return year after year with physiotherapy. We have an in-house facility for physio and 24/7 nursing support.
            </p>
            <ul className="feats">
              <li>
                <div>
                  <strong>Medical camps</strong>
                  <span>Monthly, on campus, with specialist referrals.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Neurogen treatment</strong>
                  <span>Advanced therapy for severe cases.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Yoga &amp; physio</strong>
                  <span>Daily routine, in-house facility.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Schooling</strong>
                  <span>On-site classes adapted per child.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Vocational training</strong>
                  <span>Tailoring, embroidery, IT basics.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Aids &amp; appliances</strong>
                  <span>Wheelchairs, hearing aids, walkers.</span>
                </div>
              </li>
            </ul>
            <div className="since">
              <span>Program 02 · Rehab</span>
              <b>5 ongoing rehab streams</b>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAM 03 ─────────────────────────────────────────── */}
      <section className="pdetail" id="pari">
        <div className="container pgrid">
          <div className="img reveal">
            <span className="badge">since 2016</span>
            <img
              src="https://static.wixstatic.com/media/437f08_1544c6daab0a4be4a9d18d08e9c27cb1~mv2.jpg/v1/fill/w_900,h_1125,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Girls.jpg"
              alt="AshaJyothi girls"
            />
          </div>
          <div className="reveal" data-delay="1">
            <div className="pretitle">
              <span className="num">03</span> PARI &amp; Dignity
            </div>
            <h2>
              Menstrual hygiene. Sanitation. <em>Dignity for girls.</em>
            </h2>
            <p className="body">
              Since 2016 the PARI unit has distributed sanitary pads, installed proper toilets and water, and provided gendered accommodation. We hold half-saree celebrations for the girls and we lead local relief work during floods and during Covid.
            </p>
            <ul className="feats">
              <li>
                <div>
                  <strong>Pads distribution</strong>
                  <span>Monthly supply — PARI unit.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Toilets &amp; water</strong>
                  <span>Proper, private, on-campus.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Gendered housing</strong>
                  <span>Separate, dignified, safe.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Half-saree celebrations</strong>
                  <span>Traditional milestones for the girls.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Relief operations</strong>
                  <span>Flood, cyclone, Covid response.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Health camps for women</strong>
                  <span>Local outreach beyond campus.</span>
                </div>
              </li>
            </ul>
            <div className="since">
              <span>Program 03 · PARI</span>
              <b>Every girl on campus served</b>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAY ON CAMPUS ─────────────────────────────────────── */}
      <section className="day">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">A day on campus</span>
            <span className="n">/ 04</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              What <em>actually</em> happens, hour by hour.
            </h2>
            <p>This is the regular weekday rhythm. Saturdays add medical camps. Sundays are quieter.</p>
          </div>
          <div className="daygrid">
            <div className="daycell reveal">
              <span className="time">06:00 · Morning</span>
              <h4>Wake, wash, breakfast.</h4>
              <p>Carers help children who can't dress, wash or feed themselves. Hot breakfast for everyone in the dining hall.</p>
            </div>
            <div className="daycell reveal" data-delay="1">
              <span className="time">08:00 · School</span>
              <h4>Adapted classroom hours.</h4>
              <p>On-site teachers run small groups by ability. Reading, writing, basic math, art — pitched to each child.</p>
            </div>
            <div className="daycell reveal">
              <span className="time">10:30 · Physio</span>
              <h4>Daily physiotherapy.</h4>
              <p>Cerebral palsy and physically challenged children receive stretching, mobility and strength work in the in-house facility.</p>
            </div>
            <div className="daycell reveal" data-delay="1">
              <span className="time">12:30 · Lunch</span>
              <h4>Hot meal · annadanam.</h4>
              <p>Daily food often sponsored by Chicago Andhra Association. Nutritionally planned around children's medical needs.</p>
            </div>
            <div className="daycell reveal">
              <span className="time">14:00 · Vocational</span>
              <h4>Tailoring &amp; skills training.</h4>
              <p>Older girls learn sewing, embroidery, basic IT — skills meant to give them income beyond AshaJyothi.</p>
            </div>
            <div className="daycell reveal" data-delay="1">
              <span className="time">16:30 · Yoga &amp; play</span>
              <h4>Movement &amp; outdoors.</h4>
              <p>Yoga where bodies allow it. Verandah, courtyard play and group games for everyone else.</p>
            </div>
            <div className="daycell reveal">
              <span className="time">19:00 · Dinner</span>
              <h4>Evening meal together.</h4>
              <p>Family-style dining. Carers eat with the children. Quiet time, music sometimes.</p>
            </div>
            <div className="daycell reveal" data-delay="1">
              <span className="time">22:00 · Night</span>
              <h4>24/7 nursing on duty.</h4>
              <p>Children with serious conditions are checked through the night. Anyone can be moved to the medical bay at any hour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONDITIONS ─────────────────────────────────────────── */}
      <section id="conditions">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Who lives here</span>
            <span className="n">/ 05</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              The conditions our children <em>live with.</em>
            </h2>
            <p>Five conditions account for almost every child at AshaJyothi.</p>
          </div>
          <div className="tlist">
            <Link className="trow reveal" href="/about#treatments">
              <span className="n">01</span>
              <h5>Cerebral Palsy</h5>
              <p className="desc">
                A non-progressive disorder caused by brain damage around birth. Severity ranges from mild physical to severe with intellectual involvement and seizures.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/about#treatments">
              <span className="n">02</span>
              <h5>Autism</h5>
              <p className="desc">
                Impaired social interaction, verbal &amp; non-verbal communication, and restricted, repetitive behaviour.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/about#treatments">
              <span className="n">03</span>
              <h5>Intellectual Disability</h5>
              <p className="desc">Difficulty with self-care, communication, social skills, academics. Mild to profound.</p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/about#treatments">
              <span className="n">04</span>
              <h5>Down Syndrome</h5>
              <p className="desc">
                A genetic condition from an extra copy of chromosome 21. Delayed growth, affected cognitive function.
              </p>
              <span className="arr">→</span>
            </Link>
            <Link className="trow reveal" href="/about#treatments">
              <span className="n">05</span>
              <h5>Physically Challenged</h5>
              <p className="desc">Polio, accidents, neurological conditions that limit basic movement and independence.</p>
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────── */}
      <section className="cta-strip">
        <div className="container">
          <h3>
            Every child you see is here because <em>someone gave.</em>
          </h3>
          <div className="right">
            <Link href="/donate">Sponsor a child · $150/mo <span>→</span></Link>
            <Link className="alt" href="/donate#items">Buy one specific thing <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
