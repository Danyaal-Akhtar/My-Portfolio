import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-r from-purple-700 to-blue-700 text-white py-3 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center text-center space-y-2">
        {/* Titre / Logo */}
        <h1 className="text-xl font-bold italic">Portfolio</h1>

        {/* Icônes réseaux sociaux */}
        <div className="flex justify-center space-x-4">
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
              className="text-xl hover:text-purple-300 transition-transform transform hover:scale-110"
              aria-label={item.link}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Texte copyright */}
        <p className="text-xs text-gray-300">
          © 2025 Danyaal AKHTAR. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
