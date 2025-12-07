import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export type NavSection = { id: string; label: string };

type Props = {
  sections: NavSection[];
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navbar = ({ sections }: Props) => {
  const [active, setActive] = useState<string>(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          const closest = visible.reduce((prev, curr) =>
            Math.abs(curr.boundingClientRect.top) <
            Math.abs(prev.boundingClientRect.top)
              ? curr
              : prev,
          );
          setActive(closest.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-0">
      <div className="glass mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-funky px-4 py-3 shadow-card">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg border-2 border-ink bg-lemon shadow-card" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
              UI Engineer
            </p>
            <p className="font-semibold text-ink">Iñaki Aranzadi</p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 px-2 py-1 sm:flex sm:gap-2 sm:overflow-x-auto sm:whitespace-nowrap sm:px-0 sm:py-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActive(section.id);
                scrollToSection(section.id);
              }}
              className={clsx(
                "relative overflow-hidden rounded-full border border-ink/20 px-3 py-1 text-xs font-medium transition sm:text-sm min-w-fit",
                "hover:-translate-y-[2px] hover:border-ink hover:shadow-card",
                active === section.id
                  ? "bg-mint text-ink shadow-card"
                  : "bg-white/80 text-ink/70",
              )}
            >
              <span className="relative z-10">{section.label}</span>
              {active === section.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-sheen"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
