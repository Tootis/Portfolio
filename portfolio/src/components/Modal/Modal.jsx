import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./ModalStyle.scss";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Fonction pour basculer l'état ouvert/fermé du modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Remettre le focus sur le bouton menu lorsque le modal est ouvert
      document.querySelector('.modal-toggle-btn').focus();
    }
  };

  // Gérer la fermeture du modal avec la touche "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        className={`modal-backdrop ${isOpen ? "show" : ""}`}
        onClick={toggleModal}
        aria-hidden={!isOpen}
      ></div>
      <button
        className="modal-toggle-btn"
        onClick={toggleModal}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="modal-menu"
        aria-label="Ouvrir le menu de navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        className={`modal-container ${isOpen ? "open" : "hide"}`}
        id="modal-menu"
        role="dialog"
        aria-labelledby="modal-title"
        aria-hidden={!isOpen}
      >
        <nav className="modal-nav" role="navigation" aria-label="Navigation principale">
          <div className="modal-link">
            <a
              href="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={toggleModal}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              <div className="link-content">
                <p>Accueil</p>
              </div>
            </a>
          </div>
          <div className="modal-link">
            <a
              href="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={toggleModal}
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              <div className="link-content">
                <p>À Propos de moi</p>
              </div>
            </a>
          </div>
          <div className="modal-link">
            <a
              href="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
              onClick={toggleModal}
              aria-current={location.pathname === "/projects" ? "page" : undefined}
            >
              <div className="link-content">
                <p>Projets</p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Modal;
