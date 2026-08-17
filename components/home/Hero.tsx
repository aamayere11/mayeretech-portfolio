
"use client";

import Link from "next/link";
import { FaArrowRight, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #eef5ff 100%)",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Text */}
          <div className="col-lg-7">

            <div className="mb-3">
              <span className="badge bg-primary px-3 py-2 rounded-pill">
                <FaCode className="me-2" />
                Front-End Developer
              </span>
            </div>

            <h1 className="display-3 fw-bold mb-3">
              Hello, I'm{" "}
              <span className="text-primary">
                Abdulhadi Ahmad
              </span>
            </h1>

            <h2 className="fw-semibold text-dark mb-3">
              I Build Modern & Responsive Websites
            </h2>

            <p className="lead text-muted mb-4">
              I'm a Front-End Developer and Web Designer passionate
              about creating clean, responsive, and user-friendly
              websites using modern web technologies.
            </p>

            <div className="d-flex flex-wrap gap-3">

              <Link
                href="#projects"
                className="btn btn-primary btn-lg px-4 rounded-pill"
              >
                View My Projects
                <FaArrowRight className="ms-2" />
              </Link>

              <Link
                href="#contact"
                className="btn btn-outline-primary btn-lg px-4 rounded-pill"
              >
                Contact Me
              </Link>

            </div>

          </div>

          {/* Profile Area */}
          <div className="col-lg-5 text-center">

            <div
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "320px",
                height: "320px",
                maxWidth: "80vw",
                maxHeight: "80vw",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #0d6efd, #6ea8fe)",
                boxShadow:
                  "0 20px 60px rgba(13, 110, 253, 0.25)",
              }}
            >

              <div
                className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "280px",
                  height: "280px",
                  maxWidth: "70vw",
                  maxHeight: "70vw",
                }}
              >

                <FaCode
                  className="text-primary"
                  style={{ fontSize: "90px" }}
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

