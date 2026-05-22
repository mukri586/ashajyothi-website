'use client';

import React, { useState } from 'react';

const tabData = {
  institution: {
    icon: '🏛️',
    title: 'Institution',
    heading: 'Building from nothing — permanently.',
    text: 'Scaled AshaJyothi from 2 children in a borrowed room to a fully self-sufficient campus of 100+ residents. Every brick was fought for.',
    items: [
      {
        icon: '🌱',
        title: 'Founded 1998',
        desc: 'Started with 2 abandoned children at Hanuman Junction — a family\'s grief turned outward.'
      },
      {
        icon: '🏗️',
        title: 'Permanent Campus',
        desc: 'Secured land, construction, and multi-facility infrastructure with international partner SDWH, Holland.'
      },
      {
        icon: '⚡',
        title: 'Self-Sufficiency',
        desc: 'Solar power, borewell systems, hydrotherapy rooms — campus runs independently, 365 days a year.'
      },
      {
        icon: '⚖️',
        title: 'CWC Chairperson · 2018–2022',
        desc: 'Appointed to function as a Bench of First Class Judicial Magistrates, West Godavari District.'
      }
    ]
  },
  healthcare: {
    icon: '🏥',
    title: 'Healthcare',
    heading: 'Advanced medicine, brought to children who couldn\'t access it.',
    text: 'From cochlear implants to Stem Cell Therapy — healthcare that would otherwise have been out of reach for every child here.',
    items: [
      {
        icon: '💉',
        title: 'Stem Cell Therapy',
        desc: 'Partnered with Neurogen Institute; secured CM Relief Fund for 40 cases, treated 50 children total.'
      },
      {
        icon: '🔬',
        title: '100+ Major Surgeries',
        desc: 'Polio, Achilles Tendon, Cleft Lip & Palate, Cochlear Implants — with full post-operative care on campus.'
      },
      {
        icon: '🤝',
        title: 'ASRAM Hospital MOU',
        desc: 'Secured exclusive ward and subsidised healthcare for all orphan and semi-orphan children in the district.'
      },
      {
        icon: '🚐',
        title: 'Mobile CBR Programme',
        desc: 'Extended active physiotherapy to 100+ girl children in surrounding villages who could not travel to campus.'
      }
    ]
  },
  education: {
    icon: '📚',
    title: 'Education & Women',
    heading: 'Education for the excluded. Dignity for girls.',
    text: '100% school enrollment for children with disabilities. One million sanitary pads. Five self-help groups. The numbers are real.',
    items: [
      {
        icon: '🏫',
        title: '100% Enrollment',
        desc: 'Door-to-door campaign mainstreaming 145 children with disabilities into regular schools — national SSA recognition.'
      },
      {
        icon: '🔍',
        title: 'Chinnari Choopu',
        desc: 'Screened 5,000 children for developmental conditions; 100 referred for specialist treatment and surgery.'
      },
      {
        icon: '🩸',
        title: 'PARI Unit & 25,000+ Girls',
        desc: 'Manufactured & distributed 1M+ sanitary pads; personally educated 25,000+ girls on menstrual hygiene.'
      },
      {
        icon: '💪',
        title: '5 Self-Help Groups',
        desc: 'Formed SHGs for 50 women with disabilities — connecting them to micro-loans and livelihood training.'
      }
    ]
  },
  crisis: {
    icon: '🚨',
    title: 'Crisis Relief',
    heading: 'When the state was overwhelmed, AshaJyothi showed up.',
    text: 'Three major crises. Each time, Madhavi Latha was on the ground before most organisations had filed their reports.',
    items: [
      {
        icon: '🌀',
        title: 'Hudhud Cyclone · 2014',
        desc: 'Rebuilt 50 homes; distributed 20,000+ meals to displaced communities across affected districts.'
      },
      {
        icon: '😷',
        title: 'Covid-19 · 2020–21',
        desc: 'Ration kits to thousands of migrant workers; Oxygen Concentrators to 4 AP Health Dept isolation centres.'
      },
      {
        icon: '🌊',
        title: 'Flood Relief',
        desc: 'Flash flood response across Eluru, NTR District and Kolleru Lake area — essential goods and medical supplies.'
      },
      {
        icon: '♿',
        title: 'Mandal Rehab Supervisor · 2002–04',
        desc: 'Mobilised 1,000+ women with disabilities to access government certificates, pensions, and benefits.'
      }
    ]
  }
};

export default function ChairmanTabs() {
  const [activeTab, setActiveTab] = useState('institution');

  return (
    <>
      <div className="tab-nav reveal" role="tablist">
        {Object.entries(tabData).map(([key, tab]) => (
          <button
            key={key}
            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
            role="tab"
            aria-selected={activeTab === key}
          >
            <span className="ticon">{tab.icon}</span> {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {Object.entries(tabData).map(([key, tab]) => (
          <div
            key={key}
            className={`tab-panel ${activeTab === key ? 'active' : ''}`}
            id={`tab-${key}`}
            style={{ display: activeTab === key ? 'grid' : 'none' }}
          >
            <div className="panel-intro">
              <h4>{tab.heading}</h4>
              <p>{tab.text}</p>
            </div>
            <div className="tab-items">
              {tab.items.map((item, idx) => (
                <div key={idx} className="tab-item">
                  <div className="ti-icon">{item.icon}</div>
                  <div className="ti-text">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
