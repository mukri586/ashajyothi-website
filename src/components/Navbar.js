'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === '/admin') return null;
  const [shrunk, setShrunk] = useState(false);
  const [activeEl, setActiveEl] = useState(null);
  
  const navlineRef = useRef(null);
  const beaconRef = useRef(null);
  const linkRefs = useRef({});

  // Monitor scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active element based on pathname
  useEffect(() => {
    let currentKey = 'home';
    if (pathname === '/about' || pathname === '/chairman') {
      currentKey = 'about';
    } else if (pathname === '/programs') {
      currentKey = 'programs';
    } else if (pathname === '/donate') {
      currentKey = 'donate';
    } else if (pathname === '/contact') {
      currentKey = 'contact';
    }
    
    const activeLink = linkRefs.current[currentKey];
    if (activeLink) {
      setActiveEl(activeLink);
    }
  }, [pathname]);

  // Position the Diya Beacon
  const positionBeacon = (el) => {
    if (!beaconRef.current || !navlineRef.current || !el) return;
    const elRect = el.getBoundingClientRect();
    const parentRect = navlineRef.current.getBoundingClientRect();
    const scrollLeft = navlineRef.current.scrollLeft;
    
    beaconRef.current.style.width = `${elRect.width}px`;
    beaconRef.current.style.transform = `translateX(${elRect.left - parentRect.left + scrollLeft}px)`;
  };

  // Run on mount, path changes, resize, or when shrunk state changes (changing paddings)
  useEffect(() => {
    if (activeEl) {
      // Small timeout to allow styling and layout to compute (especially after font loads or DOM changes)
      const timer = setTimeout(() => positionBeacon(activeEl), 50);
      return () => clearTimeout(timer);
    }
  }, [activeEl, shrunk]);

  useEffect(() => {
    const handleResize = () => {
      if (activeEl) positionBeacon(activeEl);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeEl]);

  const handleMouseEnter = (key) => {
    const el = linkRefs.current[key];
    if (el) positionBeacon(el);
  };

  const handleMouseLeave = () => {
    if (activeEl) positionBeacon(activeEl);
  };

  return (
    <nav className={`top ${shrunk ? 'shrunk' : ''}`}>
      <div className="container row">
        <Link href="/" className="brand">
          <img className="logo" src="/logo-mark.png" alt="AshaJyothi Logo" width="46" height="46" />
          <span className="word">
            <b>AshaJyothi</b>
            <small>Light of hope · since 1998</small>
          </span>
        </Link>
        
        <div className="navline" ref={navlineRef} onMouseLeave={handleMouseLeave}>
          <span className="beacon" ref={beaconRef}></span>
          
          <Link 
            href="/" 
            className={`nl ${pathname === '/' ? 'is-active' : ''}`}
            ref={el => linkRefs.current['home'] = el}
            onMouseEnter={() => handleMouseEnter('home')}
            onFocus={() => handleMouseEnter('home')}
          >
            <span className="n">01</span>
            <span className="l">Home</span>
          </Link>
          
          <div className="nl-group" onMouseEnter={() => handleMouseEnter('about')}>
            <Link 
              href="/about" 
              className={`nl ${(pathname === '/about' || pathname === '/chairman') ? 'is-active' : ''}`}
              ref={el => linkRefs.current['about'] = el}
              onFocus={() => handleMouseEnter('about')}
            >
              <span className="n">02</span>
              <span className="l">About</span>
            </Link>
            <div className="nl-drop">
              <Link href="/about">
                <span className="drop-icon">🏛️</span>
                About AshaJyothi
              </Link>
              <hr />
              <Link href="/chairman">
                <span className="drop-icon">👤</span>
                Our Chairman
              </Link>
            </div>
          </div>
          
          <Link 
            href="/programs" 
            className={`nl ${pathname === '/programs' ? 'is-active' : ''}`}
            ref={el => linkRefs.current['programs'] = el}
            onMouseEnter={() => handleMouseEnter('programs')}
            onFocus={() => handleMouseEnter('programs')}
          >
            <span className="n">03</span>
            <span className="l">Programs</span>
          </Link>
          
          <Link 
            href="/donate" 
            className={`nl ${pathname === '/donate' ? 'is-active' : ''}`}
            ref={el => linkRefs.current['donate'] = el}
            onMouseEnter={() => handleMouseEnter('donate')}
            onFocus={() => handleMouseEnter('donate')}
          >
            <span className="n">04</span>
            <span className="l">Donate</span>
          </Link>
          
          <Link 
            href="/contact" 
            className={`nl ${pathname === '/contact' ? 'is-active' : ''}`}
            ref={el => linkRefs.current['contact'] = el}
            onMouseEnter={() => handleMouseEnter('contact')}
            onFocus={() => handleMouseEnter('contact')}
          >
            <span className="n">05</span>
            <span className="l">Contact</span>
          </Link>
        </div>
        
        <div className="nav-right">
          <Link className="pill-cta solid" href="/donate">Donate →</Link>
        </div>
      </div>
    </nav>
  );
}
