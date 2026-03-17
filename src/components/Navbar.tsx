"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={isOpen ? "nav-open" : ""}>
      <div className="nav-logo">
        D <span>N</span> Panchasara <span>&</span> Company
      </div>

      <button
        className="mobile-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
