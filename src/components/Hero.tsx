"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-line"></div>
      <div className="hero-content">
        <div className="hero-badge">Chartered Accountants · India 🇮🇳</div>
        <div className="hero-firm-name">
          <span className="dn">D N</span>{" "}
          <span className="company-name">Panchasara</span>
          <br />
          <span className="co">&amp; Company</span>
        </div>
        <p className="hero-sub">
          <em>Trusted</em> Financial Guidance. Always.
        </p>
        <p className="hero-tagline">Where numbers meet integrity</p>
        <p className="hero-desc">
          <span className="company-name">D N Panchasara &amp; Company</span> is
          a professional Chartered Accountancy firm built on the principles of
          Trust, Honesty, and Respect — delivering expert financial, taxation,
          and audit services to businesses and individuals across India.
        </p>
        <div className="hero-actions">
          <Link href="#services" className="btn-primary">
            Our Services
          </Link>
          <Link href="#contact" className="btn-outline">
            Book a Consultation
          </Link>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">CA</div>
          <div className="stat-label">Qualified Expert</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Focus</div>
        </div>
      </div>
    </section>
  );
}
