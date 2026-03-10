"use client";

import useReveal from "@/hooks/useReveal";

const whyUsItems = [
  {
    num: "01",
    title: "Qualified Expertise",
    desc: "Headed by a qualified Chartered Accountant registered with the Institute of Chartered Accountants of India (ICAI).",
  },
  {
    num: "02",
    title: "Client-Centric Approach",
    desc: "Every client is unique. We tailor our services to your specific financial situation, goals, and industry needs.",
  },
  {
    num: "03",
    title: "Timely Delivery",
    desc: "Deadlines matter in finance. We ensure all filings, reports, and deliverables are completed accurately and on time.",
  },
  {
    num: "04",
    title: "Confidentiality",
    desc: "Your financial data is treated with the highest level of discretion and professional confidentiality at all times.",
  },
];

export default function WhyUs() {
  const containerRef = useReveal();

  return (
    <section className="why-us" id="why-us" ref={containerRef as any}>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-heading">
          The <em>D N Panchasara</em> Difference
        </h2>
        <div className="why-grid">
          {whyUsItems.map((item, index) => (
            <div className="why-card reveal" key={index}>
              <div className="why-number">{item.num}</div>
              <div className="why-divider"></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
