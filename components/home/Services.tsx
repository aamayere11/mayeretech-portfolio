import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "I build modern, fast, and functional websites using modern web technologies.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Web Design & UI",
    description:
      "I create clean, attractive, and user-friendly interfaces that provide a great user experience.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Responsive Design",
    description:
      "I build websites that work smoothly across phones, tablets, laptops, and desktop computers.",
    icon: <FaMobileAlt />,
  },
  {
    title: "React & Next.js",
    description:
      "I develop modern web applications using React and Next.js with reusable and scalable components.",
    icon: <FaCode />,
  },
  {
    title: "MongoDB Integration",
    description:
      "I connect web applications to MongoDB databases for storing and managing application data.",
    icon: <FaDatabase />,
  },
  {
    title: "Website Maintenance",
    description:
      "I help maintain, update, improve, and troubleshoot existing websites and web applications.",
    icon: <FaTools />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="text-primary fw-semibold">
            MY SERVICES
          </span>

          <h2 className="display-6 fw-bold mt-2">
            What I Can Do For You
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            I provide modern web development and design services
            focused on creating reliable, responsive, and
            user-friendly digital experiences.
          </p>

        </div>

        {/* Services */}
        <div className="row g-4">

          {services.map((service) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.title}
            >
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >

                <div className="card-body p-4">

                  {/* Icon */}
                  <div
                    className="text-primary mb-4"
                    style={{ fontSize: "2.8rem" }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h4 className="fw-bold mb-3">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted mb-0">
                    {service.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

