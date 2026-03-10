"use client";

import useReveal from "@/hooks/useReveal";

export default function About() {
  const containerRef = useReveal();

  return (
    <section className="about" id="about" ref={containerRef as any}>
      <div className="about-grid">
        <div className="about-text reveal">
          <div className="section-label">About the Firm</div>
          <h2 className="section-heading">
            A Name You Can <em>Trust</em>
          </h2>
          <p>
            <span className="company-name">D N Panchasara &amp; Company</span>{" "}
            is a distinguished Chartered Accountancy firm committed to
            delivering precise, reliable, and comprehensive financial services.
            Founded with a vision to simplify complex financial landscapes, we
            combine deep domain expertise with a client-first approach that goes
            beyond numbers.
          </p>
          <p>
            Our firm stands on the bedrock of three enduring principles —{" "}
            <strong>Trust, Honesty, and Respect</strong> — which remain the
            foundation of every engagement. Whether you're a budding startup, an
            established SME, or an individual navigating complex tax
            obligations, we bring clarity, compliance, and confidence to your
            financial journey.
          </p>
          <div className="about-vision-mission">
            <div className="vm-item">
              <h4>Our Vision</h4>
              <p>
                To be the most trusted financial partner for businesses, known
                for integrity and excellence in professional services.
              </p>
            </div>
            <div className="vm-item">
              <h4>Our Mission</h4>
              <p>
                To provide high-quality taxation, audit, and advisory services
                that empower our clients to achieve sustainable growth.
              </p>
            </div>
          </div>
          <div className="about-values">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Trust</h4>
              <p>
                Building lasting relationships grounded in reliability and
                integrity.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>Honesty</h4>
              <p>
                Transparent advice, always in the best interest of our clients.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h4>Respect</h4>
              <p>
                Treating every client's financial goals with utmost seriousness.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="profile-card">
            <div className="profile-card-header">
              <div className="profile-avatar">DP</div>
              <div className="profile-name">CA Darshan Gajjar</div>
              <div className="profile-title">
                Founder &amp; Principal —{" "}
                <span className="company-name">
                  D N Panchasara &amp; Company
                </span>
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
                    "Trust, Honesty, Respect — needed to keep life moving
                    forward"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
