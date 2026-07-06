import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutView from './components/AboutView';
import WorkView from './components/WorkView';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('work');
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  // Synchronize theme state with the html class list
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView} 
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      
      {/* Main Content Area */}
      <main className="main-content">
        {activeView === 'about' && (
          <AboutView setActiveView={setActiveView} language={language} />
        )}
        
        {activeView === 'work' && (
          <WorkView language={language} />
        )}
        
        {activeView === 'contact' && (
          <ContactForm language={language} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        .portfolio-app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default App;
