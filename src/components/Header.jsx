import React, { useState, useRef, useEffect } from 'react';
import { Settings, Check } from 'lucide-react';
import { translations } from '../data/translations';

export default function Header({ activeView, setActiveView, language, setLanguage, theme, setTheme }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const t = translations[language].nav;

  const navItems = [
    { id: 'work', label: t.work },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      
      <div className="nav-actions">
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

        {/* Gear icon and Language Selector dropdown */}
        <div className="settings-container" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`settings-btn ${isDropdownOpen ? 'active' : ''}`}
            aria-label="Settings"
          >
            <Settings size={20} className="gear-icon" />
          </button>

          {isDropdownOpen && (
            <div className="settings-dropdown">
              <span className="dropdown-title">{t.language}</span>
              <ul className="dropdown-list">
                <li 
                  onClick={() => {
                    setLanguage('en');
                    setIsDropdownOpen(false);
                  }}
                  className={`dropdown-item ${language === 'en' ? 'selected' : ''}`}
                >
                  English
                  {language === 'en' && <Check size={14} className="check-icon" />}
                </li>
                <li 
                  onClick={() => {
                    setLanguage('es');
                    setIsDropdownOpen(false);
                  }}
                  className={`dropdown-item ${language === 'es' ? 'selected' : ''}`}
                >
                  Español
                  {language === 'es' && <Check size={14} className="check-icon" />}
                </li>
              </ul>

              <div className="dropdown-divider"></div>

              <span className="dropdown-title">{t.theme}</span>
              <button 
                onClick={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                  setIsDropdownOpen(false);
                }}
                className="theme-toggle-btn"
              >
                {theme === 'light' ? t.darkMode : t.lightMode}
              </button>
            </div>
          )}
        </div>
      </div>

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

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 32px;
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

        /* Settings Gear Icon Button */
        .settings-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .settings-btn {
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .settings-btn:hover,
        .settings-btn.active {
          color: var(--text-primary);
          background-color: var(--hover-bg);
        }

        .gear-icon {
          transition: transform 0.4s ease;
        }

        .settings-btn:hover .gear-icon,
        .settings-btn.active .gear-icon {
          transform: rotate(45deg);
        }

        /* Minimalist Dropdown menu */
        .settings-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          background-color: var(--bg-color);
          border: 1px solid var(--text-primary);
          padding: 16px;
          min-width: 150px;
          border-radius: 2px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          z-index: 100;
          animation: dropdownFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-title {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 6px;
        }

        .dropdown-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dropdown-item {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 8px;
          border-radius: 2px;
          transition: var(--transition-smooth);
        }

        .dropdown-item:hover {
          color: var(--text-primary);
          background-color: var(--item-hover-bg);
        }

        .dropdown-item.selected {
          color: var(--text-primary);
          font-weight: 600;
        }

        .check-icon {
          color: var(--text-primary);
        }

        /* Divider and Theme Switcher Button styling */
        .dropdown-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 14px 0;
        }

        .theme-toggle-btn {
          width: 100%;
          background: none;
          border: 1px solid var(--text-primary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          padding: 8px 10px;
          cursor: pointer;
          border-radius: 2px;
          transition: var(--transition-smooth);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .theme-toggle-btn:hover {
          background-color: var(--text-primary);
          color: var(--bg-color);
        }

        @media (max-width: 600px) {
          .header-nav {
            padding-top: 40px;
            padding-bottom: 40px;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          
          .nav-actions {
            width: 100%;
            justify-content: space-between;
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
