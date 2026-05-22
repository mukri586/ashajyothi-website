'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealListener() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );

    // Give the DOM a tiny fraction of time to mount/render elements
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        io.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
