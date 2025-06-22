import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dev from "/dev.jpg";
import img_about2 from "/img_about2.jpg";

const MoreCards = ({ onClose }) => {
  const cards = [
    {
      title: "Mes Réalisations marquantes",
      content: (
        <>
          <p className="mb-4 text-justify">
            Au fil de mon parcours, plusieurs expériences m’ont véritablement
            marqué et sont devenues des sources de fierté. J’ai notamment eu la
            chance de participer à des projets d’équipe complexes, comme le
            développement d’une application web permettant de gérer une vaste
            collection de jeux de société.
          </p>
          <p className="mb-4 text-justify">
            Ce projet m’a offert l’opportunité d’évoluer sur le plan technique
            tout en améliorant mes compétences en collaboration. J’aime aussi
            apprendre par moi-même, ce qui s’est traduit par la création de mon
            tout premier jeu vidéo : une version de Pong codée en Python avec la
            bibliothèque Pygame.
          </p>
          <p className="mb-4 text-justify">
            Cette réalisation a éveillé en moi le désir d’approfondir mes
            compétences et d’en acquérir de nouvelles. Je porte également une
            grande attention à la qualité de mon travail, tant sur le plan de la
            programmation que de la conception, en m’efforçant toujours de
            concevoir des solutions robustes et bien pensées.
          </p>
          <p className="text-justify">
            Ce qui me motive profondément, c’est ma persévérance et mon
            enthousiasme pour le développement. J’aime relever des défis et
            apprendre un peu plus chaque jour.
          </p>
        </>
      ),
    },
    {
      title: "Veille technologique",
      content: (
        <p className="text-justify">
          Je m’engage activement dans une veille technologique constante afin de
          rester informé des dernières avancées et outils du secteur. Récemment,
          j’ai découvert Adobe Aero, une plateforme innovante permettant de
          concevoir des expériences en réalité augmentée sans écrire une seule
          ligne de code. Cette découverte m’a ouvert de nouvelles perspectives
          sur les possibilités offertes par cette technologie immersive,
          notamment pour la création d’applications interactives. Cette démarche
          me permet de nourrir ma curiosité, d’enrichir mes compétences et
          d’intégrer des solutions modernes dans mes projets. C’est pour moi une
          condition essentielle pour évoluer dans un domaine aussi dynamique que
          le développement logiciel.
        </p>
      ),
    },
    {
      title: "Exposition IA au Jeu de Paume",
      content: (
        <>
          <p className="mb-4 text-justify">
            J’ai eu l’opportunité de visiter une exposition au Jeu de Paume
            consacrée à l’intelligence artificielle et à son impact sur l’art
            contemporain. Cette expérience m’a permis de découvrir comment des
            artistes utilisent les algorithmes et les technologies d’IA pour
            repousser les frontières de la création artistique.
          </p>
          <p className="mb-4 text-justify">
            Loin de se limiter à l’esthétique, cette exposition m’a également
            sensibilisé aux questions éthiques et sociétales que soulève l’IA.
            J’ai ainsi pu mieux comprendre les enjeux liés à l’intégration de
            ces technologies dans divers domaines, y compris le développement
            logiciel.
          </p>
          <p className="text-justify">
            Cette visite m’a donné envie d’approfondir mes connaissances en
            intelligence artificielle, que ce soit pour ses applications
            artistiques ou techniques.
          </p>
        </>
      ),
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-8"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-lg max-w-[1300px] w-full p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
        data-aos-duration="400"
      >
        <div className="absolute z-0 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 top-5 left-10"></div>

        <button
          className="absolute top-3 right-4 text-xl text-gray-400 hover:text-white z-10"
          onClick={onClose}
          aria-label="Fermer"
        >
          ✕
        </button>

        {cards.map((card, idx) => (
          <article
            key={idx}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              {card.title}
            </h3>
            <div className="text-gray-300 text-sm overflow-auto text-justify">
              {card.content}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 left-1/2 transform -translate-x-1/2"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        <figure
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 top-2 md:top-10 rounded-full"></div>

          <img
            src={dev}
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />

          <img
            src={img_about2}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg"
          />

          <img
            src={dev}
            alt="about picture"
            className="absolute bottom-5 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              À propos
            </h1>
          </header>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed text-justify">
            Bonjour, je suis Danyaal AKHTAR, étudiant en 2ème année de BUT
            Informatique à l’Université Sorbonne Paris Nord. Passionné par
            l’informatique, je suis particulièrement attiré par la programmation
            et le développement de logiciels. J’aime explorer de nouvelles
            technologies et relever des défis. Mon objectif est de construire
            une carrière dans un domaine où la programmation occupe une place
            centrale. Pour cela, je me concentre sur l’acquisition de
            compétences solides en code, à travers mes cours, des projets
            personnels et des expériences pratiques qui me permettent
            d’appliquer concrètement mes connaissances.
          </p>

          <footer>
            <button
              onClick={() => setShowMore(true)}
              className="inline-flex text-white border-2 border-white py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg transition duration-300"
            >
              En savoir plus
            </button>
          </footer>
        </article>
      </div>

      {showMore && <MoreCards onClose={() => setShowMore(false)} />}
    </section>
  );
}
