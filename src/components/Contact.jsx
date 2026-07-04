import { socials, profile, availability } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-head">
        <h2 className="section-title">Get in touch</h2>
        <span className="section-count">LOG 05</span>
      </div>
      <div className="contact-card">
        <h3 className="contact-title">Let's work together</h3>
        <p className="contact-copy">
          {availability.detail} The fastest way to reach {profile.name.split(" ")[0]} is through mail id or linkedin.
        </p>
        <div className="contact-links">
          {socials.map((s) => (
            <a className="contact-link" href={s.href} key={s.label} target="_blank" rel="noreferrer">
              <span className="contact-link-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="footer-note">
        © {new Date().getFullYear()} {profile.name} — tushargupta140507@gmail.com
      </p>
    </section>
  );
}
