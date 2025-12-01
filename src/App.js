import React from "react";

const PHONE_DISPLAY = "07 45 18 65 68";
const PHONE_RAW = "0745186568";

function App() {
  return (
    <>
      {/* CSS dans le composant pour faire simple */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #111827;
          background-color: #f3f4f6;
        }

        .page {
          min-height: 100vh;
        }

        /* Barre tout en haut */
        .top-banner {
          background-color: #e5d0ff;
          text-align: center;
          padding: 6px 8px;
          font-size: 13px;
        }

        /* HEADER */
        .header {
          background-color: #000000;
          color: #f9fafb;
          padding: 10px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-left {
          font-weight: 700;
          font-size: 18px;
        }

        .nav {
          display: flex;
          gap: 20px;
          font-size: 14px;
        }

        .nav a {
          color: #f9fafb;
          text-decoration: none;
          opacity: 0.85;
        }

        .nav a:hover {
          opacity: 1;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
        }

        /* HERO AVEC IMAGE DE FOND */
        .hero {
          position: relative;
          min-height: 380px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url("https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1600");
          background-size: cover;
          background-position: center;
          filter: brightness(0.6);
        }

        .hero-overlay {
          position: relative;
          max-width: 900px;
          padding: 60px 16px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .hero-subtitle {
          font-size: 16px;
          margin-bottom: 20px;
        }

        .hero-line {
          width: 120px;
          height: 2px;
          background-color: #ffffff;
          margin: 0 auto 18px auto;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .btn-main {
          border-radius: 999px;
          border: none;
          background-color: #f97316;
          color: #111827;
          font-weight: 700;
          padding: 10px 20px;
          font-size: 14px;
          cursor: pointer;
        }

        .btn-secondary {
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background-color: rgba(0,0,0,0.4);
          color: #f9fafb;
          font-size: 14px;
          padding: 9px 18px;
          cursor: pointer;
        }

        /* SECTION TEXTE (comme sur ton screen “Notre équipe…”) */
        .section-text {
          background-color: #ffffff;
          padding: 60px 16px;
        }

        .section-text-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .section-kicker {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #6b7280;
          margin-bottom: 12px;
        }

        .section-title-big {
          font-size: 28px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .section-link {
          font-size: 14px;
          color: #111827;
          text-decoration: underline;
          cursor: pointer;
        }

        /* ⬇️ ICI : SECTION QUI REMPLACE “Produits en vedette” */
        .section-services {
          background-color: #ffffff;
          padding: 40px 24px 50px;
        }

        .section-services-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-services-title {
          font-size: 26px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 24px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .service-card {
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          padding: 16px;
          text-align: left;
          font-size: 14px;
        }

        .service-icon {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .service-title {
          font-weight: 600;
          margin-bottom: 6px;
        }

        .service-text {
          color: #4b5563;
          margin-bottom: 6px;
        }

        .service-tag {
          display: inline-block;
          margin-top: 2px;
          font-size: 11px;
          padding: 2px 7px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          color: #6b7280;
        }

        /* SECTION 24/7 avec image à droite */
        .section-247 {
          background-color: #f3f4f6;
          padding: 40px 24px;
        }

        .section-247-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 18px;
          align-items: center;
        }

        .section-247-card {
          background-color: #f9fafb;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          padding: 22px 18px;
        }

        .section-247-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .section-247-text {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 14px;
        }

        .section-247-img {
          width: 100%;
          border-radius: 12px;
          object-fit: cover;
          height: 260px;
        }

        /* AVIS */
        .section-avis {
          background-color: #ffffff;
          padding: 40px 24px 50px;
        }

        .section-avis-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .avis-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .avis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }

        .avis-card {
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          padding: 12px;
          font-size: 13px;
        }

        .avis-name {
          font-weight: 600;
          margin-bottom: 4px;
        }

        /* BAS DE PAGE / INSCRIPTION */
        .section-newsletter {
          background-color: #f4e9ff;
          padding: 40px 24px;
        }

        .section-newsletter-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          gap: 18px;
          align-items: center;
        }

        .newsletter-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .newsletter-text {
          font-size: 14px;
          color: #4b5563;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .newsletter-input {
          flex: 1 1 160px;
          padding: 10px 12px;
          border-radius: 999px;
          border: 1px solid #d1d5db;
          font-size: 14px;
        }

        .newsletter-btn {
          border-radius: 999px;
          border: none;
          background-color: #ec4899;
          color: white;
          font-weight: 600;
          padding: 10px 18px;
          font-size: 14px;
          cursor: pointer;
        }

        .footer {
          padding: 18px 24px;
          font-size: 11px;
          color: #6b7280;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          border-top: 1px solid #e5e7eb;
          background-color: #ffffff;
        }

        @media (max-width: 768px) {
          .header {
            padding: 10px 16px;
          }
          .hero-title {
            font-size: 34px;
          }
          .section-247-inner,
          .section-newsletter-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page">
        {/* Bandeau haut */}
        <div className="top-banner">
          Découvrez nos interventions rapides en serrurerie sur Paris et Île-de-France.
        </div>

        {/* HEADER */}
        <header className="header">
          <div className="header-left">BAH Débloque</div>
          <nav className="nav">
            <a href="#hero">Accueil</a>
            <a href="#services">Interventions</a>
            <a href="#avis">Avis</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-right">
            <span>Urgence 24/7</span>
            <strong>{PHONE_DISPLAY}</strong>
          </div>
        </header>

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay">
            <h1 className="hero-title">Sécurité maximisée</h1>
            <div className="hero-line" />
            <p className="hero-subtitle">
              Protégez ce qui compte le plus avec des interventions rapides et propres
              de BAH Débloque, votre serrurier de confiance sur Paris et ses alentours.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-main"
                onClick={() => (window.location.href = `tel:${PHONE_RAW}`)}
              >
                📞 Appeler le {PHONE_DISPLAY}
              </button>
              <button className="btn-secondary">
                En savoir plus sur nos services
              </button>
            </div>
          </div>
        </section>

        {/* TEXTE STYLE “Notre boutique / Notre équipe…” */}
        <section className="section-text">
          <div className="section-text-inner">
            <div className="section-kicker">BAH Débloque</div>
            <h2 className="section-title-big">
              Notre équipe de serruriers expérimentés est dédiée à votre sécurité et à
              votre tranquillité d&apos;esprit, en offrant des interventions fiables et
              rapides sur Paris et toute l&apos;Île-de-France.
            </h2>
            <div
              className="section-link"
              onClick={() => document.getElementById("services").scrollIntoView()}
            >
              Voir nos interventions principales →
            </div>
          </div>
        </section>

        {/* 🎯 ICI : CE QUI REMPLACE “PRODUITS EN VEDETTE” */}
        <section id="services" className="section-services">
          <div className="section-services-inner">
            <h2 className="section-services-title">Interventions en serrurerie</h2>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🚪</div>
                <div className="service-title">Porte claquée / bloquée</div>
                <div className="service-text">
                  Vous avez fermé la porte derrière vous et les clés sont restées à
                  l&apos;intérieur ? Nous ouvrons proprement la porte, sans casse
                  inutile.
                </div>
                <div className="service-tag">Ouverture de porte simple</div>
              </div>

              <div className="service-card">
                <div className="service-icon">🔑</div>
                <div className="service-title">Clé cassée ou perdue</div>
                <div className="service-text">
                  Clé cassée dans la serrure ou impossible de remettre la main dessus ?
                  Nous intervenons pour débloquer et remplacer si nécessaire.
                </div>
                <div className="service-tag">Extraction & remplacement</div>
              </div>

              <div className="service-card">
                <div className="service-icon">🛡️</div>
                <div className="service-title">Après effraction</div>
                <div className="service-text">
                  Suite à une tentative de cambriolage, nous sécurisons rapidement
                  votre porte et pouvons poser une serrure plus résistante.
                </div>
                <div className="service-tag">Sécurisation urgente</div>
              </div>

              <div className="service-card">
                <div className="service-icon">🏢</div>
                <div className="service-title">Immeubles & locaux pros</div>
                <div className="service-text">
                  Intervention sur portes de hall, bureaux, commerces et locaux
                  techniques pour éviter tout blocage de votre activité.
                </div>
                <div className="service-tag">Paris & Île-de-France</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DISPONIBILITÉ 24/7 */}
        <section className="section-247">
          <div className="section-247-inner">
            <div className="section-247-card">
              <h3 className="section-247-title">Disponibilité 24/7</h3>
              <p className="section-247-text">
                Nous intervenons à tout moment pour vos besoins en serrurerie : jour,
                nuit, week-end et jours fériés. Le tarif est toujours annoncé avant
                déplacement pour éviter les mauvaises surprises.
              </p>
              <button
                className="btn-main"
                onClick={() => (window.location.href = `tel:${PHONE_RAW}`)}
              >
                📞 Urgence maintenant
              </button>
            </div>
            <img
              className="section-247-img"
              src="https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Serrurier en intervention"
            />
          </div>
        </section>

        {/* AVIS */}
        <section id="avis" className="section-avis">
          <div className="section-avis-inner">
            <h2 className="avis-title">Avis clients</h2>
            <div className="avis-grid">
              <div className="avis-card">
                <div className="avis-name">Sarah B***** ★★★★★</div>
                <p>
                  Porte claquée en rentrant chez elle, intervention rapide et prix
                  conforme à ce qui avait été annoncé au téléphone. Elle recommande.
                </p>
              </div>
              <div className="avis-card">
                <div className="avis-name">Yassine K***** ★★★★☆</div>
                <p>
                  Changement de serrure après perte de clés. Travail propre, explications
                  claires, il garde le numéro de BAH Débloque.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER / BAS DE PAGE STYLE SHOP */}
        <section id="contact" className="section-newsletter">
          <div className="section-newsletter-inner">
            <div>
              <h3 className="newsletter-title">Inscrivez-vous maintenant</h3>
              <p className="newsletter-text">
                Recevez nos conseils pour mieux sécuriser votre logement ou votre
                commerce, et être informé de nos offres en serrurerie.
              </p>
            </div>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formulaire fictif pour l'instant 🙂");
              }}
            >
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                S&apos;inscrire
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} BAH Débloque – Serrurier Paris & Île-de-France
          </span>
          <span>Conditions générales et politiques · Mentions légales</span>
        </footer>
      </div>
    </>
  );
}

export default App;
