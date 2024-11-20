'use client';
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* En-tête avec navigation */}
      <header className="fixed top-0 w-full bg-green-800 text-white shadow-lg z-10">
        <nav className="flex justify-between items-center px-4 sm:px-6 py-3">
          <div className="text-lg font-bold">Ecology House</div>
          <ul className="hidden sm:flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-green-300 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-300 transition">
                À propos
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-green-300 transition">
                Galerie
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Section Hero */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-screen bg-green-200 text-center px-4 sm:px-6 pt-20"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-green-800 mb-6">
          Bienvenue chez Ecology House
        </h1>
        <p className="text-sm sm:text-lg mb-8 max-w-3xl">
          Nous offrons des solutions écologiques pour un avenir durable. Ensemble, construisons un monde plus vert et responsable.
        </p>
        <button
  className="px-6 sm:px-8 py-3 sm:py-4 bg-green-700 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition"
  onClick={() => window.open("/ecology_house.apk", "_blank")}
>
  Télécharger l&apos;application
</button>

          
        
      </section>

      {/* Section À propos */}
      <section id="about" className="py-12 sm:py-16 bg-white text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">
          À propos de nous
        </h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-lg leading-relaxed">
          Ecology House est une entreprise pionnière dans le domaine des solutions écologiques. 
          Notre mission est de promouvoir la durabilité grâce à des initiatives innovantes 
          qui préservent les ressources naturelles et favorisent une meilleure qualité de vie.
        </p>
      </section>

      {/* Section Services */}
      <section id="services" className="py-12 sm:py-16 bg-gray-200 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-3">
              Conseils en durabilité
            </h3>
            <p className="text-sm sm:text-base">
              Nous aidons les entreprises et particuliers à adopter des pratiques écologiques pour un avenir durable.
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-3">
              Produits écologiques
            </h3>
            <p className="text-sm sm:text-base">
              Découvrez nos solutions innovantes respectueuses de l’environnement, adaptées à vos besoins.
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-3">
              Formations & ateliers
            </h3>
            <p className="text-sm sm:text-base">
              Participez à nos ateliers pour apprendre à adopter un mode de vie écologique.
            </p>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="gallery" className="py-12 sm:py-16 bg-white text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">
          Galerie
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Image 1"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Image 2"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Image 3"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Image 4"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-12 sm:py-16 bg-gray-200 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">
          Contactez-nous
        </h2>
        <p className="text-sm sm:text-base mb-4">
          Nous sommes là pour répondre à toutes vos questions. N&apos;hésitez pas à nous contacter !
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
          />
          <textarea
            placeholder="Votre message"
            className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-6 bg-green-800 text-center text-white">
        &copy; {new Date().getFullYear()} Ecology House. Tous droits réservés.
      </footer>
    </div>
  );
}
