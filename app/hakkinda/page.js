'use client'
export default function Hakkinda() {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <div className="about-hero-badge">Hakkımızda</div>
          <h1>Kendinizi Keşfetmenin <br />En Bilimsel Yolu</h1>
          <p className="about-hero-text">
            Kişilik Testi platformu olarak, bireylerin kendilerini daha iyi tanımalarına 
            yardımcı olmak için bilimsel temelli kişilik testleri sunuyoruz. Her testimiz, 
            psikoloji alanındaki güncel araştırmalara dayanmaktadır.
          </p>
        </section>
        <section className="about-mission-grid">
          <div className="about-mission-card">
            <div className="about-mission-icon mission-icon-purple">💜</div>
            <h2>Misyonumuz</h2>
            <p>
              İnsanların kişilik özelliklerini, güçlü yanlarını ve gelişim alanlarını 
              keşfetmelerine yardımcı olacak erişilebilir, güvenilir ve bilimsel 
              araçlar sunmak.
            </p>
          </div>
          <div className="about-mission-card">
            <div className="about-mission-icon mission-icon-pink">📈</div>
            <h2>Vizyonumuz</h2>
            <p>
              Herkesin kendini tanıma yolculuğunda güvenle başvurabileceği, 
              Türkiye&#39;nin önde gelen kişilik analizi platformu olmak.
            </p>
          </div>
        </section>
        <section className="about-features">
          <h2 className="about-section-title">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="about-features-grid">
            <div className="about-feature-card">
              <div className="about-feature-icon">🔬</div>
              <h3>Bilimsel Temel</h3>
              <p>
                Tüm testlerimiz, MBTI, Big Five gibi uluslararası kabul görmüş 
                psikolojik modellere dayanır.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="about-feature-icon">🛡️</div>
              <h3>Gizlilik &amp; Güvenlik</h3>
              <p>
                Test sonuçlarınız tamamen gizli tutulur. Verileriniz üçüncü 
                taraflarla asla paylaşılmaz.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="about-feature-icon">👥</div>
              <h3>Herkes İçin Erişilebilir</h3>
              <p>
                Platformumuz tamamen ücretsizdir. Herkes kolayca 
                testlere katılabilir ve sonuçlarını görüntüleyebilir.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="about-feature-icon">🧠</div>
              <h3>Detaylı Analizler</h3>
              <p>
                Her test sonunda kişilik profilinizi detaylı bir şekilde 
                açıklayan kapsamlı raporlar sunuyoruz.
              </p>
            </div>
          </div>
        </section>
        <section className="about-disclaimer">
          <div className="about-disclaimer-card">
            <h3>⚠️ Önemli Not</h3>
            <p>
              Sitemizde sunulan kişilik testleri, bilgilendirme ve kişisel farkındalık amacı taşımaktadır. 
              Bu testler, profesyonel psikolojik değerlendirme veya klinik tanı yerine geçmez. 
              Psikolojik destek ihtiyacınız varsa, lütfen bir uzmana başvurunuz.
            </p>
          </div>
        </section>
      </div>
      <style jsx>{`
        .about-page {
          padding: 3rem 0 5rem;
          min-height: 80vh;
        }
        .about-hero {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .about-hero-badge {
          display: inline-block;
          padding: 0.4rem 1.25rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(236, 72, 153, 0.12));
          color: var(--primary);
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .about-hero h1 {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.15;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.25rem;
        }
        .about-hero-text {
          font-size: 1.1rem;
          color: var(--neutral-500);
          line-height: 1.75;
          margin: 0;
        }
        .about-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .about-mission-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--radius-xl);
          padding: 2.25rem;
          transition: all var(--transition-base);
        }
        .about-mission-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .about-mission-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .about-mission-card h2 {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--neutral-800);
          margin-bottom: 0.75rem;
        }
        .about-mission-card p {
          font-size: 0.95rem;
          color: var(--neutral-600);
          line-height: 1.7;
          margin: 0;
        }
        .about-features {
          margin-bottom: 4rem;
        }
        .about-section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: var(--neutral-800);
          margin-bottom: 2.5rem;
        }
        .about-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .about-feature-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: var(--radius-xl);
          padding: 2rem;
          transition: all var(--transition-base);
        }
        .about-feature-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
          background: rgba(255, 255, 255, 0.8);
        }
        .about-feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .about-feature-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--neutral-800);
          margin-bottom: 0.5rem;
        }
        .about-feature-card p {
          font-size: 0.9rem;
          color: var(--neutral-500);
          line-height: 1.65;
          margin: 0;
        }
        .about-disclaimer {
          max-width: 750px;
          margin: 0 auto;
        }
        .about-disclaimer-card {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.03));
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-left: 4px solid var(--warning);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1.75rem;
        }
        .about-disclaimer-card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--neutral-800);
          margin-bottom: 0.6rem;
        }
        .about-disclaimer-card p {
          font-size: 0.9rem;
          color: var(--neutral-600);
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2rem;
          }
          .about-mission-grid {
            grid-template-columns: 1fr;
          }
          .about-features-grid {
            grid-template-columns: 1fr;
          }
          .about-section-title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  )
}
