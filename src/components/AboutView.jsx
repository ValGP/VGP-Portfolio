import React from "react";
import heroImg from "../assets/pfp_hero.JPEG";
import { ArrowRight } from "lucide-react";

export default function AboutView({ setActiveView }) {
  return (
    <section className="about-view container fade-in">
      <div className="hero-grid">
        {/* Left Column: Biography Info */}
        <div className="bio-col">
          <h1 className="main-title">
            Hi I’m Valentin Garcia Pintos, Software Developer.
          </h1>
          <p className="bio-desc">
            I'm an advanced Systems Engineering student at UTN Córdoba
            passionate about software development, systems thinking, and solving
            real-world problems through technology.
          </p>
          <p className="bio-desc">
            I enjoy working across different areas of software, from backend
            development and web applications to automation and AI-powered
            solutions. My focus is on understanding challenges, designing
            effective solutions, and turning ideas into functional products.
          </p>
          <p className="bio-desc">
            Currently, I'm building personal projects while exploring how
            emerging technologies and AI are transforming the way software is
            designed, developed, and delivered.
          </p>

          {/* Software & Skills lists */}
          <div className="skills-meta">
            <div className="meta-row">
              <div className="meta-label">
                <span className="underlined-title">Tech & Tools</span>
              </div>
              <div className="meta-value">
                <p>
                  <strong>Languages & Frameworks:</strong> Java, Spring Boot,
                  SQL, PostgreSQL, JPA / Hibernate, REST APIs, React,
                  JavaScript, HTML, CSS.
                </p>
                <p className="second-line">
                  <strong>Tools:</strong> Git, Maven, Postman, Jira.
                </p>
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-label">
                <span className="underlined-title">Core Skills</span>
              </div>
              <div className="meta-value">
                <p>
                  Software Development, Backend Engineering, Problem Solving,
                  System Design, REST API Development, Database Modeling,
                  Business Process Analysis, Technical Documentation, Testing &
                  Debugging, Continuous Learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Fog Walk Vertical Image */}
        <div className="image-col">
          <div className="vertical-photoimg shadow-effect">
            <img
              src={heroImg}
              alt="Valentin Garcia Pintos walking in the fog"
            />
          </div>
        </div>
      </div>

      <hr className="separator" />

      {/* Action Banner */}
      <div className="action-banner">
        <div className="banner-text-col">
          <h2
            className="action-heading"
            onClick={() => setActiveView("contact")}
            style={{ cursor: "pointer" }}
          >
            I am thrilled to answer to your next project{" "}
            <ArrowRight className="inline-arrow" size={24} />
          </h2>
        </div>
        <div className="banner-contact-col">
          <a
            href="mailto:valgpintos@gmail.com"
            className="email-link"
          >
            valgpintos@gmail.com
          </a>
          <a href="#resume" className="resume-link">
            View Resume
          </a>
        </div>
      </div>

      <style>{`
        .about-view {
          padding-bottom: 40px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }

        .bio-col {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .main-title {
          font-size: 46px;
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 32px;
          color: var(--text-primary);
        }

        .bio-desc {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
          max-width: 550px;
        }

        .skills-meta {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .meta-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 20px;
          align-items: start;
        }

        .meta-label {
          font-size: 14px;
          font-weight: 600;
        }

        .underlined-title {
          border-bottom: 1px solid var(--text-primary);
          padding-bottom: 2px;
          display: inline-block;
        }

        .meta-value {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .meta-value p {
          color: var(--text-primary);
        }

        .second-line {
          margin-top: 8px;
        }

        .image-col {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .vertical-photoimg {
          width: 100%;
          max-width: 380px;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background-color: #d8d8d8;
          border: 1px solid var(--border-color);
        }

        .vertical-photoimg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(10%) contrast(1.05);
          transition: var(--transition-smooth);
        }

        .vertical-photoimg:hover img {
          transform: scale(1.02);
          filter: grayscale(0%) contrast(1);
        }

        .action-banner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 20px 0;
          align-items: start;
        }

        .action-heading {
          font-size: 32px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: var(--transition-smooth);
        }

        .action-heading:hover {
          opacity: 0.7;
        }

        .inline-arrow {
          display: inline-block;
          vertical-align: middle;
          transition: transform 0.3s ease;
        }

        .action-heading:hover .inline-arrow {
          transform: translateX(6px);
        }

        .banner-contact-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .email-link {
          font-size: 32px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }

        .email-link:hover {
          color: var(--text-secondary);
        }

        .resume-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--text-secondary);
          padding-bottom: 2px;
          transition: var(--transition-smooth);
        }

        .resume-link:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
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
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .image-col {
            justify-content: center;
          }
          
          .vertical-photoimg {
            max-width: 100%;
          }

          .action-banner {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .email-link, .action-heading {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
