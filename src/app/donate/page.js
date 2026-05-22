'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const usdToInr = 83;

const impactCopy = (amt, freq) => {
  if (freq === 'monthly') {
    if (amt >= 150) {
      return [
        `$${amt} covers one full child for a month`,
        'Food · school · medical · hygiene · life skills',
        [
          'Three nutritious meals a day',
          'School supplies & on-site classes',
          'Medical evaluation, physio, medicine',
          'Hygiene supplies & PARI pads where needed',
          'A warm bed & 24/7 carer support'
        ]
      ];
    }
    if (amt >= 75) {
      return [
        `$${amt}/mo half-sponsors one child`,
        'Pairs with another donor to cover one child',
        [
          "Half a child's monthly costs",
          'Pairs with another sponsor',
          'We assign you a child & send updates',
          'Full transparency on monthly spend'
        ]
      ];
    }
    return [
      `$${amt}/mo contributes to a child's care`,
      'Pools with other monthly donors',
      [
        "Pools to cover children's monthly needs",
        'Quarterly impact updates',
        '80G receipts each financial year'
      ]
    ];
  } else {
    if (amt >= 350) {
      return [
        `$${amt} funds one Neurogen treatment cycle`,
        'For a child with severe cerebral palsy',
        [
          'One full Neurogen treatment cycle',
          'Travel & accommodation if needed',
          'Follow-up at our in-house physio',
          'Quarterly progress photographs'
        ]
      ];
    }
    if (amt >= 200) {
      return [
        `$${amt} buys a hearing aid, fitted`,
        'For one hearing-impaired child',
        [
          'One hearing aid, sized & fitted',
          'Audiologist follow-up',
          'Adjustments for first year',
          'Photograph & note from the child'
        ]
      ];
    }
    if (amt >= 100) {
      return [
        `$${amt} buys one new wheelchair`,
        '20+ wheelchairs today — but we need more',
        [
          'Sturdy, sized wheelchair',
          'Carer training on use',
          'Photo of the child receiving it',
          '80G receipt within 48 hours'
        ]
      ];
    }
    if (amt >= 45) {
      return [
        `$${amt} feeds 80+ children for a day`,
        'Breakfast, lunch, dinner — annadanam',
        [
          'All meals for all children for 24h',
          'Your day named on our dining-hall board',
          'Photograph from the day',
          '80G receipt'
        ]
      ];
    }
    if (amt >= 25) {
      return [
        `$${amt} buys a month of sanitary pads`,
        'PARI unit · dignity for girls',
        [
          'Full month of pads for all girls',
          'PARI unit operating costs',
          'Update from the PARI team',
          '80G receipt'
        ]
      ];
    }
    return [
      `$${amt} contributes to AshaJyothi`,
      'Used where most needed',
      [
        'Pools with other one-time gifts',
        'Spent within 30 days',
        "You'll be told what it bought",
        '80G receipt'
      ]
    ];
  }
};

const getDeliverableIcons = (amt, freq) => {
  if (freq === 'monthly') {
    if (amt >= 150) return [
      { char: '🥣', label: 'Nutrition' },
      { char: '🎒', label: 'Education' },
      { char: '🩺', label: 'Physio' },
      { char: '🧼', label: 'Hygiene' },
      { char: '🛏️', label: '24/7 Home' }
    ];
    if (amt >= 75) return [
      { char: '🥣', label: 'Nutrition' },
      { char: '👥', label: 'Co-sponsor' },
      { char: '🛏️', label: 'Care' }
    ];
    return [{ char: '❤️', label: 'Care Pool' }];
  } else {
    if (amt >= 350) return [
      { char: '🩺', label: 'Neurogen' },
      { char: '🧠', label: 'CP Rehab' },
      { char: '✨', label: 'Therapy' }
    ];
    if (amt >= 200) return [
      { char: '👂', label: 'Hearing Aid' },
      { char: '🔊', label: 'Fitting' }
    ];
    if (amt >= 100) return [
      { char: '♿', label: 'Wheelchair' },
      { char: '⚙️', label: 'Mobility' }
    ];
    if (amt >= 45) return [
      { char: '🥣', label: 'Daily Meals' },
      { char: '🌾', label: 'Annadanam' }
    ];
    if (amt >= 25) return [
      { char: '🧼', label: 'Sanitary Pads' },
      { char: '🎀', label: 'PARI' }
    ];
    return [{ char: '🤝', label: 'AshaJyothi' }];
  }
};

