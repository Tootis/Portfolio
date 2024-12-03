import image1 from "../../assets/picture/P1-1.webp";
import image2 from "../../assets/picture/P2-1.webp";
import image3 from "../../assets/picture/P2-2.webp";
import image4 from "../../assets/picture/P5-1.webp";
import image5 from "../../assets/picture/P5-2.webp";
import image6 from "../../assets/picture/P5-3.webp";
import image7 from "../../assets/picture/P4-1.webp";
import image8 from "../../assets/picture/P4-2.webp";
import image9 from "../../assets/picture/P4-3.webp";
import image10 from "../../assets/picture/P4-4.webp";
import image11 from "../../assets/picture/P6-1.webp";
import image12 from "../../assets/picture/P6-2.webp";
import image13 from "../../assets/picture/P6-3.webp";
import image14 from "../../assets/picture/P6-4.webp";

const pictures = {
  P1: [
    { src: image1, description: "Projet 1 - Site en HTML & CSS : réalisation de la partie header, navigation, filtre, hébergements, activités, et footer." },
    { src: image2, description: "Projet 2 - JavaScript : connexion via une adresse mail et un mot de passe unique avec cryptage du mot de passe." },
    { src: image3, description: "Projet 2 - JavaScript : intégration d'un projet au choix et système de filtre." },
  ],
  P5: [
    { src: image4, description: "Projet 5 - React : intégration dynamique de toutes les cartes de logement et de tout le contenu visible." },
    { src: image5, description: "Projet 5 - React : menu avec un défilement fluide." },
    { src: image6, description: "Projet 5 - React : aperçu d'une carte de logement avec un carrousel d'images et réutilisation des menus précédents." },
  ],
  P4: [
    { src: image7, description: "Projet 4 - Débogage : optimisation des images et amélioration de la visibilité du carrousel." },
    { src: image8, description: "Projet 4 - Débogage : réparation du filtre et nouvelle optimisation des images." },
    { src: image9, description: "Projet 4 - Débogage : ajout de plusieurs balises pour le référencement." },
    { src: image10, description: "Projet 4 - Débogage : résultats finaux des tests Lighthouse." },
  ],
  P6: [
    { src: image11, description: "Projet 6 - Backend : création de compte, sécurisation et connexion cryptée, avec stockage des données dans MongoDB." },
    { src: image12, description: "Projet 6 - Backend : paramétrage des routes." },
    { src: image13, description: "Projet 6 - Backend : mise en place d'un formulaire, ajout d'images et envoi vers la base de données." },
    { src: image14, description: "Projet 6 - Backend : écran de validation lorsque toutes les informations sont vérifiées." },
  ],
  AllProjects: [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, 
    image10, image11, image12, image13, image14, image1, image2, image3
  ]
};

export default pictures;