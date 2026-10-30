"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (elements.length === 0) return;

    const showAll = () => elements.forEach((el) => el.classList.add("is-in"));

    if (typeof IntersectionObserver === "undefined") {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );

    elements.forEach((el) => observer.observe(el));

    // Safety net: if the observer never fires (e.g. an odd embedded browser),
    // never leave content invisible.
    const fallback = window.setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains("is-in")) el.classList.add("is-in");
      });
    }, 4000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return null;
}
