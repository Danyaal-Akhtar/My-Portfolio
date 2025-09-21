import React from "react";
import Navbar from "./Navbar";
import dev from "/dev.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Danyaal from "/Danyaal.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div
        className="
          md:h-[550px] 
          h-[500px] 
          w-[450px] 
          bg-gradient-to-r 
          from-[#6d2897] 
          via-[#86cf5f] 
          to-[#bb61c5] 
          transform 
          rotate-45 
          z-0 
          absolute 
          right-2 
          top-28 
          rounded-3xl
        "
      ></div>

      <Navbar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12" />

          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Danyaal AKHTAR
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#c744ec] mb-2">
              Étudiant en 3ème année de BUT Informatique
            </h2>
          </header>

          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            Bienvenue sur mon portfolio. Curieux, passionné et déterminé à
            devenir développeur fullstack, je me forme chaque jour pour
            transformer des idées en applications complètes. "L'informatique est
            un champ où la curiosité est plus importante que la connaissance." —
            Tim Berners-Lee
          </p>

          {/* Icônes GitHub / LinkedIn */}
          <div className="flex justify-start space-x-4 text-white text-2xl mb-6">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Danyaal-Akhtar",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/danyaalakhtar",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-transform transform hover:scale-110"
                aria-label={item.link}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Bouton Télécharger le CV */}
          <a href={Danyaal} download>
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] hover:bg-[#801b9c] rounded-full text-lg">
              Télécharger le CV
            </button>
          </a>
        </section>

        {/* Image développeur */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-8"
        >
          <img
            src={dev}
            alt="Dev Image"
            className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
}
