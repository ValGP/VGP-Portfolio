import React from 'react';

export default function Header({ activeView, setActiveView }) {
  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header-nav container">
      <div className="logo-container">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            setActiveView('about');
          }}
          className="logo-text"
        >
          vgp.
        </a>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveView(item.id);
            }}
            className={`nav-link ${activeView === item.id ? 'active' : ''}`}
            id={`nav-${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <style>{`
        .header-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .logo-text {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }

        .logo-text:hover {
          opacity: 0.7;
        }

        .nav-menu {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 4px 0;
          transition: var(--transition-smooth);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link.active {
          color: var(--text-primary);
          font-weight: 600;
        }

        @media (max-width: 500px) {
          .header-nav {
            padding-top: 40px;
            padding-bottom: 40px;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          
          .nav-menu {
            gap: 16px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </header>
  );
}
