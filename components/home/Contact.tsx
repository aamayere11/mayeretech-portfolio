"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! Thank you.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <span className="contact-label">
            CONTACT ME
          </span>

          <h2 className="display-6 fw-bold mt-2 mb-3">
            Let&apos;s Work Together
          </h2>

          <p className="text-muted mx-auto contact-intro">
            Have a project idea, website you want to build, or need help
            with an existing website? Feel free to get in touch with me.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-card h-100">

              <span className="contact-small-title">
                GET IN TOUCH
              </span>

              <h3 className="fw-bold mt-2 mb-3">
                Have a project in mind?
              </h3>

              <p className="contact-info-text mb-4">
                I&apos;d love to hear about your project and discuss how
                I can help turn your idea into a functional digital
                experience.
              </p>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>Email</small>

                  <a href="mailto:ahmadabdulhadi932@gmail.com">
                    ahmadabdulhadi932@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>

                <div>
                  <small>WhatsApp</small>

                  <a
                    href="https://wa.me/2349074618047"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +234 907 461 8047
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>

                <div>
                  <small>GitHub</small>

                  <a
                    href="https://github.com/Aamayere11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Aamayere11
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <small>Location</small>
                  <span>Kaduna, Nigeria</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349074618047"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                Chat on WhatsApp
                <FaArrowRight />
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <div className="contact-form-card h-100">

              <h4 className="fw-bold mb-2">
                Send Me a Message
              </h4>

              <p className="text-muted mb-4">
                Tell me a little about your project and I&apos;ll get back
                to you.
              </p>

              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="What is your project about?"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control contact-input"
                      rows={6}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <div className="col-12">

                    <button
                      type="submit"
                      className="contact-submit-btn"
                    >
                      Send Message
                      <FaArrowRight />
                    </button>

                    {status && (
                      <p className="mt-3 mb-0">
                        {status}
                      </p>
                    )}

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

