import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";

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
      description: `En 2024, je souhaitais développer un tout premier jeu. J'ai donc choisi de créer le jeu du pong codé en Python. À travers ce projet, j'ai appris énormément de choses, notamment la bibliothèque Pygame, une ressource indispensable pour le développement de jeux et d'applications multimédia en Python.
Ce projet m'a permis d'améliorer mes compétences en Python de manière significative. J'ai pu explorer les concepts de gestion des événements, de manipulation des sprites, et de gestion des collisions, tous essentiels dans le développement de jeux interactifs. De plus, cela m'a ouvert les portes vers d'autres bibliothèques et techniques de programmation que je ne connaissais pas auparavant.
Au-delà de l'aspect technique, créer ce jeu m'a également appris la patience et la persévérance nécessaires pour surmonter les défis de développement. J'ai di résoudre de nombreux problèmes et ajuster continuellement mon code pour améliorer l'expérience utilisateur et rendre le jeu plus fluide.`,
    },
    {
      image: project2,
      title: "Jeu de Pong",
      description: `En 2024, je souhaitais développer un tout premier jeu. J'ai donc choisi de créer le jeu du pong codé en Python. À travers ce projet, j'ai appris énormément de choses, notamment la bibliothèque Pygame, une ressource indispensable pour le développement de jeux et d'applications multimédia en Python.
Ce projet m'a permis d'améliorer mes compétences en Python de manière significative. J'ai pu explorer les concepts de gestion des événements, de manipulation des sprites, et de gestion des collisions, tous essentiels dans le développement de jeux interactifs. De plus, cela m'a ouvert les portes vers d'autres bibliothèques et techniques de programmation que je ne connaissais pas auparavant.
Au-delà de l'aspect technique, créer ce jeu m'a également appris la patience et la persévérance nécessaires pour surmonter les défis de développement. J'ai di résoudre de nombreux problèmes et ajuster continuellement mon code pour améliorer l'expérience utilisateur et rendre le jeu plus fluide.`,
    },
    {
      image: project3,
      title: "Organisation d'un travail d'équipe",
      description: `Pour cette SAE, nous avons étudié un événement culturel, le Festival Hauts-de-Seine Digital Games 2024, via photos, interviews et sondages, afin de concevoir une nouvelle édition 2025 et créer un site web dédié.
Notre équipe, spécialisée en collecte de contenu, analyse, développement web et création visuelle, a valorisé sa contribution sur une page du site. En tant que chef de projet, j’ai coordonné l’équipe, supervisé les tâches et assuré le suivi du projet.
Cette expérience a renforcé mes compétences en gestion d’équipe, planification et communication, tout en développant ma capacité à motiver mes collègues vers nos objectifs communs.`,
    },
  ];

  return (
    <main className="p-4">
      <section data-aos="fade-up" data-aos-delay="300">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
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
