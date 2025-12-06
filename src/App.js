import React, { useState } from "react";

const PHONE_DISPLAY = "07 45 18 65 68";
const PHONE_RAW = "0745186568";
const EMAIL = "contact@serrurier-urgence-idf.com";

function App() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const handleDevisSubmit = (e) => {
    e.preventDefault();
    const subject = "Demande de devis serrurerie";
    const body =
      `Prénom : ${prenom}\n` +
      `Nom : ${nom}\n` +
      `Téléphone : ${telephone}\n` +
      `Email : ${email}\n\n` +
      `Message :\n${message}\n`;

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
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

        a {
          color: inherit;
        }

        .page {
          min-height: 100vh;
        }

        /* BANNIÈRE HAUT */

        .top-banner {
          background: linear-gradient(to right, #e5d0ff, #fce7f3);
          text-align: center;
          padding: 6px 8px;
          font-size: 13px;
        }

        /* HEADER */

        .header {
          background-color: #000000;
          color: #f9fafb;
          padding: 12px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-logo {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #facc15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #111827;
        }

        .brand-name {
          font-weight: 700;
          font-size: 18px;
        }

        .brand-sub {
          font-size: 11px;
          color: #d1d5db;
        }

        .nav {
          display: flex;
          gap: 20px;
          font-size: 14px;
        }

        .nav a {
          color: #f9fafb;
          text-decoration: none;
          opacity: 0.8;
        }

        .nav a:hover {
          opacity: 1;
        }

        .header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
          font-size: 12px;
        }

        .header-phone {
          font-weight: 700;
          font-size: 14px;
        }

        .header-badge {
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 999px;
          background-color: #111827;
          border: 1px solid #374151;
        }

        /* HERO */

        .hero {
          position: relative;
          min-height: 420px;
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
          filter: brightness(0.55);
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top, rgba(0,0,0,0.35), transparent 55%);
        }

        .hero-overlay {
          position: relative;
          max-width: 900px;
          padding: 70px 16px 60px;
        }

        .hero-kicker {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.9;
        }

        .hero-title {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .hero-title span {
          color: #facc15;
        }

        .hero-line {
          width: 130px;
          height: 2px;
          background-color: #ffffff;
          margin: 0 auto 16px auto;
        }

        .hero-subtitle {
          font-size: 16px;
          max-width: 640px;
          margin: 0 auto 22px auto;
          opacity: 0.95;
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
          padding: 10px 22px;
          font-size: 14px;
          cursor: pointer;
        }

        .btn-secondary {
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background-color: rgba(0,0,0,0.35);
          color: #f9fafb;
          font-size: 14px;
          padding: 9px 18px;
          cursor: pointer;
        }

        .hero-meta {
          margin-top: 18px;
          font-size: 12px;
          opacity: 0.9;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        /* SECTIONS GÉNÉRALES */

        .section {
          padding: 60px 20px;
          background-color: #ffffff;
        }

        .section-alt {
          background-color: #f9fafb;
        }

        .section-narrow {
          max-width: 900px;
          margin: 0 auto;
        }

        .section-wide {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 26px;
          font-weight: 600;
          text-align: center;
          line-height: 1.4;
          margin-bottom: 16px;
        }

        .section-sub {
          font-size: 14px;
          color: #4b5563;
          text-align: center;
          max-width: 640px;
          margin: 0 auto 24px;
        }

        /* INTERVENTIONS */

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 20px;
        }

        .service-card {
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          padding: 16px 16px 14px;
          font-size: 14px;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .service-icon {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background-color: #111827;
          color: #f9fafb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .service-title {
          font-weight: 600;
        }

        .service-text {
          color: #4b5563;
          margin-bottom: 6px;
        }

        .service-tag {
          display: inline-block;
          margin-top: 4px;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          color: #6b7280;
        }

        /* TARIFS */

        .tarifs-table-wrapper {
          overflow-x: auto;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background-color: #ffffff;
        }

        .tarifs-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .tarifs-table thead {
          background-color: #f9fafb;
        }

        .tarifs-table th,
        .tarifs-table td {
          padding: 12px 14px;
        }

        .tarifs-table th {
          text-align: left;
          font-weight: 600;
        }

        .tarifs-table th:last-child,
        .tarifs-table td:last-child {
          text-align: right;
          white-space: nowrap;
        }

        .tarifs-table tbody tr:nth-child(even) td {
          background-color: #f9fafb;
        }

        .tarifs-note {
          font-size: 12px;
          color: #6b7280;
          margin-top: 10px;
          text-align: left;
        }

        .tarifs-cta {
          text-align: center;
          margin-top: 28px;
        }

        .tarifs-cta-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .tarifs-cta-text {
          color: #4b5563;
          margin-bottom: 14px;
          font-size: 14px;
        }

        .btn-cta-mail {
          display: inline-block;
          background-color: #f97316;
          color: #111827;
          padding: 11px 22px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 8px;
        }

        .tarifs-cta-phone {
          font-size: 13px;
          color: #4b5563;
        }

        /* BLOC 24/7 */

        .grid-247 {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 20px;
          align-items: center;
        }

        .card-247 {
          background-color: #ffffff;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          padding: 22px 18px;
        }

        .card-247-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .card-247-text {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 16px;
        }

        .img-247 {
          width: 100%;
          border-radius: 14px;
          object-fit: cover;
          height: 260px;
        }

        /* AVIS */

        .avis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }

        .avis-card {
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          padding: 12px 14px;
          font-size: 13px;
        }

        .avis-name {
          font-weight: 600;
          margin-bottom: 4px;
        }

        /* DEVIS SECTION (JUSTE SOUS HERO) */

        .devis-section {
          padding: 50px 20px;
          background-color: #f9fafb;
        }

        .devis-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 24px;
          align-items: flex-start;
        }

        .devis-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .devis-sub {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 12px;
        }

        .devis-form {
          background-color: #ffffff;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          padding: 18px 16px;
        }

        .devis-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 10px;
          font-size: 13px;
        }

        .devis-label {
          font-weight: 500;
        }

        .devis-input,
        .devis-textarea {
          border-radius: 8px;
          border: 1px solid #d1d5db;
          padding: 8px 10px;
          font-size: 14px;
        }

        .devis-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .btn-devis {
          margin-top: 6px;
          border-radius: 999px;
          border: none;
          background-color: #f97316;
          color: #111827;
          font-weight: 700;
          padding: 10px 18px;
          font-size: 14px;
          cursor: pointer;
        }

        .devis-side {
          font-size: 14px;
          color: #4b5563;
        }

        .devis-side h3 {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .devis-side ul {
          padding-left: 18px;
          margin: 8px 0 0;
        }

        .devis-side li {
          margin-bottom: 4px;
        }

        /* CONTACT BAS DE PAGE */

        .contact-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 20px;
          align-items: center;
        }

        .contact-text-main {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .contact-text-sub {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 10px;
        }

        .contact-details {
          font-size: 14px;
          color: #111827;
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

        /* FOOTER */

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

        @media (max-width: 900px) {
          .header {
            padding: 10px 16px;
          }
          .nav {
            display: none;
          }
          .hero-title {
            font-size: 32px;
          }
          .hero-subtitle {
            font-size: 14px;
          }
          .grid-247,
          .contact-grid,
          .devis-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page">
        {/* Bandeau haut */}
        <div className="top-banner">
          Serrurier urgence Paris &amp; Île-de-France • Devis rapide par téléphone ou par mail.
        </div>

        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <div className="brand-logo">🔐</div>
            <div>
              <div className="brand-name">BAH Débloque</div>
              <div className="brand-sub">Serrurier urgence · Paris &amp; IDF</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#hero">Accueil</a>
            <a href="#devis">Devis</a>
            <a href="#services">Interventions</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#avis">Avis</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-right">
            <div className="header-badge">Urgence 24h/24 – 7j/7</div>
            <div className="header-phone">{PHONE_DISPLAY}</div>
          </div>
        </header>

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-bg" />
          <div className="hero-gradient" />
          <div className="hero-overlay">
            <div className="hero-kicker">Serrurier urgence</div>
            <h1 className="hero-title">
              Porte bloquée ? <span>BAH Débloque</span> vient vous ouvrir.
            </h1>
            <div className="hero-line" />
            <p className="hero-subtitle">
              Porte claquée, clé cassée, serrure bloquée ou rideau métallique en panne :
              on intervient rapidement sur Paris et l&apos;Île-de-France pour vous remettre
              chez vous ou rouvrir votre commerce.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-main"
                onClick={() => (window.location.href = `tel:${PHONE_RAW}`)}
              >
                📞 Appeler le {PHONE_DISPLAY}
              </button>
              <button
                className="btn-secondary"
                onClick={() =>
                  document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                ✉️ Faire un devis en ligne
              </button>
            </div>
            <div className="hero-meta">
              <span>⏱ Arrivée moyenne : ~30 minutes</span>
              <span>💶 Prix annoncés avant déplacement</span>
              <span>📄 Facture possible pour l&apos;assurance</span>
            </div>
          </div>
        </section>

        {/* DEVIS – JUSTE SOUS LE HERO */}
        <section id="devis" className="devis-section">
          <div className="devis-grid">
            <form className="devis-form" onSubmit={handleDevisSubmit}>
              <div className="devis-title">Demande de devis rapide</div>
              <div className="devis-sub">
                Remplis ce formulaire et on te répond le plus vite possible avec une estimation.
              </div>

              <div className="devis-field">
                <label className="devis-label">Prénom</label>
                <input
                  className="devis-input"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </div>
              <div className="devis-field">
                <label className="devis-label">Nom</label>
                <input
                  className="devis-input"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>
              <div className="devis-field">
                <label className="devis-label">Téléphone</label>
                <input
                  className="devis-input"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                />
              </div>
              <div className="devis-field">
                <label className="devis-label">Adresse e-mail</label>
                <input
                  type="email"
                  className="devis-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="devis-field">
                <label className="devis-label">Message</label>
                <textarea
                  className="devis-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explique ton problème (porte claquée, clé cassée, type de porte, etc.)"
                  required
                />
              </div>
              <button type="submit" className="btn-devis">
                ✉️ Envoyer ma demande de devis
              </button>
            </form>

            <div className="devis-side">
              <h3>Pour un devis plus précis :</h3>
              <ul>
                <li>Indique le type de porte (simple, blindée, immeuble, local pro…)</li>
                <li>Explique ce qui s&apos;est passé (porte claquée, clé cassée, etc.)</li>
                <li>Tu peux joindre des photos dans ton mail si besoin</li>
                <li>Pense à donner la ville / le secteur pour le déplacement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INTERVENTIONS */}
        <section id="services" className="section">
          <div className="section-wide">
            <h2 className="section-title">Interventions en serrurerie</h2>
            <p className="section-sub">
              Exemple de situations dans lesquelles BAH Débloque intervient chaque jour
              sur Paris et l&apos;Île-de-France.
            </p>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🚪</div>
                  <div className="service-title">Porte claquée ou bloquée</div>
                </div>
                <p className="service-text">
                  Porte fermée avec les clés à l&apos;intérieur ou serrure bloquée.
                  Ouverture propre en privilégiant la solution la moins destructive.
                </p>
                <div className="service-tag">Ouverture de porte simple</div>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🔑</div>
                  <div className="service-title">Clé cassée ou perdue</div>
                </div>
                <p className="service-text">
                  Clé cassée dans le cylindre ou perte du trousseau. Extraction et
                  remplacement du cylindre si nécessaire.
                </p>
                <div className="service-tag">Cylindre européen, serrures courantes</div>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🛡️</div>
                  <div className="service-title">Après effraction</div>
                </div>
                <p className="service-text">
                  Intervention après tentative de cambriolage : mise en sécurité de la
                  porte et solutions pour renforcer la serrure.
                </p>
                <div className="service-tag">Sécurisation rapide</div>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🏢</div>
                  <div className="service-title">Immeubles & locaux pros</div>
                </div>
                <p className="service-text">
                  Portes de hall, bureaux, commerces, rideaux métalliques et locaux
                  techniques. Intervention rapide pour limiter l&apos;arrêt d&apos;activité.
                </p>
                <div className="service-tag">Paris &amp; Île-de-France</div>
              </div>
            </div>
          </div>
        </section>

        {/* TARIFS */}
        <section id="tarifs" className="section section-alt">
          <div className="section-narrow">
            <h2 className="section-title">
              Grille tarifaire (hors majoration soir / week-end)
            </h2>
            <p className="section-sub">
              Des prix clairs et transparents. Le montant exact est confirmé avant tout
              déplacement du serrurier.
            </p>

            <div className="tarifs-table-wrapper">
              <table className="tarifs-table">
                <thead>
                  <tr>
                    <th>Prestation</th>
                    <th>Prix à partir de</th>
                  </tr>
                </thead>
                <tbody>
  <tr>
    <td>Ouverture de porte simple claquée</td>
    <td>90 €</td>
  </tr>

  <tr>
    <td>Ouverture de porte fermée à clé</td>
    <td>120 €</td>
  </tr>

  <tr>
    <td>Ouverture de porte blindée</td>
    <td>150 €</td>
  </tr>

  <tr>
    <td>Remplacement de cylindre européen</td>
    <td>130 €</td>
  </tr>

  <tr>
    <td>Changement de serrure 1 point</td>
    <td>140 €</td>
  </tr>

  <tr>
    <td>Changement de serrure 3 points</td>
    <td>190 €</td>
  </tr>

  <tr>
    <td>Blindage de porte</td>
    <td>450 €</td>
  </tr>

  <tr>
    <td>Installation de porte blindée</td>
    <td>Sur devis</td>
  </tr>

  <tr>
    <td>Déblocage rideau métallique</td>
    <td>180 €</td>
  </tr>

  <tr>
    <td>Motorisation volet roulant</td>
    <td>250 €</td>
  </tr>

  <tr>
    <td>Installation contrôle d’accès</td>
    <td>Sur devis</td>
  </tr>
</tbody>

              </table>
            </div>

            <p className="tarifs-note">
              Les montants sont indicatifs et peuvent varier selon le type de porte, de
              serrure et la situation sur place. Une majoration s&apos;applique la nuit,
              les week-ends et jours fériés.
            </p>

            <div className="tarifs-cta">
              <h3 className="tarifs-cta-title">Vous voulez connaître le prix exact ?</h3>
              <p className="tarifs-cta-text">
                Envoyez quelques infos ou faites une demande de devis en haut de page,
                on vous répond avec une estimation claire.
              </p>
              <a
                href={`mailto:${EMAIL}?subject=Demande de devis serrurerie`}
                className="btn-cta-mail"
              >
                ✉️ Demander un devis par mail
              </a>
              <div className="tarifs-cta-phone">
                Ou par téléphone au <strong>{PHONE_DISPLAY}</strong>.
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 */}
        <section className="section">
          <div className="section-wide grid-247">
            <div className="card-247">
              <h3 className="card-247-title">Disponibilité 24h/24 et 7j/7</h3>
              <p className="card-247-text">
                Une urgence ne prévient pas. On intervient de jour comme de nuit,
                week-ends et jours fériés. Avant chaque déplacement, on te dit combien
                ça va coûter.
              </p>
              <button
                className="btn-main"
                onClick={() => (window.location.href = `tel:${PHONE_RAW}`)}
              >
                📞 Urgence serrurerie maintenant
              </button>
            </div>
            <img
  className="img-247"
  src="https://images.pexels.com/photos/7642004/pexels-photo-7642004.jpeg?auto=compress&cs=tinysrgb&w=1600"
  alt="Remise de clés - Service serrurier"
/>

          </div>
        </section>

        {/* AVIS */}
        <section id="avis" className="section">
          <div className="section-narrow">
            <h2 className="section-title">Avis clients</h2>
            <p className="section-sub">
              Quelques témoignages de personnes dépannées par BAH Débloque. Noms masqués
              pour respecter leur confidentialité.
            </p>

            <div className="avis-grid">
              <div className="avis-card">
                <div className="avis-name">Sarah B***** ★★★★★</div>
                <p>
                  Je suis rentrée du travail et j&apos;avais claqué la porte avec les
                  clés à l&apos;intérieur. Le serrurier est arrivé en moins de 30
                  minutes, a ouvert la porte rapidement et le prix correspondait à ce
                  qu&apos;on m&apos;avait annoncé au téléphone.
                </p>
              </div>
              <div className="avis-card">
                <div className="avis-name">Yassine K***** ★★★★☆</div>
                <p>
                  J&apos;ai perdu mes clés en soirée. J&apos;ai appelé BAH Débloque, on
                  m&apos;a expliqué clairement le tarif et le déroulement. Le
                  serrurier a changé le cylindre proprement. Je garde le numéro au cas
                  où.
                </p>
              </div>
              <div className="avis-card">
                <div className="avis-name">Nadia L***** ★★★★★</div>
                <p>
                  Mon rideau métallique est resté bloqué devant mon commerce. Ils sont
                  venus le matin même pour débloquer et vérifier le mécanisme. Ça m&apos;a
                  évité de fermer toute la journée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT BAS DE PAGE */}
        <section id="contact" className="section" style={{ backgroundColor: "#f4e9ff" }}>
          <div className="contact-grid">
            <div>
              <div className="contact-text-main">Besoin d&apos;un serrurier ?</div>
              <p className="contact-text-sub">
                Pour une urgence ou un devis, tu peux appeler directement ou nous écrire.
                On fait au mieux pour répondre rapidement.
              </p>
              <p className="contact-details">
                Email : <strong>{EMAIL}</strong>
                <br />
                Téléphone : <strong>{PHONE_DISPLAY}</strong>
                <br />
                Zone d&apos;intervention : Paris et Île-de-France.
              </p>
            </div>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Pour un vrai devis, utilise plutôt le formulaire en haut ou envoie un mail direct 🙂"
                );
              }}
            >
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Être recontacté
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} BAH Débloque – Serrurier Paris &amp; Île-de-France
          </span>
          <span>{EMAIL}</span>
        </footer>
      </div>
    </>
  );
}

export default App;
