"use client";

import useReveal from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    icon: "📊",
    title: "Income Tax Services",
    desc: "Expert ITR filing, tax planning, and handling tax notices. Strategic advice to minimize liability for individuals and corporates.",
  },
  {
    num: "02",
    icon: "📋",
    title: "GST Services",
    desc: "Complete GST registration, monthly/annual return filing, reconciliation, and representation for GST notices.",
  },
  {
    num: "03",
    icon: "📝",
    title: "Business Registration",
    desc: "Incorporation of Private Limited Companies, LLPs, OPCs, and Startups. End-to-end support for new ventures.",
  },
  {
    num: "04",
    icon: "🔍",
    title: "Audit & Assurance",
    desc: "Statutory, internal, and tax audits conducted with professional rigor to ensure financial accuracy and compliance.",
  },
  {
    num: "05",
    icon: "🏦",
    title: "Compliance & ROC",
    desc: "Annual compliance management, ROC filing, and maintenance of statutory registers for companies and LLPs.",
  },
  {
    num: "06",
    icon: "💼",
    title: "Accounting & Payroll",
    desc: "Professional bookkeeping, financial statement preparation, and end-to-end payroll management for your team.",
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
