import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.webp";
import project5 from "/project5.webp";
import project6 from "/project6.jpg";
import project7 from "/project7.png";
<<<<<<< HEAD
import taskflow from "/taskflow.png";
=======
import inprogress from "/inprogress.jpg"
>>>>>>> dbe864a83742083958e9a6aa7b7ecc2d1e6d6938

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
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      AOS.refresh();
    }
  }, [selectedProject]);

  // Projets universitaires
  const universitaires = [
    {
      image: project1,
      title: "Référencement de jeux de société",
      description: `Dans le cadre de la SAE 3.01 en 2025, j’ai participé au développement d’une application web destinée à la gestion de la collection de jeux de société de l’Université Sorbonne Paris Nord, qui regroupe près de 17 000 références, certaines datant du XIXe siècle. Le projet visait à remplacer un fichier Excel unique, devenu inadapté aux besoins de l’équipe en charge de la collection.

En travaillant en groupe de quatre, nous avons d’abord nettoyé et structuré les données grâce à la bibliothèque Pandas, avant de les intégrer dans une base de données relationnelle conçue pour permettre des évolutions futures. Nous avons ensuite développé une interface web intuitive permettant de consulter l’ensemble de la collection, de gérer les fiches des jeux, des auteurs et des éditeurs, mais aussi de suivre les prêts et la localisation physique des jeux.

Ce projet m’a permis de consolider mes compétences en traitement de données, en modélisation de base de données et en développement web, tout en expérimentant le travail collaboratif sur une problématique concrète, avec des enjeux réels de conservation et de valorisation patrimoniale.
Langages : Python, PHP, HTML, CSS, JavaScript
Lien : https://ludotech.kesug.com`,
    },

    {
      image: project3,
      title: "Organisation d'un travail d'équipe",
      description: `Dans le cadre de cette SAE, notre objectif était de documenter un événement culturel existant, puis d’imaginer une nouvelle édition pour 2025 à travers la création d’un site web dédié. Nous avons choisi le Festival Hauts-de-Seine Digital Games, un événement parisien majeur autour du jeu vidéo, de l’IA et des technologies numériques.

Notre équipe a réalisé des comptes rendus, interviews, sondages et photos pour restituer l’édition 2024 et proposer une vision créative pour l’année suivante. Le site web présentait le concept, le programme envisagé, ainsi qu’une page dédiée à notre démarche de conception.

En tant que chef de projet, j’ai coordonné les différentes étapes : collecte de contenu, développement du site, organisation du travail et suivi de l’avancement. Cette expérience m’a permis de développer mes compétences en gestion d’équipe, planification stratégique, prise de décision et communication collaborative dans un contexte dynamique et concret.
Lien : https://scanas2005.github.io/HSDG/`,
    },
    {
      image: project4,
      title: "Calculatrice",
      description: `Développement d'une calculatrice en Java capable de réaliser des opérations arithmétiques de base (addition, soustraction, multiplication, division) sur des entiers. Le projet s’appuie sur une modélisation UML rigoureuse, avec une architecture orientée objet : une classe abstraite Operation étendue par des classes spécifiques (Addition, Soustraction, etc.), et une gestion fine des erreurs comme la division par zéro.
Pour permettre des calculs imbriqués, j'ai introduit la notion d’expressions composées à travers une classe abstraite Expression, permettant par exemple d’évaluer récursivement des formules telles que (17 - 2) / (2 + 3).
Ce projet m’a permis de consolider mes bases en Java, UML, programmation orientée objet et gestion des exceptions, tout en développant une approche méthodique de la conception logicielle.
Lien : https://github.com/Danyaal-Akhtar/SAE-Java-R201.git`,
    },
    {
      image: project5,
      title: "Installation de services réseaux",
      description: `Pour cette SAÉ, notre objectif était de créer un environnement de développement sur un disque externe bootable, Nous devions installer un système complet avec compilateurs, serveur web et Système de Gestion de Base de Données (SGBD). La première séance a consisté à distribuer le matériel et à installer le système, en mettant à jour les packages de base. Les séances suivantes se déroulaient en autonomie, avec des recherches sur Internet pour répondre aux questions.
La méthode d'auto-apprentissage, combinée à des évaluations pratiques et automatisées, semblait efficace pour acquérir et tester les compétences techniques. En résumé, c'était une initiative enrichissante pour approfondir mes connaissances en informatique pratique notamment en réseau informatique.  `,
    },
    {
      image: project6,
      title: "Création d'une base de données",
      description: `Dans cette SAE, j’ai participé à la création d’une base de données robuste destinée à stocker et organiser les données du projet Freedom in the World, qui mesure les libertés civiles et les droits politiques à travers le monde. L’objectif principal était de structurer ces informations de manière claire, avec des tables dédiées aux pays, régions, statuts de liberté et indicateurs de développement selon les critères des Nations Unies.

Chaque enregistrement contenait des scores annuels détaillés des libertés civiles et politiques par pays, permettant ainsi des analyses comparatives sur le temps et l’espace. Cette base de données sert d’outil précieux pour les chercheurs, décideurs, médias et activistes, facilitant la compréhension des avancées et des défis en matière de droits humains à l’échelle mondiale.

Ce projet m’a permis de renforcer mes compétences en modélisation de données, gestion de bases relationnelles et conception d’infrastructures adaptées à des besoins analytiques complexes.

`,
    },
  ];

  // Projets personnels
  const personnels = [
    {
<<<<<<< HEAD
      image: taskflow,
=======
      image: inprogress,
>>>>>>> dbe864a83742083958e9a6aa7b7ecc2d1e6d6938
      title: "TaskFlow – Plateforme de gestion de projets",
      description: `TaskFlow est une application web full-stack conçue pour aider à organiser et suivre l’avancement de projets collaboratifs.
L’utilisateur peut créer de nouveaux projets, leur associer des membres et suivre la progression grâce à un tableau de bord interactif.
Le projet est encore en cours de développement et certaines fonctionnalités restent à finaliser
Langages : 
Backend : Go (Gin, GORM), MySQL, gestion de l’authentification (JWT).
Frontend : React, hooks, appels API REST, interface responsive.
`,
    },
    {
      image: project7,
      title: "To-do list",
      description: `Un projet personnel visant à créer une application simple de gestion de tâches. Ce projet m’a permis de pratiquer le DOM en JavaScript, d’améliorer mes compétences en organisation du code et de renforcer mes bases en intégration front-end.
Langage : HTML, CSS, JavaScript`,
    },
    {
      image: project2,
      title: "Jeu de Pong",
      description: `En 2024, j’ai décidé de me lancer dans le développement de mon tout premier jeu vidéo : une version du classique Pong, codée en Python à l’aide de la bibliothèque Pygame. Ce projet m’a permis de découvrir les bases de la programmation de jeux, notamment la gestion des événements, les mouvements des objets à l’écran, la détection des collisions, ainsi que la mise en place d’une boucle de jeu fluide.

Grâce à Pygame, j’ai pu concevoir une interface simple et fonctionnelle tout en consolidant mes compétences en structuration de code, en logique temps réel et en optimisation de l’expérience utilisateur. Ce projet a constitué une étape formatrice dans mon parcours, en m’ouvrant à l’univers du développement de jeux 2D et en approfondissant ma maîtrise de Python.
Langage : Python
Lien : https://github.com/Danyaal-Akhtar/Pong-game.git`,
    },
  ];

  const listprojects =
    filter === "universitaires"
      ? universitaires
      : filter === "personnels"
      ? personnels
      : [...universitaires, ...personnels];

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
            Mes <span className="text-purple-400">projets</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Découvrez quelques-unes de mes réalisations universitaires et
            personnelles.
          </p>

          {/* Boutons de filtre */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full border-2 transition ${
                filter === "all"
                  ? "bg-purple-700 border-purple-700 text-white"
                  : "border-white text-white hover:bg-purple-800"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter("universitaires")}
              className={`px-4 py-2 rounded-full border-2 transition ${
                filter === "universitaires"
                  ? "bg-purple-700 border-purple-700 text-white"
                  : "border-white text-white hover:bg-purple-800"
              }`}
            >
              Projets universitaires
            </button>
            <button
              onClick={() => setFilter("personnels")}
              className={`px-4 py-2 rounded-full border-2 transition ${
                filter === "personnels"
                  ? "bg-purple-700 border-purple-700 text-white"
                  : "border-white text-white hover:bg-purple-800"
              }`}
            >
              Projets personnels
            </button>
          </div>
        </header>
      </section>

      {/* Liste des projets filtrés */}
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
