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
        <div className="hero-trust-badges">
          <span>✔ 10+ Years Experience</span>
          <span>✔ 500+ Clients Served</span>
          <span>✔ ICAI Certified</span>
        </div>
        <p className="hero-sub">
          <em>Trusted</em> Chartered Accountant Services. Always.
        </p>
        <p className="hero-tagline">Excellence in Taxation, Audit & Advisory</p>
        <p className="hero-desc">
          <span className="company-name">D N Panchasara &amp; Company</span> is
          a premier Chartered Accountancy firm built on the bedrock of Trust,
          Honesty, and Respect. We provide comprehensive financial solutions,
          from strategic tax planning and rigorous audits to seamless business
          incorporation, empowering startups and enterprises across India.
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
