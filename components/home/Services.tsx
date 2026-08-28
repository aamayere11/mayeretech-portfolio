import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "I build modern, fast, and functional websites using reliable and modern web technologies.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Web Design & UI",
    description:
      "I create clean, attractive, and user-friendly interfaces focused on a smooth digital experience.",
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
    <section id="services" className="services-section py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="services-label">
            MY SERVICES
          </span>

          <h2 className="display-6 fw-bold mt-2 mb-3">
            What I Can Do For You
          </h2>

          <p className="text-muted mx-auto services-intro">
            I provide modern web development and design services
            focused on creating reliable, responsive, and
            user-friendly digital experiences.
          </p>

        </div>

        {/* Services */}
        <div className="row g-4">

          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.title}
            >
              <div className="service-card h-100">

                {/* Number */}
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="service-icon">
                  {service.icon}
                </div>

                {/* Content */}
                <h4 className="service-title">
                  {service.title}
                </h4>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-arrow">
                  <FaArrowRight />
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

