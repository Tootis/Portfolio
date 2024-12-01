import React from 'react';
import '../PagesStyle/HomeStyle.scss';
import pictures from "../Layout/picture.jsx";
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <main className="body">
      <section id="accueil" className="section">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>
          Je suis un développeur débutant dans la création de sites web et
          d'applications interactives. J'aime beaucoup la partie Frontend et
          l'optimisation de site, et j'aimerais commencer par renforcer mes
          points forts en priorité.Voici quelques <Link to="/projects" className="link-projets"
           aria-label="Voir mes projets">projets</Link> réalisés :
        </p>
    <div className="carouselHome" role="region" aria-label="Carrousel de projets">
      <div className="wrap">
        {pictures.AllProjects.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Carrousel infini numéro ${index + 1}`} 
            aria-label={`Image numéro ${index + 1} du carrousel`}
          />
        ))}
      </div>
    </div>
  </section>
</main>
  );
};

export default Body;
