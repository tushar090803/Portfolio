import { useEffect, useState } from "react";

const SECTIONS = ["hero", "about", "experience", "projects", "skills", "contact"];

export default function Rail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Section navigation">
      <span className="rail-cap" aria-hidden="true" />
      <div className="rail-line" aria-hidden="true">
        {SECTIONS.map((id, i) => (
          <button
            key={id}
            className={`rail-dot${active === id ? " is-active" : ""}`}
            style={{ top: `${(i / (SECTIONS.length - 1)) * 100}%` }}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            aria-label={`Go to ${id}`}
          />
        ))}
      </div>
      <span className="rail-cap" aria-hidden="true" />
      <span className="rail-code">FIELD REPORT</span>
    </nav>
  );
}