export default function DonatePage() {
  const [freq, setFreq] = useState('monthly');
  const [amt, setAmt] = useState(150);
  const [customAmt, setCustomAmt] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('India');
  const [wantsReceipt, setWantsReceipt] = useState(true);
  const [isInMemory, setIsInMemory] = useState(false);

  // Handle preset clicks
  const handlePresetSelect = (value) => {
    setAmt(value);
    setCustomAmt('');
  };

  // Handle custom input
  const handleCustomInput = (e) => {
    const val = e.target.value;
    setCustomAmt(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setAmt(parsed);
    }
  };

  // Specific items selection helper
  const selectSpecificItem = (amount) => {
    setFreq('once');
    setAmt(amount);
    setCustomAmt('');
    // Scroll smoothly to form
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mocked donation of $${amt} (${freq === 'monthly' ? 'monthly' : 'one-time'}) submitted successfully! Under Next.js modernization, this form can be connected to payment processors like Razorpay, Stripe, PayPal, or display direct bank routing details.`);
  };

  const [tally, sub, items] = impactCopy(amt, freq);
  const formattedInr = Math.round(amt * usdToInr).toLocaleString();

  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <header className="ph">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Donate</span>
          </div>
          <div className="grid">
            <div>
              <h1 className="reveal reveal-split" data-delay="1">
                Pick something <em>specific.</em>
              </h1>
              <p className="lead reveal" data-delay="2">
                Every gift lands on a real child, on a real day. There's no general fund — each amount below covers a particular cost, and we'll tell you exactly what your money did.
              </p>
            </div>
            <div className="trust reveal" data-delay="3">
              <div className="line">
                <span className="l">/ Tax exemption</span>
                <span className="v accent">80G &amp; 12A</span>
              </div>
              <div className="line">
                <span className="l">/ Children served</span>
                <span className="v">70+ today</span>
              </div>
              <div className="line">
                <span className="l">/ Years running</span>
                <span className="v">since 1998</span>
              </div>
              <div className="line">
                <span className="l">/ Overhead</span>
                <span className="v">&lt; 10%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── DONATE FORM ───────────────────────────────────────── */}
      <section className="donate-form" id="form">
        <div className="container df-grid">
          <form className="df-card reveal" onSubmit={handleSubmit}>
            <h2>
              Sponsor a child <em>or give once.</em>
            </h2>

            {/* Monthly / one-time */}
            <div>
              <div className="amount-pre">
                <span>/ Choose frequency</span>
              </div>
              <div className={`seg ${freq === 'once' ? 'right' : ''}`} id="seg">
                <span className="pill"></span>
                <button
                  type="button"
                  className={freq === 'monthly' ? 'active' : ''}
                  onClick={() => setFreq('monthly')}
                >
                  Monthly · sponsor a child
                </button>
                <button
                  type="button"
                  className={freq === 'once' ? 'active' : ''}
                  onClick={() => setFreq('once')}
                >
                  One-time gift
                </button>
              </div>
            </div>

            {/* Amount */}
            <div>
              <div className="amount-pre">
                <span>/ Choose amount (USD)</span>
                <span className="right" id="approxInr">
                  ~ ₹{formattedInr} INR
                </span>
              </div>
              <div className="amounts" id="amts">
                {[
                  { value: 75, desc: 'half-sponsor' },
                  { value: 150, desc: '★ full child / mo' },
                  { value: 100, desc: 'wheelchair' },
                  { value: 200, desc: 'hearing aid' }
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={amt === item.value && !customAmt ? 'active' : ''}
                    onClick={() => handlePresetSelect(item.value)}
                  >
                    ${item.value}
                    <span className="sub">{item.desc}</span>
                  </button>
                ))}
              </div>
              <div className="amount-custom">
                <span className="cur">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Custom amount"
                  value={customAmt}
                  onChange={handleCustomInput}
                  id="customAmt"
                />
                <span className="inr" id="inrLabel">
                  ≈ ₹{formattedInr}
                </span>
              </div>
            </div>

            {/* Live impact */}
            <div className="tally" id="tally">
              <div className="l">
                <strong id="tallyText">{tally}</strong>
                <span>{sub}</span>
              </div>
            </div>

            {/* Donor info */}
            <div className="row">
              <div className="field">
                <label>/ First name</label>
                <input
                  type="text"
                  placeholder="Madhavi"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>/ Last name</label>
                <input
                  type="text"
                  placeholder="Latha"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="field full">
                <label>/ Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field full">
                <label>/ Country</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <label className="check">
              <input
                type="checkbox"
                checked={wantsReceipt}
                onChange={(e) => setWantsReceipt(e.target.checked)}
              />
              <span>I'd like to receive a tax receipt (Section 80G).</span>
            </label>
            <label className="check">
              <input
                type="checkbox"
                checked={isInMemory}
                onChange={(e) => setIsInMemory(e.target.checked)}
              />
              <span>Make this gift in memory or in honour of someone — we'll include a note.</span>
            </label>

            <button type="submit" className="gobtn">
              <span>
                Donate <span id="goAmt">${amt}</span>{' '}
                <span id="goFreq">{freq === 'monthly' ? 'monthly' : 'now'}</span>
              </span>
              <span className="amt">→ Secure</span>
            </button>

            <div className="processors">
              <span>Will route via</span>
              <span className="proc">Razorpay</span>
              <span className="proc">Stripe</span>
              <span className="proc">PayPal</span>
              <span className="proc">Bank transfer</span>
            </div>
          </form>

          <aside className="preview reveal" data-delay="1">
            <div className="pcard">
              <div className="h">
                <span className="pill">★ Most needed</span>
                <span className="mono">/ Live preview</span>
              </div>
              <h3 id="previewTitle">{freq === 'monthly' ? 'Sponsor a child' : 'One-time gift'}</h3>
              <div className="row2">
                <span className="big" id="previewAmt">
                  ${amt}
                </span>
                <span className="small" id="previewSub">
                  {freq === 'monthly' ? 'per month · ' : ''}approximately ₹{formattedInr} INR
                </span>
              </div>
              
              {/* Dynamic Deliverables Showcase Icons */}
              <div className="delivers-icons">
                {getDeliverableIcons(amt, freq).map((icon, idx) => (
                  <div className="deliver-icon-item" key={idx} title={icon.label}>
                    <span className="deliver-icon-char">{icon.char}</span>
                    <span className="deliver-icon-label">{icon.label}</span>
                  </div>
                ))}
              </div>

              <ul className="delivers" id="delivers">
                {items.map((itemText, idx) => (
                  <li key={idx}>{itemText}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── SPECIFIC ITEMS ───────────────────────────────────── */}
      <section className="items" id="items">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Buy one specific thing</span>
            <span className="n">/ 02</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              A gift that becomes <em>one thing.</em>
            </h2>
            <p>Each amount maps to a real, single purchase. We'll send a photograph when it arrives on campus.</p>
          </div>
          <div className="item-grid">
            <div className="item reveal" onClick={() => selectSpecificItem(100)}>
              <div className="top">
                <span className="pre">Mobility</span>
                <span className="amt">
                  $<em>100</em>
                </span>
              </div>
              <h4>One new wheelchair.</h4>
              <p>20+ total wheelchairs today. But we need more to help Asha Jyothi children. A new one costs ~ $100.</p>
              <span className="pick">Sponsor this →</span>
            </div>
            <div className="item reveal" data-delay="1" onClick={() => selectSpecificItem(45)}>
              <div className="top">
                <span className="pre">Annadanam · daily food</span>
                <span className="amt">
                  $<em>45</em>
                </span>
              </div>
              <h4>A day of meals for all 80+ children.</h4>
              <p>
                Breakfast, lunch, dinner. Hot, balanced, prepared on campus. Often sponsored by Chicago Andhra Association — you can take a day.
              </p>
              <span className="pick">Sponsor this →</span>
            </div>
            <div className="item reveal" data-delay="2" onClick={() => selectSpecificItem(25)}>
              <div className="top">
                <span className="pre">PARI · dignity</span>
                <span className="amt">
                  $<em>25</em>
                </span>
              </div>
              <h4>One month of sanitary pads.</h4>
              <p>
                For all girls on campus, through the PARI unit. Quiet, ongoing, and one of the most-asked-for sponsorships we have.
              </p>
              <span className="pick">Sponsor this →</span>
            </div>
            <div className="item reveal" onClick={() => selectSpecificItem(200)}>
              <div className="top">
                <span className="pre">Aids &amp; appliances</span>
                <span className="amt">
                  $<em>200</em>
                </span>
              </div>
              <h4>A hearing aid, fitted.</h4>
              <p>Hearing-impaired children receive a fitted aid through our partnership with local audiologists, with follow-up care.</p>
              <span className="pick">Sponsor this →</span>
            </div>
            <div className="item reveal" data-delay="1" onClick={() => selectSpecificItem(350)}>
              <div className="top">
                <span className="pre">Urgent medical</span>
                <span className="amt">
                  $<em>350</em>
                </span>
              </div>
              <h4>One Neurogen treatment cycle.</h4>
              <p>For a child with severe cerebral palsy or intellectual disability, in partnership with Neurogen Mumbai.</p>
              <span className="pick">Sponsor this →</span>
            </div>
            <div className="item reveal" data-delay="2" onClick={() => selectSpecificItem(50)}>
              <div className="top">
                <span className="pre">General fund</span>
                <span className="amt">Any</span>
              </div>
              <h4>A gift, used where needed.</h4>
              <p>Sometimes a roof needs fixing. Sometimes a child needs a specialist. A flexible gift lets us respond fast.</p>
              <span className="pick">Give any amount →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST / TRANSPARENCY ─────────────────────────────── */}
      <section className="trust-sec">
        <div className="container">
          <div className="seclabel reveal">
            <span className="dot"></span>
            <span className="t">Where the money goes</span>
            <span className="n">/ 03</span>
          </div>
          <div className="sec-intro reveal">
            <h2 className="big">
              No marketing budget. <em>No middlemen.</em>
            </h2>
            <p>
              AshaJyothi is run by the same family that started it. Our overhead stays under 10%. Every donation is acknowledged with a real human reply.
            </p>
          </div>
          <div className="trust-grid">
            <div className="tg-cell reveal">
              <div className="ico">80G</div>
              <h4>Tax-deductible in India.</h4>
              <p>
                All non-cash donations are exempt under Sections 80G &amp; 12A of the Income Tax Act, 1961. We send a digital 80G receipt within 48 hours.
              </p>
            </div>
            <div className="tg-cell reveal" data-delay="1">
              <div className="ico">$</div>
              <h4>You'll know what it bought.</h4>
              <p>
                When your gift is spent, we tell you what on. Wheelchair fitted, medical camp held, school supplies arrived — with a photograph.
              </p>
            </div>
            <div className="tg-cell reveal" data-delay="2">
              <div className="ico">★</div>
              <h4>Twenty-seven years, audited.</h4>
              <p>
                Registered Voluntary Organisation since 1998. Annual reports available on request. Partnered with Save the Child Foundation &amp; Empower &amp; Excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANK ──────────────────────────────────────────────── */}
      <section className="bank-sec" id="bank">
        <div className="container">
          <div className="bank-card reveal">
            <div className="left">
              <h3>
                Or send a <em>direct transfer.</em>
              </h3>
              <p>cheque or bank transfer is the cleanest route for larger gifts — no card processing fees, all of it lands at AshaJyothi.</p>
              <span className="tax">80G &amp; 12A tax exempt</span>
            </div>
            <dl>
              <div>
                <dt>Account name</dt>
                <dd className="name">Asha Jyothi Handicapped Welfare Society</dd>
              </div>
              <div>
                <dt>Account number</dt>
                <dd>34215204307</dd>
              </div>
              <div>
                <dt>IFSC code</dt>
                <dd>SBIN0004700</dd>
              </div>
              <div>
                <dt>Bank &amp; branch</dt>
                <dd className="name">SBI · Hanuman Junction</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
