import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutView from './components/AboutView';
import WorkView from './components/WorkView';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('work');

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Header activeView={activeView} setActiveView={setActiveView} />
      
      {/* Main Content Area */}
      <main className="main-content">
        {activeView === 'about' && (
          <AboutView setActiveView={setActiveView} />
        )}
        
        {activeView === 'work' && (
          <WorkView />
        )}
        
        {activeView === 'contact' && (
          <ContactForm />
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
