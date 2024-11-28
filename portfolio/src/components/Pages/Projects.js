import React from "react";
import Carousel from "../Carousel/Carousel.jsx";
import "../Home/HomeStyle.scss";
import Image1 from "../../assets/picture/chistera.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Projet 1,2,5 et 7",
      description: "Utilisation du HTML & CSS, JavaScript et React",
      images: [Image1, Image1],
    },
    {
      title: "Projet 3",
      description: "Planifiez le développement",
      images: [Image1, Image1],
    },
    {
      title: "Projet 4 et 6",
      description: "Débuggez et optimisez un site et back-end",
      images: [Image1, Image1],
    },
  ];

  return (
    <section id="projets" className="projects-section">
      <h2>Mes projets</h2>
      <p>Découvrez mes projets réalisés :</p>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <div className="project-carousel">
              <Carousel images={project.images} />
            </div>
            <div className="project-text">
              <strong>{project.title}</strong>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;