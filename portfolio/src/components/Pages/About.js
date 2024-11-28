import React from 'react';
import elec from '../../assets/picture/elec.jpg';
import tech from '../../assets/picture/tech.jpg';
import objective from '../../assets/picture/Objective.jpg';
import chistera from '../../assets/picture/chistera.jpg';
import '../About/AboutStyle.scss';
import '../Home/HomeStyle.scss';

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
      <section id="me" className="section">
        <h2>À propos de moi</h2>
        <p className="centered resume">
        Je suis un développeur web qui souhaite augmenter ses compétences en développement frontend avec React.
        J'aime relever de nouveaux défis techniques et améliorer continuellement mes compétences.
        </p>

        <AboutBlock imgSrc={objective} altText="Illustration d'une maison connectée avec la domotique">
          <p>
            Je m'appelle Brice, et après un parcours en tant qu'électricien, j'ai décidé de me réorienter vers un domaine
            qui m'a attiré en le découvrant : la programmation. Après m'être formé et avoir obtenu mon diplôme et commencer mon premier projet hors formation,
            je suis désormais pleinement engagé dans cette voie. Ce virage professionnel s'inscrit dans mon désir d'exploiter pleinement
            mes compétences techniques et mon goût pour la résolution de problèmes complexes.
          </p>
        </AboutBlock>

        <AboutBlock imgSrc={elec} altText="Outil d'électricien" reverse>
          <p>
            Au fil de mes 5 années en tant qu’électricien, j'ai développé une bonne compréhension des systèmes techniques,
            notamment avec des bases en domotique, qui est l'option de mon BTS. Bien que je n’aie pas eu l'opportunité d'améliorer mes compétences en domotique,
            j'ai pu en obtenir de nouvel dans d'autre secteur de la sécurité ou la création de réseau, cette expérience m’a permis d'acquérir des compétences
            précieuses : une approche méthodique du travail, une gestion précise des installations, une rigueur nécessaire pour assurer la fiabilité des systèmes,
            et une forte capacité à comprendre des schémas complexes, tant matériels que logiciels.
          </p>
        </AboutBlock>

        <AboutBlock imgSrc={tech} altText="Technologie et programmation">
          <p>
            Cependant, mon intérêt pour l’automatisation et la technologie m’a poussé à explorer la programmation. Aujourd’hui,
            je peux dire que ce choix a enrichi ma vision de l’ingénierie, me permettant d’aborder des problématiques sous un autre angle,
            tout en restant ancré dans mon expérience technique initiale.
          </p>
        </AboutBlock>

        <AboutBlock imgSrc={chistera} altText="Pelote basque" reverse>
          <p>
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
