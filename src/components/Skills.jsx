import React from "react";
import dev from "/dev.jpg";
import python from "/python.png";
import java from "/java.png";
import html from "/html.png";
import css from "/css.png";
import javascript from "/javascript.png";
import react from "/react.png";
import php from "/php.svg";
import sql from "/sql.png";
import github from "/github.png";
import vscode from "/vscode.png";
import intellij from "/intellij.svg";
import androidstudio from "/androidstudio.png";

const skillsData = [
  {
    id: 1,
    image: python,
    title: "Python",
    description:
      "Expérience en scripts Python pour l’automatisation, analyse de données avec Pandas et visualisations avec Matplotlib.",
  },
  {
    id: 2,
    image: java,
    title: "Java",
    description:
      "Exploration du développement Java avec Spring Boot et Thymeleaf pour des applications web et premières expériences avec Android Studio côté mobile.",
  },
  {
    id: 3,
    image: php,
    title: "PHP",
    description:
      "Utilisation de PHP pour développer des fonctionnalités backend simples, avec gestion de sessions et interactions MySQL",
  },
  {
    id: 4,
    image: sql,
    title: "SQL",
    description:
      "Conception et optimisation de bases de données SQL, avec gestion des relations, indexations et requêtes.",
  },

  {
    id: 5,
    image: html,
    title: "HTML",
    description:
      "Langage de balisage utilisé pour structurer le contenu des pages web.",
  },
  {
    id: 6,
    image: css,
    title: "CSS",
    description:
      "Maîtrise du CSS pour styliser des interfaces responsives et modernes.",
  },
  {
    id: 7,
    image: javascript,
    title: "JavaScript",
    description:
      "Pratique de JavaScript moderne dans le développement d’interfaces utilisateur réactives.",
  },
  {
    id: 8,
    image: react,
    title: "React",
    description:
      "Compétences en React pour construire des interfaces utilisateur dynamiques.",
  },

  {
    id: 9,
    image: github,
    title: "GitHub",
    description:
      "Usage GitHub pour versionner mon code, gérer les contributions et automatiser les tests et déploiements.",
  },
  {
    id: 10,
    image: vscode,
    title: "Visual Studio Code",
    description:
      "Maîtrise de VS Code avec des extensions, débogage intégré, et intégration Git pour un workflow de développement optimisé",
  },
  {
    id: 11,
    image: intellij,
    title: "IntelliJ",
    description:
      "Utilisation d’IntelliJ IDEA pour développer des applications Java avec des outils intégrés et une navigation efficace.",
  },
  {
    id: 12,
    image: androidstudio,
    title: "Android Studio",
    description:
      "Recours d’Android Studio pour développer et tester des applications mobiles natives Android.",
  },
];

function SkillBox({ image, title, description }) {
  return (
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
      <p className="text-gray-300 text-sm">{description}</p>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <img
        src={dev}
        alt="Left picture"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Outils <br /> et{" "}
            <span className="text-purple-400">compétences</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            {/* Ajoute ici ta description ou laisse vide si tu veux */}
          </p>
        </header>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
