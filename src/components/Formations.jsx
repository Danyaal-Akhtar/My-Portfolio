import React, { useEffect } from "react";
import AOS from "aos";
import iut from "/iut.jpg";
import lycee from "/lycee.jpg";

import "aos/dist/aos.css";

const formations = [
  {
    id: 1,
    degree: "BUT Informatique",
    schoolName: "Université Sorbonne Paris Nord, IUT de Villetaneuse",
    date: "Septembre 2023 - en cours",
    mention: "En cours",
    img: iut,
    desc: "Je poursuis un BUT en informatique, une formation qui me permet de développer des compétences solides en programmation, algorithmique, ainsi qu’en conception de systèmes et d'applications logiciels.",
  },
  {
    id: 2,
    degree: "BAC STI2D",
    schoolName: "Lycée Robert Schuman, Dugny",
    date: "Septembre 2021 - Juin 2023",
    mention: "Admis avec Mention Bien",
    img: lycee,
    desc: "J’ai suivi un Bac STI2D, spécialité Sciences et Technologies de l’Industrie et du Développement Durable, avec l’option Systèmes d’Information et Numérique. Cette formation m’a permis d’acquérir des compétences solides en informatique, électronique, et systèmes numériques, ainsi qu’une bonne compréhension des technologies industrielles.",
  },
];

const Formation = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section
      id="formations"
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-white px-6 sm:px-10 py-24 font-sans"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#6d2897] via-[#6c95f5] to-[#bb61c5] rounded-full blur-3xl opacity-40 -z-10 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-[#cd3cf5] via-[#801b9c] to-[#6d2897] rounded-full blur-3xl opacity-50 -z-10 animate-blob animation-delay-2000"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold tracking-wide">FORMATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold max-w-xl mx-auto">
          Parcours d’apprentissage et diplômes qui ont renforcé mes compétences
          et contribué à mon évolution professionnelle.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full opacity-20"></div>

        {formations.map((formation, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={formation.id}
              data-aos={isLeft ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
              className={`flex flex-col sm:flex-row items-center mb-20 relative ${
                isLeft ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* Timeline circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 border-4 border-purple-600 w-14 h-14 rounded-full flex justify-center items-center z-20 shadow-lg">
                <img
                  src={formation.img}
                  alt={formation.degree}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Formation Card */}
              <div
                className={`bg-gray-900 bg-opacity-40 backdrop-blur-md border border-white rounded-2xl p-6 shadow-lg w-full sm:max-w-md transform transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "sm:ml-20 text-left" : "sm:mr-20 text-left"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden border border-purple-600">
                    <img
                      src={formation.img}
                      alt={formation.degree}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mx-auto text-left w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                      {formation.degree}
                    </h3>
                    <h4 className="text-sm sm:text-md text-gray-300">
                      {formation.schoolName}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {formation.date}
                    </p>
                    <p className="text-xs text-purple-300">
                      {formation.mention}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-300">{formation.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Formation;
