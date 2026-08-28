"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Text */}
          <div className="col-lg-7">

            <div className="hero-badge mb-4">
              <FaCode />
              <span>Front-End Developer & Web Designer</span>
            </div>

            <h1 className="hero-title mb-3">
              Hello, I&apos;m{" "}
              <span>Abdulhadi Ahmad</span>
            </h1>

            <h2 className="hero-subtitle mb-4">
              I Build Modern & Responsive Web Experiences
            </h2>

            <p className="hero-description mb-4">
              I design and develop clean, responsive, and user-friendly
              websites and web applications using modern technologies like
              Next.js, React, MongoDB, and Bootstrap.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">

              <Link
                href="#projects"
                className="btn hero-primary-btn"
              >
                View My Projects
                <FaArrowRight />
              </Link>

              <Link
                href="#contact"
                className="btn hero-secondary-btn"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span>Connect with me:</span>

              <a
                href="https://github.com/aamayere11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>

          {/* Developer Illustration */}
          <div className="col-lg-5 text-center">

            <div className="hero-visual">

              <div className="hero-circle">

                <div className="hero-inner-circle">
                  <FaCode className="hero-code-icon" />
                </div>

              </div>

              {/* Floating Cards */}
              <div className="floating-card floating-card-one">
                <FaCode />
                <div>
                  <strong>Clean Code</strong>
                  <small>Modern Development</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span>&lt;/&gt;</span>
                <div>
                  <strong>Responsive</strong>
                  <small>Mobile Friendly</small>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

