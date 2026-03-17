"use client";

export default function ContactDetails() {
  const items = [
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

  return (
    <section className="contact-details-section">
      <div className="contact-details-inner">
        <div className="contact-details-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading contact-details-heading">
            Reach <em>Darshan</em> Directly
          </h2>
          <p className="contact-details-sub">
            Connect through any of the channels below — a response is always
            just a message away.
          </p>
        </div>

        <div className="contact-details-grid">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="cd-card"
            >
              <div className="cd-icon">{item.icon}</div>
              <div className="cd-text">
                <span className="cd-label">{item.label}</span>
                <span className="cd-value">{item.value}</span>
              </div>
              <span className="cd-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
