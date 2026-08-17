"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Brand */}
        <Link
          href="/"
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          onClick={closeMenu}
        >
          <span className="text-primary fs-4">
            <FaCode />
          </span>

          <span>MAYERETECH</span>
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

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

            <li className="nav-item">
              <Link
                href="#services"
                className="nav-link"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item contact-item">
              <Link
                href="#contact"
                className="btn btn-primary px-4 rounded-pill"
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