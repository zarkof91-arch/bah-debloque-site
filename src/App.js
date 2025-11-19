import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="bg-[#0b3fb3] text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">BAH Débloque</div>
              <div className="text-xs text-blue-100">Serrurier professionnel</div>
            </div>
          </div>

          <a
            href="tel:0614795157"
            className="hidden sm:inline-flex items-center gap-2 bg-[#ff6a00] hover:bg-[#ff7f24] text-white font-semibold px-4 py-2 rounded-full text-sm transition"
          >
            📞 Urgence 24/7
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#0b3fb3] text-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <p className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-6">
            ⏱️ Intervention rapide sous 40 minutes
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Votre serrurier de confiance
            <br />
            <span className="text-[#ffb347]">24h/24 - 7j/7</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-blue-100 mb-8">
            Porte claquée ? Serrure bloquée ? Nous intervenons rapidement à Paris et dans
            toutes les régions alentours pour tous vos dépannages et installations.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="tel:0614795157"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ff6a00] hover:bg-[#ff7f24] text-white font-semibold text-sm transition"
            >
              📞 Appeler maintenant
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white hover:text-[#0b3fb3] transition"
            >
              Demander un devis
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <span>🛡️</span>
              <span>Serrurier assuré</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>+500 interventions</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💶</span>
              <span>Devis gratuit</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Nos services
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10">
            Des solutions pour tous vos besoins
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Carte 1 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="font-semibold mb-2">Dépannage d&apos;urgence 24/7</h3>
              <p className="text-sm text-slate-600 mb-4">
                Intervention rapide en cas de porte claquée, serrure bloquée ou clé cassée.
                Disponible jour et nuit.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✅ Intervention en moins de 40 min</li>
                <li>✅ Service 7j/7</li>
                <li>✅ Devis gratuit</li>
              </ul>
            </div>

            {/* Carte 2 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-semibold mb-2">Changement de serrures</h3>
              <p className="text-sm text-slate-600 mb-4">
                Installation et remplacement de tous types de serrures pour portes, fenêtres et portails.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✅ Serrures haute sécurité</li>
                <li>✅ Serrures certifiées A2P</li>
                <li>✅ Garantie 2 ans</li>
              </ul>
            </div>

            {/* Carte 3 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🔑</div>
              <h3 className="font-semibold mb-2">Reproduction de clés</h3>
              <p className="text-sm text-slate-600 mb-4">
                Duplication rapide de clés classiques et sécurisées avec précision professionnelle.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✅ Tous types de clés</li>
                <li>✅ Service rapide</li>
                <li>✅ Prix compétitifs</li>
              </ul>
            </div>

            {/* Carte 4 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold mb-2">Installation sécurité</h3>
              <p className="text-sm text-slate-600 mb-4">
                Pose de systèmes de sécurité avancés : portes blindées, cylindres anti-effraction.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✅ Conseil personnalisé</li>
                <li>✅ Matériel certifié</li>
                <li>✅ Installation professionnelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Pourquoi nous choisir
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10">
            Votre tranquillité, notre priorité
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div>
              <h3 className="font-semibold mb-2">Rapidité d&apos;intervention</h3>
              <p>
                Nous nous engageons à intervenir en moins de 40 minutes à Paris et dans les
                régions proches.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Garantie qualité</h3>
              <p>
                Matériel certifié, travail soigné et garantie de 2 ans sur toutes nos prestations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tarifs transparents</h3>
              <p>
                Devis gratuit et détaillé avant chaque intervention. Pas de surprise sur la facture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Zones d&apos;intervention</h2>
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
            <div className="text-sm text-slate-700 space-y-2">
              <p>
                Nous intervenons rapidement à Paris et dans toutes les régions alentours pour
                tous vos besoins en serrurerie.
              </p>
              <ul className="space-y-1 mt-3">
                <li>🏙️ Paris et ses alentours</li>
                <li>🗺️ Île-de-France</li>
                <li>🚐 Toutes régions sur demande</li>
              </ul>
            </div>

            <div className="bg-[#0b3fb3] text-white rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">Intervention d&apos;urgence</h3>
              <p className="text-sm text-blue-100 mb-4">Appelez-nous</p>
              <p className="text-2xl font-bold mb-1">06 14 79 51 57</p>
              <p className="text-sm text-blue-100 mb-6">Disponibilité 24h/24 - 7j/7</p>
              <a
                href="tel:0614795157"
                className="inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#ff6a00] hover:bg-[#ff7f24] text-white font-semibold text-sm transition"
              >
                📞 Appel d&apos;urgence
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Témoignages</h2>
          <p className="text-center text-sm text-slate-500 mb-10">
            Ils nous font confiance
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <div className="font-semibold mb-1">Marie Dubois</div>
              <div className="text-xs text-slate-500 mb-3">Paris 15ème</div>
              <p className="text-slate-700 text-sm">
                &quot;Service exceptionnel ! Intervention rapide à 23h pour une porte claquée. Très
                professionnel et prix honnête.&quot;
              </p>
              <p className="mt-3 text-xs text-slate-500">Il y a 2 semaines</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <div className="font-semibold mb-1">Thomas Bernard</div>
              <div className="text-xs text-slate-500 mb-3">Montreuil</div>
              <p className="text-slate-700 text-sm">
                &quot;Travail soigné pour le changement de ma serrure. Je recommande sans
                hésitation !&quot;
              </p>
              <p className="mt-3 text-xs text-slate-500">Il y a 1 mois</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <div className="font-semibold mb-1">Sophie Martin</div>
              <div className="text-xs text-slate-500 mb-3">Paris 11ème</div>
              <p className="text-slate-700 text-sm">
                &quot;Serrurier de confiance, à l&apos;écoute et efficace. Merci pour votre
                professionnalisme.&quot;
              </p>
              <p className="mt-3 text-xs text-slate-500">Il y a 3 semaines</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Contact</h2>
          <p className="text-center text-sm text-slate-500 mb-8">
            Demandez votre devis gratuit
          </p>

          <form className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Nom complet *
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0b3fb3]"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0b3fb3]"
                  placeholder="06..."
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Email *
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0b3fb3]"
                placeholder="vous@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Message *
              </label>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0b3fb3]"
                placeholder="Décrivez votre besoin..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ff6a00] hover:bg-[#ff7f24] text-white font-semibold text-sm transition"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b3fb3] text-blue-100 text-xs py-4 mt-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span>© {new Date().getFullYear()} BAH Débloque. Tous droits réservés.</span>
          <span>Intervention serrurerie 24h/24 - 7j/7</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
