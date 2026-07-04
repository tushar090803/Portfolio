import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <h2 className="section-title">Skills</h2>
        <span className="section-count">LOG 04</span>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.group}>
            <p className="skill-group-title">{group.group}</p>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
