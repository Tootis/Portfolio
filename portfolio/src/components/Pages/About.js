import React from 'react';
import elec from '../../assets/picture/elec.webp';
import tech from '../../assets/picture/tech.webp';
import objective from '../../assets/picture/Objective.webp';
import chistera from '../../assets/picture/chistera.webp';
import '../PagesStyle/AboutStyle.scss';

const AboutBlock = ({ imgSrc, altText, reverse, children }) => (
  <div className={`about-block ${reverse ? 'reverse' : ''}`}>
    <div className="image">
      <img src={imgSrc} alt={altText} className="about-image" />
    </div>
    <div className="text">
      {children}
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <section className="section">
        <h2>À propos de moi</h2>
        <p className="resume">
        Je suis un développeur web qui souhaite augmenter ses compétences en développement frontend avec React.
        J'aime relever de nouveaux défis techniques et améliorer continuellement mes compétences.
        </p>

        <AboutBlock 
          imgSrc={objective} 
          altText="Illustration d'une maison connectée avec la domotique"
          aria-label="Section à propos de Brice, sa reconversion professionnelle et son parcours."
        >
          <p>
          Je m'appelle Brice, et après un parcours en tant qu’électricien, j’ai décidé de me réorienter vers un domaine qui m’a toujours interesse
          : la programmation. Après avoir suivi une formation, obtenu mon diplôme et commencé mon premier projet en dehors du cadre de la formation,
          je suis désormais pleinement engagé dans cette voie. Cette reconversion reflète mon désir d’exploiter pleinement mes compétences techniques
          et mon goût pour la résolution de problèmes complexes.
          </p>
        </AboutBlock>

        <AboutBlock 
          imgSrc={elec} 
          altText="Outil d'électricien" 
          reverse
          aria-labelledby="elec-description"
        >
          <p id="elec-description">
          Avec mon BTS en domotique et mes 5 années d’expérience en tant qu’électricien, j’ai développé une solide compréhension des systèmes techniques. 
          Cette expérience m’a permis d’acquérir des compétences clés : une approche méthodique pour gérer des projets, une gestion rigoureuse
          des installations assurant leur fiabilité et une grande rigueur pour garantir la qualité des systèmes mis en place.
          </p>
        </AboutBlock>

        <AboutBlock 
          imgSrc={tech} 
          altText="Technologie et programmation" 
          aria-labelledby="tech-description"
        >
          <p id="tech-description">
            Cependant, mon intérêt pour l’automatisation et la technologie m’a poussé à explorer la programmation. Aujourd’hui,
            je peux dire que ce choix a enrichi ma vision de l’ingénierie, me permettant d’aborder des problématiques sous un autre angle,
            tout en restant ancré dans mon expérience technique initiale.
          </p>
        </AboutBlock>

        <AboutBlock 
          imgSrc={chistera} 
          altText="Pelote basque" 
          reverse
          aria-labelledby="chistera-description"
        >
          <p id="chistera-description">
            Je pratique la pelote basque depuis longtemps, un sport traditionnel devenu une véritable passion. Aujourd'hui,
            je consacre une partie de mon temps libre en tant que coach. Ce rôle m’a appris à être organisé, à communiquer de manière
            claire et à motiver les autres. Ces compétences sont devenues essentielles dans mon travail en tant que développeur,
            notamment lorsqu’il s’agit de travailler en équipe ou de guider des projets.
          </p>
        </AboutBlock>

        <p className="centered">
            C’est grâce à cette discipline que j'ai commencé mon premier projet en tant que développeur. Il implique la création d’une application 
            dédiée à la gestion d’un organisme de tournois de pelote basque, permettant de suivre les résultats, d’organiser des matchs et de 
            gérer les profils des joueurs, tout en offrant une multitude d'informations pour tous types de visiteurs. Ce projet représente un véritable
            défi technique, me permettant de mettre en pratique mes nouvelles compétences en programmation tout en restant connecté à une de mes passions.
        </p>
      </section>

      <section className="section">
        <h2>Mes compétences</h2>
        <ul>
          <li>React & JavaScript</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Base de données avec MongoDB</li>
        </ul>
      </section>
    </>
  );
};

export default About;
