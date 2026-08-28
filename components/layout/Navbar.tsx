"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top main-navbar">
      <div className="container">

        {/* Brand */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          onClick={closeMenu}
        >
          <span className="brand-icon">
            <FaCode />
          </span>

          <span className="brand-name">
            MAYERETECH
          </span>
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          className="navbar-toggler custom-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <div className={`custom-navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <Link
                href="/"
                className="nav-link"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#about"
                className="nav-link"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#services"
                className="nav-link"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#skills"
                className="nav-link"
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#projects"
                className="nav-link"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link
                href="#contact"
                className="navbar-contact-btn"
                onClick={closeMenu}
              >
                Contact Me
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

