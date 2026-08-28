import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

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
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">MY PROJECTS</span>

          <h2 className="display-6 fw-bold mt-2">
            Some Things I&apos;ve Built
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Here are some of the websites and web applications I have designed
            and developed using modern web technologies.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <div className="card project-card border-0 shadow-sm h-100 overflow-hidden">
                <div
                  className="position-relative"
                  style={{ height: "230px", background: "#f8f9fa" }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-fit-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <small className="text-primary fw-semibold mb-2">
                    {project.type}
                  </small>

                  <h4 className="fw-bold mb-3">{project.title}</h4>

                  <p className="text-muted">{project.description}</p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="badge project-tech bg-light text-primary border"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm project-button"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm project-button"
                    >
                      <FaGithub className="me-2" />
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
