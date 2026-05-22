'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/admin') return null;
  return (
    <footer className="foot" id="contact">
      <div className="container">
        <div className="foot-top">
          <div>
            <p className="biggie">Come and see for yourself. Or call &mdash; we pick up.</p>
            <p>AshaJyothi Handicapped Welfare Society<br />Hanuman Junction, West Godavari Dt<br />Andhra Pradesh, India &mdash; 521105</p>
            <p style={{ marginTop: '14px', color: 'var(--accent-hi)', fontWeight: '600', fontSize: '18px' }}>+91 96030 21871</p>
          </div>
          <div>
            <h5>Site</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h5>Give</h5>
            <Link href="/donate">Sponsor monthly</Link>
            <Link href="/donate">One-time</Link>
            <Link href="/donate#items">Wheelchair</Link>
            <Link href="/donate#items">Food day</Link>
            <Link href="/donate#items">PARI pads</Link>
          </div>
          <div>
            <h5>Follow</h5>
            <a href="https://www.facebook.com/madhavi.latha.560" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/madhavi.latha.560?igsh=MTZsa2R0bHF3d2RvdQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        <dl className="foot-bank">
          <div>
            <dt>Account name</dt>
            <dd>Asha Jyothi Handicapped Welfare Society</dd>
          </div>
          <div>
            <dt>A/C number</dt>
            <dd>34215204307</dd>
          </div>
          <div>
            <dt>IFSC</dt>
            <dd>SBIN0004700</dd>
          </div>
          <div>
            <dt>Branch</dt>
            <dd>SBI · Hanuman Junction</dd>
          </div>
        </dl>

        <h2 className="foot-mega">Asha<em>Jyothi</em></h2>

        <div className="foot-base">
          <span>© 2026 · Reg. Voluntary Org · 80G &amp; 12A tax exempt</span>
          <div className="socials">
            <a href="https://www.facebook.com/madhavi.latha.560" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/madhavi.latha.560?igsh=MTZsa2R0bHF3d2RvdQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
