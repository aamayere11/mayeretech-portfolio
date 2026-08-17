export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">

        <div className="row align-items-center g-5">

          {/* Left */}
          <div className="col-lg-5">
            <div className="text-center">
              <div
                className="mx-auto d-flex align-items-center justify-content-center"
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #0d6efd, #6ea8fe)",
                  boxShadow:
                    "0 20px 50px rgba(13, 110, 253, 0.2)",
                }}
              >
                <span
                  className="text-white fw-bold"
                  style={{ fontSize: "4rem" }}
                >
                  AA
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-7">

            <span className="text-primary fw-semibold">
              ABOUT ME
            </span>

            <h2 className="display-6 fw-bold mt-2 mb-4">
              Building Digital Experiences That Matter
            </h2>

            <p className="text-muted">
              I'm Abdulhadi Ahmad, a passionate Front-End Developer
              and Web Designer focused on building modern,
              responsive, and user-friendly websites.
            </p>

            <p className="text-muted">
              I enjoy turning ideas into functional digital
              experiences using modern technologies such as
              React, Next.js, JavaScript, Bootstrap, and MongoDB.
            </p>

            <p className="text-muted mb-4">
              My goal is to create websites that are not only
              visually attractive but also fast, accessible,
              responsive, and easy to use.
            </p>

            {/* Skills highlights */}
            <div className="row g-3">

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="text-primary fs-4">✓</div>
                  <div>
                    <strong>Responsive Design</strong>
                    <p className="text-muted mb-0 small">
                      Mobile-friendly websites
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="text-primary fs-4">✓</div>
                  <div>
                    <strong>Modern Development</strong>
                    <p className="text-muted mb-0 small">
                      React & Next.js applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="text-primary fs-4">✓</div>
                  <div>
                    <strong>Clean UI</strong>
                    <p className="text-muted mb-0 small">
                      Simple and professional interfaces
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="text-primary fs-4">✓</div>
                  <div>
                    <strong>Problem Solving</strong>
                    <p className="text-muted mb-0 small">
                      Turning ideas into solutions
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

