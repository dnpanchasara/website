"use client";

import useReveal from "@/hooks/useReveal";

export default function Contact() {
  const containerRef = useReveal();

  return (
    <section className="contact" id="contact" ref={containerRef as any}>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <div className="section-label"> Get In Touch</div>
          <h2>
            Let's Build Your <em>Financial Future</em> Together
          </h2>
          <p>
            Whether you have a query, need a consultation, or want to discuss
            how{" "}
            <span className="company-name">D N Panchasara &amp; Company</span>{" "}
            can serve you, we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
