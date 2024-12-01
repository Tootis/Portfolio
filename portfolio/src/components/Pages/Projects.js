import React from "react";
import Carousel from "../Carousel/Carousel.jsx";
import "../PagesStyle/ProjectsStyle.scss";
import pictures from "../Layout/picture.jsx";

const Projects = () => {
  const carouselsData = [
    {
      id: "section1",
      title: "Projet 1, 2 et 5",
      description: "Utilisation du HTML, CSS, JavaScript et React (projet étudiant)",
      images: [...pictures.P1, ...pictures.P5],
    },
    {
      id: "section2",
      title: "Projet 4 et 6",
      description: "Débuggez et optimisez un site et back-end (projet étudiant)",
      images: [...pictures.P4, ...pictures.P6],
    },
    {
      id: "section3",
      title: "Projet 8 en cours",
      description: "Mise à jour, reconstruction et amélioration du site du Chistera d'or ",
      images: [],
    },
  ];

  return (
    <section className="section">
      <h2>Mes projets</h2>
      <p className="resume ">
        Explorez les projets que j'ai réalisés, répartis en deux catégories principales, accompagnés de quelques images.
        Vous pouvez également les retrouver directement sur mon profil 
        <a className="link-projets" href="https://github.com/Tootis?tab=repositories" target="_blank" rel="noopener noreferrer" 
        aria-label="Voir mes projets sur GitHub"> GitHub</a>.
      </p>

      {carouselsData.map((carousel) => (
    <div 
      key={carousel.id} 
      id={carousel.id} 
      className="carousel-section" 
      aria-labelledby={carousel.id + "-title"} 
      role="region"
    >
      <h3 id={carousel.id + "-title"}>{carousel.title}</h3>
      <p>{carousel.description}</p>
      <Carousel 
        images={carousel.images} 
        aria-label={`Carrousel d'images pour ${carousel.title}`}
      />
    </div>
  ))}
</section>
  );
}

export default Projects;
