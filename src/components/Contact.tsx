"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

export default function Contact() {
  const containerRef = useReveal();
  const [status, setStatus] = useState("Send Message →");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("✓ Message Sent!");
    setIsSuccess(true);
    setTimeout(() => {
      setStatus("Send Message →");
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section className="contact" id="contact" ref={containerRef as any}>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <div className="section-label">Get In Touch</div>
          <h2>
            Let's Build Your <em>Financial Future</em> Together
          </h2>
          <p>
            Whether you have a query, need a consultation, or want to discuss
            how D N Panchasara &amp; Company can serve you, we'd love to hear
            from you.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="icon">📧</div>
              <div className="text">
                <label>Email</label>
                <span>
                  <a href="mailto:contact@dnpanchasara.com">
                    contact@dnpanchasara.com
                  </a>
                </span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">📸</div>
              <div className="text">
                <label>Instagram</label>
                <span>
                  <a
                    href="https://www.instagram.com/ca_darshxnp/"
                    target="_blank"
                    rel="noopener"
                  >
                    @ca_darshxnp
                  </a>
                </span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">🔗</div>
              <div className="text">
                <label>LinkedIn</label>
                <span>
                  <a
                    href="https://www.linkedin.com/in/darshan-panchasara5/"
                    target="_blank"
                    rel="noopener"
                  >
                    linkedin.com/in/darshan-panchasara5
                  </a>
                </span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">📍</div>
              <div className="text">
                <label>Location</label>
                <span>India 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap reveal">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Rahul" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Sharma" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="rahul@example.com" required />
            </div>
            <div className="form-group">
              <label>Service Required</label>
              <select required>
                <option value="">Select a service...</option>
                <option>Tax Planning &amp; Filing</option>
                <option>Audit &amp; Assurance</option>
                <option>GST Compliance</option>
                <option>Accounting &amp; Bookkeeping</option>
                <option>Company Registration</option>
                <option>Business Advisory</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell us about your requirements..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="form-submit"
              style={
                isSuccess ? { background: "#2d6a4f", color: "#fff" } : undefined
              }
            >
              {status}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
