import Link from "next/link";
import {
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="container py-5">

        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4">

            <Link
              href="#home"
              className="footer-brand"
            >
              <span className="footer-brand-icon">
                <FaCode />
              </span>

              <span>MAYERETECH</span>
            </Link>

            <p className="footer-description mt-3 mb-4">
              Front-End Developer and Web Designer focused on
              building modern, responsive, and user-friendly
              digital experiences.
            </p>

            {/* Social Links */}
            <div className="footer-socials">

              <a
                href="https://github.com/Aamayere11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/2349074618047"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:ahmadabdulhadi932@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">

            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link href="#home">Home</Link>
              </li>

              <li>
                <Link href="#about">About</Link>
              </li>

              <li>
                <Link href="#services">Services</Link>
              </li>

              <li>
                <Link href="#skills">Skills</Link>
              </li>

              <li>
                <Link href="#projects">Projects</Link>
              </li>

              <li>
                <Link href="#contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div className="col-6 col-lg-3">

            <h5 className="footer-heading">
              Services
            </h5>

            <ul className="footer-links">

              <li>Web Development</li>
              <li>Web Design & UI</li>
              <li>Responsive Design</li>
              <li>React & Next.js</li>
              <li>MongoDB Integration</li>
              <li>Website Maintenance</li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-3">

            <h5 className="footer-heading">
              Get In Touch
            </h5>

            <div className="footer-contact">

              <a href="mailto:ahmadabdulhadi932@gmail.com">
                <FaEnvelope />
                <span>ahmadabdulhadi932@gmail.com</span>
              </a>

              <a
                href="https://wa.me/2349074618047"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <span>+234 907 461 8047</span>
              </a>

              <span>
                Kaduna, Nigeria
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <div className="container py-3">

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

            <p className="footer-copyright mb-0 text-center">
              © {new Date().getFullYear()} MAYERETECH.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="back-to-top"
            >
              Back to Top
              <FaArrowUp />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

