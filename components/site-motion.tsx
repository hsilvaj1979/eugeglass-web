"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement: content stays visible without JavaScript. */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    const configure = () => {
      dispose();
      if (preference.matches) return;
      const targets = Array.from(document.querySelectorAll<HTMLElement>(
        "main > section:not(.glass-image), main article, main .image-card, main .group"
      ));
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
      targets.forEach((target) => {
        // Do not hide content already on screen, including restored scroll positions.
        if (target.getBoundingClientRect().top < window.innerHeight) return;
        target.classList.add("motion-reveal");
        observer.observe(target);
      });

      const hero = document.querySelector<HTMLElement>(".glass-image");
      let frame = 0;
      const update = () => {
        frame = 0;
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
        const offset = Math.max(-72, Math.min(72, -rect.top * 0.12));
        hero.style.setProperty("--parallax-y", `${offset}px`);
      };
      const schedule = () => {
        if (!frame) frame = window.requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      dispose = () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        hero?.style.removeProperty("--parallax-y");
        targets.forEach((target) => target.classList.remove("motion-reveal", "motion-visible"));
      };
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      dispose();
      preference.removeEventListener("change", configure);
    };
  }, [pathname]);

  return null;
}
