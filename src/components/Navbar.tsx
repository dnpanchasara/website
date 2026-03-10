"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        D <span>N</span> Panchasara <span>&</span> Company
      </div>
      <ul className="nav-links">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#why-us">Why Us</Link>
        </li>
        <li>
          <Link href="#contact" className="nav-cta">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
