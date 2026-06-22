import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    msg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, msg: '' });

    // Simulating form submission (e.g., to Formspree/Web3Forms)
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        msg: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);

    /* 
    // Para conectar con Web3Forms en producción:
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "TU_CLAVE_AQUI", // Reemplazar con tu clave de Web3Forms
          ...formData
        }),
      });
      const res = await response.json();
      if (res.success) {
        setStatus({ submitting: false, submitted: true, error: false, msg: 'Mensaje enviado...' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ submitting: false, submitted: false, error: true, msg: res.message });
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: true, msg: 'Error de conexión.' });
    }
    */
  };

  return (
    <section className="contact-form-section container fade-in">
      <div className="contact-header">
        <h1 className="contact-title">Let’s start a conversation.</h1>
        <p className="contact-subtitle">
          Whether you have a project in mind, want to discuss a partnership, or just say hello, drop me a message.
        </p>
      </div>

      <div className="contact-content-grid">
        {/* Contact Form */}
        <div className="form-col">
          {status.submitted ? (
            <div className="form-status-alert success">
              <CheckCircle size={20} />
              <p>{status.msg}</p>
              <button
                onClick={() => setStatus({ submitting: false, submitted: false, error: false, msg: '' })}
                className="status-btn"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="minimal-form">
              {status.error && (
                <div className="form-status-alert error">
                  <AlertTriangle size={20} />
                  <p>{status.msg || 'Ha ocurrido un error. Inténtalo de nuevo.'}</p>
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Jane Doe"
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g., jane@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Software Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
                <Send size={16} className="send-icon" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="info-col">
          <div className="info-block">
            <h3>Direct Contact</h3>
            <p><a href="mailto:valgpintos@gmail.com" className="btn-underline">valgpintos@gmail.com</a></p>
          </div>

          <div className="info-block">
            <h3>Location</h3>
            <p>Córdoba, Argentina</p>
            <p>Available for remote work and contracts.</p>
          </div>
        </div>
      </div>

      <style>{`
        .contact-form-section {
          padding-bottom: 60px;
        }

        .contact-header {
          margin-top: 20px;
          margin-bottom: 50px;
          text-align: left;
        }

        .contact-title {
          font-size: 52px;
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .contact-subtitle {
          font-size: 18px;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 580px;
        }

        .contact-content-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 60px;
          border-top: 1px solid var(--border-color);
          padding-top: 50px;
          text-align: left;
        }

        .minimal-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-color);
          padding: 10px 0;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 15px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-secondary);
          opacity: 0.5;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--text-primary);
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--text-primary);
          color: var(--bg-color);
          border: 1px solid var(--text-primary);
          padding: 12px 32px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 2px;
          transition: var(--transition-smooth);
        }

        .submit-btn:hover {
          background: transparent;
          color: var(--text-primary);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .send-icon {
          transition: transform 0.25s ease;
        }

        .submit-btn:hover .send-icon {
          transform: translate(2px, -2px);
        }

        .form-status-alert {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          padding: 30px;
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .form-status-alert.success {
          background-color: rgba(0, 150, 0, 0.05);
          border: 1px solid rgba(0, 150, 0, 0.2);
          color: #008000;
        }

        .form-status-alert.error {
          background-color: rgba(200, 0, 0, 0.05);
          border: 1px solid rgba(200, 0, 0, 0.2);
          color: #c00000;
        }

        .form-status-alert p {
          color: inherit;
          font-size: 16px;
          font-weight: 500;
        }

        .status-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
        }

        .info-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .info-block h3 {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .info-block p {
          font-size: 15px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .contact-content-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          
          .contact-title {
            font-size: 38px;
          }
        }

        @media (max-width: 600px) {
          .form-group-row {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
