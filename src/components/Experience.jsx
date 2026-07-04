import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2 className="section-title">Experience</h2>
        <span className="section-count">LOG 02</span>
      </div>
      {experience.map((job, i) => (
        <div className="card exp-card" key={job.id}>
          <div className="exp-top">
            <div>
              <p className="exp-role">{job.role}</p>
              <p className="exp-org">{job.org} · {job.location}</p>
            </div>
            <span className="exp-period">{job.period}</span>
          </div>
          <p className="exp-summary">{job.summary}</p>
          {job.highlights?.length > 0 && (
            <ul className="exp-highlights">
              {job.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
