"use client";

import useReveal from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    icon: "📊",
    title: "Tax Planning & Filing",
    desc: "Expert income tax planning and ITR filing for individuals, firms, and corporates. Strategic advice to minimise liability within legal boundaries.",
  },
  {
    num: "02",
    icon: "🔍",
    title: "Audit & Assurance",
    desc: "Statutory, internal, and tax audits conducted with rigour and independence. Reliable financial reporting that builds stakeholder confidence.",
  },
  {
    num: "03",
    icon: "📋",
    title: "GST Compliance",
    desc: "Complete GST registration, return filing, reconciliation, and advisory services. Stay compliant while optimising your GST structure.",
  },
  {
    num: "04",
    icon: "🏦",
    title: "Accounting & Bookkeeping",
    desc: "Accurate, timely, and organised financial records. We manage your books so you can focus on growing your business.",
  },
  {
    num: "05",
    icon: "📝",
    title: "Company Registration",
    desc: "End-to-end incorporation services for Private Ltd, LLP, OPC, and sole proprietorships. Get your business legally set up quickly.",
  },
  {
    num: "06",
    icon: "💼",
    title: "Business Advisory",
    desc: "Strategic financial guidance on investments, business valuation, restructuring, and growth planning. Your trusted financial partner.",
  },
];

export default function Services() {
  const containerRef = useReveal();

  return (
    <section className="services" id="services" ref={containerRef as any}>
      <div className="services-intro reveal">
        <div className="section-label">What We Offer</div>
        <h2 className="section-heading">
          Comprehensive <em>Financial</em> Services
        </h2>
        <p>
          From taxation to audit, compliance to advisory — our team delivers
          end-to-end financial solutions tailored to your unique needs.
        </p>
      </div>
      <div className="services-grid reveal">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-num">{service.num}</div>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
