import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    level: "Advanced",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: "Intermediate",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "Intermediate",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    level: "Intermediate",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="skills-label">
            MY SKILLS
          </span>

          <h2 className="display-6 fw-bold mt-2 mb-3">
            Technologies I Work With
          </h2>

          <p className="text-muted mx-auto skills-intro">
            I use modern web technologies to build responsive,
            functional, and user-friendly digital experiences.
          </p>

        </div>

        {/* Skills */}
        <div className="row g-4 justify-content-center">

          {skills.map((skill) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={skill.name}
            >
              <div className="skill-card h-100">

                {/* Icon */}
                <div className="skill-icon">
                  {skill.icon}
                </div>

                {/* Name */}
                <h5 className="skill-name">
                  {skill.name}
                </h5>

                {/* Level */}
                <span className="skill-level">
                  {skill.level}
                </span>

                {/* Visual Level */}
                <div className="skill-line">
                  <span
                    className={
                      skill.level === "Advanced"
                        ? "skill-progress advanced"
                        : "skill-progress intermediate"
                    }
                  />
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
