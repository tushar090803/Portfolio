import { profile, availability } from "../data.js";
import myPic from "../assets/pic.jpg"

function Silhouette() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="badge">
        <div className="badge-photo">
          {profile.photo ? (
            <img src={myPic} alt={profile.name} />
          ) : (
            <Silhouette />
          )}
        </div>
        <p className="badge-caption">{profile.logCode}</p>
      </div>

      <div>
        <p className="eyebrow">Portfolio · {profile.location}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-meta">
          <span className="pill">
            <span className="pill-dot" />
            {availability.status}
          </span>
          {profile.resumeUrl && profile.resumeUrl !== "#" && (
            <a className="pill" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              View resume ↗
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
