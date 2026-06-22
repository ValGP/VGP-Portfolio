import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container">
      <div className="footer-left">
        <p className="copyright-text">Valentín Garcia Pintos — {currentYear}</p>
      </div>

      <div className="footer-right">
        <a href="https://github.com/ValGP" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/valentingarciapintos/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          Linkedin
        </a>
      </div>

      <style>{`
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          padding-bottom: 60px;
          margin-top: auto; /* Push footer to bottom */
          border-top: 1px solid transparent; /* Keeps spacing clean */
        }

        .copyright-text {
          font-size: 14px;
          color: var(--accent-secondary); /* Blue color link aesthetic in image */
          font-weight: 500;
        }

        .footer-right {
          display: flex;
          gap: 24px;
        }

        .footer-social-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }

        .footer-social-link:hover {
          color: var(--text-secondary);
        }

        @media (max-width: 600px) {
          .footer {
            flex-direction: column;
            gap: 16px;
            padding-top: 30px;
            padding-bottom: 40px;
            align-items: flex-start;
          }

          .footer-right {
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
