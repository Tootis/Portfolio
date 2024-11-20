import React from 'react';
import Modal from '../Modal/Modal';

const Body = () => {
  return (
    <main className="body">
      <Modal />
      <section id="accueil" className="section">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>
          Je suis un développeur débutant dans la création de sites web et
          d'applications interactives. J'aime beaucoup la partie Frontend et
          l'optimisation de site, et j'aimerais commencer par renforcer mes
          points forts en priorité.
        </p>
      </section>
    </main>
  );
};

export default Body;
