import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <h2 className="section-title">About</h2>
        <span className="section-count">LOG 01</span>
      </div>
      <div className="card about-card">
        {profile.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
