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

    // Scan and observe elements
    const scan = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (!el.classList.contains('in')) {
          io.observe(el);
        }
      });
    };

    // Initial scan
    scan();

    // Set up MutationObserver to dynamically catch nodes added during hydration or route transitions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element Node
            if (node.classList && node.classList.contains('reveal')) {
              if (!node.classList.contains('in')) {
                io.observe(node);
              }
            }
            node.querySelectorAll('.reveal').forEach((el) => {
              if (!el.classList.contains('in')) {
                io.observe(el);
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Fallback staggered triggers
    const timers = [
      setTimeout(scan, 50),
      setTimeout(scan, 200),
      setTimeout(scan, 500),
      setTimeout(scan, 1000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}

