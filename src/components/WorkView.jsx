import React from "react";
import expenseTrackerImg from "../assets/project_expense_tracker.png";
import appointmentSystemImg from "../assets/project_appointment_system.png";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function WorkView() {
  const projects = [
    {
      id: "01",
      name: "Expense Tracker",
      tagline: "Personal Finance Management Platform",
      desc: "A personal finance management platform designed to help users track expenses, manage accounts, categorize transactions, and monitor their financial activity through a secure and scalable backend architecture.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JPA/Hibernate",
        "JWT",
        "REST APIs",
        "Maven",
        "Git",
      ],
      features: [
        "User authentication and authorization with JWT",
        "Account and balance management",
        "Expense and income tracking",
        "Transaction categorization and tagging",
        "Ownership-based access control",
        "RESTful API architecture",
        "Data validation and exception handling",
        "Relational database integration",
      ],
      skills:
        "Backend Development, API Design, Database Modeling, Authentication & Security, Problem Solving, Software Architecture.",
      linkText: "Source Code",
      linkUrl: "https://github.com/ValGP/Expense-Tracker",
      img: expenseTrackerImg,
    },
    {
      id: "02",
      name: "Appointment Management System",
      tagline: "Business Appointment Scheduling Platform",
      desc: "A scheduling platform designed for service-based businesses to manage appointments, professionals, services, availability, and customer bookings through a centralized system.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JPA/Hibernate",
        "REST APIs",
        "React",
        "Git",
      ],
      features: [
        "Appointment booking and management",
        "Service and professional administration",
        "Availability and schedule configuration",
        "Business hours management",
        "Appointment status tracking",
        "Role-based access control",
        "Conflict prevention and booking validation",
        "Administrative dashboard",
      ],
      skills:
        "Business Process Modeling, Backend Development, System Design, Database Design, API Development, Problem Solving.",
      linkText: "Source Code",
      linkUrl: "https://github.com/ValGP/AppointmentMS-Template",
      img: appointmentSystemImg,
    },
  ];

  return (
    <section className="work-view container fade-in">
      {/* Intro Header */}
      <div className="work-intro">
        <h1 className="work-intro-title">Hello, I’m Valentin.</h1>
        <p className="work-intro-subtitle">
          Systems Engineering Student at UTN Córdoba & Software Developer.
        </p>
      </div>

      {/* Downward indicator arrow */}
      <div className="scroll-indicator">
        <ArrowDown size={28} strokeWidth={1.5} className="bounce-arrow" />
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-info-col">
              <span className="project-number-title">
                {project.id} / {project.name.toUpperCase()}
              </span>

              <h2 className="project-tagline">{project.tagline}</h2>

              <div className="project-desc-wrapper">
                <p className="project-desc">{project.desc}</p>

                {/* Key Features List */}
                <div className="project-features-box">
                  <h4 className="box-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="project-tech-box">
                  <div className="tech-tags">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills demonstrated */}
                <div className="project-skills-box">
                  <span className="skills-label">Skills:</span> {project.skills}
                </div>
              </div>

              <div className="project-link-wrapper">
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link btn-underline"
                >
                  {project.linkText}{" "}
                  <ArrowUpRight size={16} className="inline-icon" />
                </a>
              </div>
            </div>

            <div className="project-image-col">
              <div className="img-hover-zoom project-card-img">
                <img src={project.img} alt={project.name} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .work-view {
          padding-bottom: 60px;
        }

        .work-intro {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: start;
          margin-top: 20px;
          margin-bottom: 30px;
          text-align: left;
        }

        .work-intro-title {
          font-size: 52px;
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .work-intro-subtitle {
          font-size: 20px;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 440px;
          margin-top: 10px;
        }

        .scroll-indicator {
          margin-top: 20px;
          margin-bottom: 50px;
          text-align: left;
        }

        .bounce-arrow {
          animation: bounce 2s infinite;
          color: var(--text-primary);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        .projects-list {
          display: flex;
          flex-direction: column;
        }

        .project-item {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          padding-top: 60px;
          padding-bottom: 60px;
          border-top: 1px solid var(--border-color);
          align-items: start;
        }

        .project-item:last-child {
          border-bottom: 1px solid var(--border-color);
        }

        .project-info-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .project-number-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .project-tagline {
          font-size: 24px;
          font-weight: 500;
          line-height: 1.25;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .project-desc-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 28px;
        }

        .project-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .project-features-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .box-title {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          color: var(--text-primary);
        }

        .features-list {
          list-style: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .feature-item {
          font-size: 13px;
          color: var(--text-secondary);
          position: relative;
          padding-left: 16px;
        }

        .feature-item::before {
          content: '•';
          position: absolute;
          left: 4px;
          color: var(--accent-color);
        }

        .project-tech-box {
          margin-top: 8px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 11px;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.05);
          color: var(--text-secondary);
          padding: 3px 8px;
          border-radius: 2px;
          letter-spacing: 0.02em;
        }

        .project-skills-box {
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-secondary);
          border-left: 2px solid var(--border-color);
          padding-left: 10px;
          margin-top: 4px;
        }

        .skills-label {
          font-weight: 600;
          color: var(--text-primary);
        }

        .project-link-wrapper {
          font-size: 14px;
          font-weight: 500;
          margin-top: 10px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
        }

        .inline-icon {
          transition: transform 0.25s ease;
        }

        .project-link:hover .inline-icon {
          transform: translate(2px, -2px);
        }

        .project-image-col {
          width: 100%;
          margin-top: 32px; /* aligns better visually with content starting height */
        }

        .project-card-img {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #d8d8d8;
          border-radius: 2px;
          border: 1px solid var(--border-color);
        }

        .project-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .work-intro {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .work-intro-title {
            font-size: 38px;
          }

          .work-intro-subtitle {
            font-size: 16px;
            margin-top: 0;
          }

          .project-item {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .project-image-col {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
