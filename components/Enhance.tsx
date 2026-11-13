"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Progressive enhancement for the whole site:
 *  - drawings: sets --e on each .iso from its scroll position (1 = apart, 0 = assembled)
 *  - reveals: marks [data-reveal] elements with data-in once they scroll into view
 *  - tracking: sends a GA4 event for every click on an element with data-track
 * Pages are fully readable without it.
 */
export default function Enhance() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-in", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Drawings follow the scroll: a piece of furniture enters the screen pulled
  // apart into its panels and closes up as it rises toward the middle.
  // Scrolling back up pulls it apart again.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<SVGElement>(".iso").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const centre = r.top + r.height / 2;
        const e = Math.min(1, Math.max(0, (centre - vh * 0.58) / (vh * 0.4)));
        el.style.setProperty("--e", e.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const el = (ev.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      window.gtag?.("event", el.dataset.track as string, {
        link_location: el.dataset.trackAt ?? "page",
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
