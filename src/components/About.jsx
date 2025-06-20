import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dev from "/dev.jpg";
import img_about2 from "/img_about2.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
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
            alt="about picture "
            className="absolute bottom-5 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              À propos
            </h1>
          </header>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
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
            <button className="inline-flex text-white border-2 border-white py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg transition duration-300">
              En savoir plus
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
