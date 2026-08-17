import Link from "next/link";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="text-primary fw-semibold">
            CONTACT ME
          </span>

          <h2 className="display-6 fw-bold mt-2">
            Let's Work Together
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Have a project idea, website you want to build,
            or need help with an existing website? Feel free
            to get in touch with me.
          </p>

        </div>

        <div className="row g-5 align-items-start">

          {/* Contact Information */}
          <div className="col-lg-5">

            <h4 className="fw-bold mb-4">
              Get In Touch
            </h4>

            {/* Email */}
            <div className="d-flex align-items-center gap-3 mb-4">

              <div className="text-primary fs-3">
                <FaEnvelope />
              </div>

              <div>
                <small className="text-muted d-block">
                  Email
                </small>

                <a
                  href="mailto:ahmadabdulhadi932@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  ahmadabdulhadi932@gmail.com
                </a>
              </div>

            </div>

            {/* WhatsApp */}
            <div className="d-flex align-items-center gap-3 mb-4">

              <div className="text-success fs-3">
                <FaWhatsapp />
              </div>

              <div>
                <small className="text-muted d-block">
                  WhatsApp
                </small>

                <a
                  href="https://wa.me/2349074618047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  +234 907 461 8047
                </a>
              </div>

            </div>

            {/* GitHub */}
            <div className="d-flex align-items-center gap-3 mb-4">

              <div className="text-dark fs-3">
                <FaGithub />
              </div>

              <div>
                <small className="text-muted d-block">
                  GitHub
                </small>

                <a
                  href="https://github.com/Aamayere11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  github.com/Aamayere11
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="d-flex align-items-center gap-3">

              <div className="text-danger fs-3">
                <FaMapMarkerAlt />
              </div>

              <div>
                <small className="text-muted d-block">
                  Location
                </small>

                <span>
                  Kaduna, Nigeria
                </span>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4 p-md-5">

                <form>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="What is your project about?"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn btn-primary px-4 rounded-pill"
                      >
                        Send Message
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

