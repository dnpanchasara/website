"use client";

import useReveal from "@/hooks/useReveal";

const contactItems = [
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/darshan-panchasara5",
    href: "https://www.linkedin.com/in/darshan-panchasara5/",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "dnpanchasara.online",
    href: "https://dnpanchasara.online/",
  },
  {
    icon: "📞",
    label: "Phone (Work)",
    value: "+91 96249 13296",
    href: "tel:+919624913296",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "darshanpanchasara5@gmail.com",
    href: "mailto:darshanpanchasara5@gmail.com",
  },
];

export default function Profile() {
  const containerRef = useReveal();

  return (
    <section className="profile-section" id="profile" ref={containerRef as any}>
      <div className="profile-merged-inner reveal">
        {/* ── Profile Card ── */}
        <div className="profile-card">
          <div className="profile-card-header">
            <div className="profile-avatar">DP</div>
            <div className="profile-name">CA Darshan Panchasara (GAJJAR)</div>
            <div className="profile-title">
              Founder &amp; Principal —{" "}
              <span className="company-name">D N Panchasara &amp; Company</span>
            </div>
          </div>
          <div className="profile-body">
            <div className="profile-detail">
              <div className="detail-icon">🎓</div>
              <div className="detail-text">
                <label>Qualification</label>
                <span>Chartered Accountant (CA) — ICAI</span>
              </div>
            </div>
            <div className="profile-detail">
              <div className="detail-icon">🏢</div>
              <div className="detail-text">
                <label>Firm</label>
                <span className="company-name">
                  D N Panchasara &amp; Company
                </span>
              </div>
            </div>
            <div className="profile-detail">
              <div className="detail-icon">📍</div>
              <div className="detail-text">
                <label>Location</label>
                <span>India 🇮🇳</span>
              </div>
            </div>
            <div className="profile-detail">
              <div className="detail-icon">💡</div>
              <div className="detail-text">
                <label>Philosophy</label>
                <span>
                  "Trust, Honesty, Respect — needed to keep life moving forward"
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact Details ── */}
        <div className="profile-contact-panel">
          <span
            className="section-label"
            style={{ color: "var(--navy)", marginBottom: "0.75rem" }}
          >
            Get In Touch
          </span>
          <h2 className="profile-contact-heading">
            Reach <em>Darshan</em> Directly
          </h2>
          <p className="profile-contact-sub">
            Connect through any of the channels below — a response is always
            just a message away.
          </p>
          <div className="profile-contact-grid">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="cd-card cd-card--light"
              >
                <div className="cd-icon cd-icon--light">{item.icon}</div>
                <div className="cd-text">
                  <span className="cd-label cd-label--light">{item.label}</span>
                  <span className="cd-value cd-value--light">{item.value}</span>
                </div>
                <span className="cd-arrow cd-arrow--light">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
