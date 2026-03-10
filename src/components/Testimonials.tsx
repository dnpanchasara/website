"use client";

import useReveal from "@/hooks/useReveal";

const testimonials = [
  {
    rating: "⭐⭐⭐⭐⭐",
    text: "Excellent service for GST filing and tax planning. CA Darshan and his team are highly professional.",
    author: "Rajesh Kumar",
    company: "Kumar Enterprises",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: "D N Panchasara & Company helped us with our company registration and annual compliance seamlessly. Highly recommended!",
    author: "Sneha Patel",
    company: "TechNova Solutions",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: "Reliable and precise audit services. They bring a lot of clarity to complex financial matters.",
    author: "Amit Shah",
    company: "SME Group",
  },
];

export default function Testimonials() {
  const containerRef = useReveal();

  return (
    <section
      className="testimonials"
      id="testimonials"
      ref={containerRef as any}
    >
      <div className="section-label">Testimonials</div>
      <h2 className="section-heading">
        What Our <em>Clients</em> Say
      </h2>
      <div className="testimonials-grid reveal">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="rating">{t.rating}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.author}</strong>
              <span>{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
