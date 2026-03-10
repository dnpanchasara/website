"use client";

import useReveal from "@/hooks/useReveal";

const posts = [
  {
    title: "Top 10 Tax Saving Tips for Salaried Employees",
    excerpt:
      "Maximize your take-home pay with these essential tax-saving strategies under the latest regulations.",
    date: "Mar 10, 2024",
    tag: "Tax Tips",
  },
  {
    title: "GST Rules Every Business Owner Should Know",
    excerpt:
      "Stay compliant and avoid penalties by understanding these fundamental GST compliance requirements.",
    date: "Feb 25, 2024",
    tag: "GST Update",
  },
  {
    title: "How to Register a Private Limited Company",
    excerpt:
      "A step-by-step guide to the incorporation process for startups and new business ventures in India.",
    date: "Feb 10, 2024",
    tag: "Business Guide",
  },
];

export default function Blog() {
  const containerRef = useReveal();

  return (
    <section className="blog" id="blog" ref={containerRef as any}>
      <div className="section-label">Knowledge Center</div>
      <h2 className="section-heading">
        Latest <em>Insights</em> & Updates
      </h2>
      <div className="blog-grid reveal">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-tag">{post.tag}</div>
            <div className="blog-date">{post.date}</div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className="read-more">Read More →</button>
          </div>
        ))}
      </div>
      <div className="blog-cta reveal">
        <button className="btn-outline">View All Articles</button>
      </div>
    </section>
  );
}
