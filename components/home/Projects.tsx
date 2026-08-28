import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RDD Website",
    description:
      "A professional website for the Research & Documentation Directorate featuring departments, publications, news, gallery, leadership, and an administrative dashboard.",
    technologies: ["Next.js", "MongoDB", "Bootstrap"],
    type: "Government / Organization Website",
    image: "/projects/rdd-website.png",
    live: "https://rdd-website.vercel.app/",
    github: "https://github.com/aamayere11/rdd-website",
  },
  {
    title: "Empowerment Status Checker",
    description:
      "A web application that allows applicants to check their empowerment application status using their identification number.",
    technologies: ["Next.js", "MongoDB", "API"],
    type: "Web Application",
    image: "/projects/empowerment-status-checker.png",
    live: "https://empowerment-status-checker-one.vercel.app/",
    github: "https://github.com/aamayere11/empowerment-status-checker",
  },
  {
    title: "MAYERETECH Portfolio",
    description:
      "A modern personal portfolio website showcasing my skills, projects, services, and experience as a Front-End Developer and Web Designer.",
    technologies: ["Next.js", "React", "Bootstrap"],
    type: "Personal Portfolio",
    image: "/projects/mayeretech-portfolio.png",
    live: "https://mayeretech-portfolio.vercel.app/",
    github: "https://github.com/aamayere11/mayeretech-portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="projects-label">MY PROJECTS</span>

          <h2 className="display-6 fw-bold mt-2 mb-3">
            Some Things I&apos;ve Built
          </h2>

          <p className="text-muted mx-auto projects-intro">
            Here are some of the websites and web applications I have designed
            and developed using modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="row g-4">
          {projects.map((project) => (
            <div
              className="col-md-6 col-lg-4"
              key={project.title}
            >
              <div className="card project-card border-0 h-100 overflow-hidden">

                {/* Project Image */}
                <div className="project-image-wrapper">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="project-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="project-image-overlay">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-preview-btn"
                    >
                      <FaExternalLinkAlt />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="card-body p-4 d-flex flex-column">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h4 className="project-title">
                    {project.title}
                  </h4>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="project-tech"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto d-flex gap-2">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-live-btn"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-github-btn"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

