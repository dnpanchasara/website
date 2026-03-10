"use client";

import { useEffect, useRef } from "react";

export default function useReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveals = containerRef.current?.querySelectorAll(".reveal");
    if (!reveals) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => {
                entry.target.classList.add("visible");
              },
              80 * (i % 4),
            );
          }
        });
      },
      { threshold: 0.1 },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return containerRef;
}
