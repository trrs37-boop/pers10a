'use client'
import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simüle edilmiş gönderim
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }
  return (
    <div className="contact-page">
      <div className="container">
        {/* Başlık Alanı */}
        <div className="contact-hero">
          <h1>İletişim</h1>
          <p className="contact-subtitle">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin.
          </p>
        </div>
        <div className="contact-grid">
          {/* İletişim Bilgileri */}
          <div className="contact-info-section">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <h3>E-posta</h3>
              <p className="contact-card-text">
                Bize doğrudan e-posta gönderin
              </p>
              <a href="mailto:pers10asite@gmail.com" className="contact-card-link">
                pers10asite@gmail.com
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Konum</h3>
              <p className="contact-card-text">
                Türkiye
              </p>
            </div>
            <div className="contact-info-note">
              <p>
                📌 Genellikle <strong>24 saat</strong> içinde yanıt veriyoruz.
              </p>
            </div>
          </div>
          {/* İletişim Formu */}
          <div className="contact-form-section">
            <div className="contact-form-card">
              <h2>Bize Yazın</h2>
              {isSubmitted && (
                <div className="contact-success">
                  <FaCheckCircle className="success-icon" />
                  <p>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Adınız Soyadınız</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınızı girin"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-posta Adresiniz</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Mesajınızın konusu"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-page {
          padding: 3rem 0 5rem;
          min-height: 80vh;
        }
        .contact-hero {
          text-align: center;
          margin-bottom: 3rem;
        }
        .contact-hero h1 {
          font-size: 2.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
        }
        .contact-subtitle {
          font-size: 1.125rem;
          color: var(--neutral-500);
          max-width: 500px;
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2.5rem;
          align-items: start;
        }
        /* === İletişim Bilgi Kartları === */
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .contact-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          transition: all var(--transition-base);
        }
        .contact-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        .contact-card-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .contact-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--neutral-800);
          margin-bottom: 0.4rem;
        }
        .contact-card-text {
          font-size: 0.9rem;
          color: var(--neutral-500);
          margin-bottom: 0.5rem;
        }
        .contact-card-link {
          font-size: 0.95rem;
          color: var(--primary);
          font-weight: 600;
          word-break: break-all;
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .contact-card-link:hover {
          color: var(--primary-dark);
          text-decoration: underline;
        }
        .contact-info-note {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(236, 72, 153, 0.08));
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          border-left: 3px solid var(--primary);
        }
        .contact-info-note p {
          font-size: 0.9rem;
          color: var(--neutral-600);
          margin: 0;
        }
        /* === İletişim Formu === */
        .contact-form-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
        }
        .contact-form-card h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--neutral-800);
          margin-bottom: 1.75rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--neutral-700);
          margin-bottom: 0.4rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid var(--neutral-200);
          border-radius: var(--radius-lg);
          font-size: 0.95rem;
          font-family: inherit;
          background: rgba(255, 255, 255, 0.8);
          transition: all var(--transition-fast);
          color: var(--neutral-800);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
          background: white;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--neutral-400);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-submit-btn {
          width: 100%;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
        }
        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.35);
        }
        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        /* Spinner */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        /* Başarı mesajı */
        .contact-success {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          animation: fadeIn 0.3s ease;
        }
        .success-icon {
          color: var(--success);
          font-size: 1.25rem;
          flex-shrink: 0;
        }
        .contact-success p {
          color: #065f46;
          font-size: 0.9rem;
          margin: 0;
          font-weight: 500;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* === Responsive === */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-hero h1 {
            font-size: 2rem;
          }
          .contact-form-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </div>
  )
}
