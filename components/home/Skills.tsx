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
    <section id="skills" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">
            MY SKILLS
          </span>

          <h2 className="display-6 fw-bold mt-2">
            Technologies I Work With
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            I use modern web technologies to build responsive,
            functional, and user-friendly digital experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="row g-4">
          {skills.map((skill) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={skill.name}
            >
              <div
                className="card border-0 shadow-sm h-100 text-center"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="card-body py-4">

                  <div
                    className="text-primary mb-3"
                    style={{ fontSize: "3rem" }}
                  >
                    {skill.icon}
                  </div>

                  <h5 className="fw-bold mb-2">
                    {skill.name}
                  </h5>

                  <span className="badge bg-light text-primary border">
                    {skill.level}
                  </span>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

