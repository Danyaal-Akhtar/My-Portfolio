import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.webp";
import project5 from "/project5.webp";
import project6 from "/project6.jpg";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-lg max-w-lg w-full p-6 relative shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="400"
        onClick={handleContentClick}
      >
        <button
          className="absolute top-3 right-4 text-xl text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-300 whitespace-pre-line">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, description, onClick }) => (
  <article
    className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group cursor-pointer"
    onClick={onClick}
    data-aos="fade-up"
  >
    <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 opacity-50 -top-5 left-10 bg-[#cd3cf5] rounded-full blur-3xl" />
    <div className="relative z-10">
      <figure className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute h-[192px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-purple-700 transition-colors duration-200">
            Voir le projet
          </button>
        </div>
      </figure>
      <div className="px-6 py-4">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-200 text-base line-clamp-2">{description}</p>
      </div>
    </div>
  </article>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      AOS.refresh();
    }
  }, [selectedProject]);

  const listprojects = [
    {
      image: project1,
      title: "Référencement de jeux de société",
      description: `Dans le cadre de la SAE 3.01 (2025), nous avons travaillé en groupe de quatre pour nettoyer, à l’aide de la bibliothèque Pandas, un fichier Excel recensant près de 17 000 jeux de société appartenant à l’Université Sorbonne Paris Nord, dont certains remontent au XIXe siècle. Ces données ont été structurées puis intégrées dans une base de données. Nous avons ensuite conçu un site web avec une interface intuitive permettant de consulter l’ensemble de la collection, de gérer les fiches des jeux, auteurs et éditeurs, ainsi que de suivre les prêts et la localisation des jeux.
Langages : Python, PHP, HTML, CSS, JavaScript
Lien : https://ludotech.kesug.com`,
    },
    {
      image: project2,
      title: "Jeu de Pong",
      description: `En 2024, je souhaitais développer un tout premier jeu. J'ai donc choisi de créer le jeu du pong codé en Python. À travers ce projet, j'ai appris énormément de choses, notamment la bibliothèque Pygame, une ressource indispensable pour le développement de jeux et d'applications multimédia en Python.
Langage : Python
Lien : https://github.com/Danyaal-Akhtar/Pong-game.git`,
    },
    {
      image: project3,
      title: "Organisation d'un travail d'équipe",
      description: `Pour cette SAE, nous avons étudié un événement culturel, le Festival Hauts-de-Seine Digital Games 2024, via photos, interviews et sondages, afin de concevoir une nouvelle édition 2025 et créer un site web dédié.
Lien : https://scanas2005.github.io/HSDG/`,
    },
    {
      image: project4,
      title: "Calculatrice",
      description: `Projet de calculatrice en Java et C#. Développement d’une application capable de faire des opérations de base, en utilisant UML, puis réimplémentée en C# pour renforcer mes compétences.
Langages : Java et C#
Lien : https://github.com/Danyaal-Akhtar/SAE-Java-R201.git`,
    },
    {
      image: project5,
      title: "Installation de services réseaux",
      description: `Création d’un environnement de développement sur disque externe bootable, avec installation de système, compilateurs, serveur web, et SGBD. Apprentissage autonome avec évaluations pratiques.`,
    },
    {
      image: project6,
      title: "Création d'une base de données",
      description: `Conception d'une base de données pour le projet "Freedom in the World". Stockage structuré de données sur les libertés civiles et droits politiques par pays, utile pour les chercheurs et ONG.`,
    },
  ];

  return (
    <main className="p-4">
      <section
        id="projects"
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-16"
      >
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            Mes <span className="text-purple-400">Projets</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Découvrez quelques-unes de mes réalisations universitaires et
            personnelles.
          </p>
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-16 w-fit mx-auto"
      >
        {listprojects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </section>

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
