import Link from "next/link";
import {
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">

      <div className="container py-5">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4">

            <h3 className="fw-bold mb-3">
              MAYERETECH
            </h3>

            <p className="text-white-50 mb-4">
              Front-End Developer and Web Designer focused on
              building modern, responsive, and user-friendly
              digital experiences.
            </p>

            <div className="d-flex gap-3">

              <a
                href="https://github.com/Aamayere11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/2349074618047"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:ahmadabdulhadi932@gmail.com"
                className="text-white fs-4"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  href="#home"
                  className="text-white-50 text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#about"
                  className="text-white-50 text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#skills"
                  className="text-white-50 text-decoration-none"
                >
                  Skills
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#projects"
                  className="text-white-50 text-decoration-none"
                >
                  Projects
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div className="col-6 col-lg-3">

            <h5 className="fw-bold mb-3">
              Services
            </h5>

            <ul className="list-unstyled text-white-50">

              <li className="mb-2">
                Web Development
              </li>

              <li className="mb-2">
                Web Design & UI
              </li>

              <li className="mb-2">
                Responsive Design
              </li>

              <li className="mb-2">
                React & Next.js
              </li>

              <li className="mb-2">
                Website Maintenance
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-3">

            <h5 className="fw-bold mb-3">
              Get In Touch
            </h5>

            <p className="text-white-50 mb-2">
              <FaEnvelope className="me-2" />
              ahmadabdulhadi932@gmail.com
            </p>

            <p className="text-white-50 mb-2">
              <FaWhatsapp className="me-2" />
              +234 907 461 8047
            </p>

            <p className="text-white-50 mb-0">
              Kaduna, Nigeria
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-top border-secondary">

        <div className="container py-3">

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

            <p className="text-white-50 mb-0 small text-center">
              © {new Date().getFullYear()} MAYERETECH.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="btn btn-outline-light btn-sm rounded-pill"
            >
              Back to Top
              <FaArrowUp className="ms-2" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

