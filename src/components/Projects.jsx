import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h2 className="section-title">Projects</h2>
        <span className="section-count">LOG 03</span>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <a
            className="project-card"
            key={p.id}
            href={p.href}
            target={p.href && p.href !== "#" ? "_blank" : undefined}
            rel="noreferrer"
          >
            <div className="project-top">
              <h3 className="project-name">{p.name}</h3>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-tag">{p.tag}</p>
            <p className="project-desc">{p.description}</p>
            <div className="stack-list">
              {p.stack.map((s) => (
                <span className="stack-chip" key={s}>{s}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
