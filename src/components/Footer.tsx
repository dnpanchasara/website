"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            D <span>N</span> Panchasara <span>&</span> Company
          </div>
          <p>
            A Chartered Accountancy firm dedicated to delivering precise,
            reliable, and ethical financial services.
          </p>
          <div className="motto">"Trust · Honesty · Respect"</div>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link href="#services">Tax Planning &amp; Filing</Link>
            </li>
            <li>
              <Link href="#services">Audit &amp; Assurance</Link>
            </li>
            <li>
              <Link href="#services">GST Compliance</Link>
            </li>
            <li>
              <Link href="#services">Accounting &amp; Bookkeeping</Link>
            </li>
            <li>
              <Link href="#services">Company Registration</Link>
            </li>
            <li>
              <Link href="#services">Business Advisory</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <ul>
            <li>
              <Link href="#about">About the Firm</Link>
            </li>
            <li>
              <Link href="#why-us">Why Choose Us</Link>
            </li>
            <li>
              <Link href="#contact">Contact Us</Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/darshan-panchasara5/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ca_darshxnp/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 D N Panchasara &amp; Company. All rights reserved. · Chartered
          Accountants, India
        </p>
        <div className="icai-badge">✦ ICAI Registered Firm</div>
      </div>
    </footer>
  );
}
