import {
  FaCheck,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="about-label">ABOUT ME</span>

          <h2 className="display-6 fw-bold mt-2">
            Building Digital Experiences That Matter
          </h2>

          <p className="text-muted mx-auto about-intro">
            I combine creativity and modern web technologies to build
            digital experiences that are useful, responsive, and easy to use.
          </p>
        </div>

        <div className="row align-items-center g-5">

          {/* Profile Illustration */}
          <div className="col-lg-5">
            <div className="about-visual">

              <div className="about-main-circle">
                <div className="about-inner-circle">
                  <FaCode className="about-code-icon" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="about-floating-card about-card-one">
                <FaLaptopCode />
                <span>Web Development</span>
              </div>

              <div className="about-floating-card about-card-two">
                <FaMobileAlt />
                <span>Responsive Design</span>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7">

            <span className="about-small-title">
              WHO I AM
            </span>

            <h3 className="fw-bold mt-2 mb-4">
              Front-End Developer & Web Designer
            </h3>

            <p className="about-text">
              I&apos;m Abdulhadi Ahmad, a passionate Front-End Developer
              and Web Designer focused on building modern, responsive,
              and user-friendly websites and web applications.
            </p>

            <p className="about-text">
              I enjoy transforming ideas into functional digital
              experiences using technologies such as React, Next.js,
              JavaScript, Bootstrap, and MongoDB.
            </p>

            <p className="about-text mb-4">
              My goal is to create digital products that are visually
              appealing, fast, accessible, responsive, and easy to use.
            </p>

            {/* Highlights */}
            <div className="row g-3">

              <div className="col-sm-6">
                <div className="about-highlight">
                  <div className="about-check">
                    <FaCheck />
                  </div>
                  <div>
                    <strong>Responsive Design</strong>
                    <p>Mobile-friendly experiences</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-highlight">
                  <div className="about-check">
                    <FaCheck />
                  </div>
                  <div>
                    <strong>Modern Development</strong>
                    <p>React & Next.js applications</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-highlight">
                  <div className="about-check">
                    <FaCheck />
                  </div>
                  <div>
                    <strong>Clean UI</strong>
                    <p>Simple & professional interfaces</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-highlight">
                  <div className="about-check">
                    <FaCheck />
                  </div>
                  <div>
                    <strong>Problem Solving</strong>
                    <p>Turning ideas into solutions</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Technologies */}
            <div className="about-tech mt-4">
              <div className="about-tech-title">
                <FaLightbulb />
                <span>Technologies I Work With</span>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Bootstrap</span>
                <span>MongoDB</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

