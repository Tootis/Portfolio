import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./ModalStyle.scss";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`modal-backdrop ${isOpen ? "show" : ""}`}
        onClick={toggleModal}
      ></div>

      <button className="modal-toggle-btn" onClick={toggleModal}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`modal-container ${isOpen ? "open" : "hide"}`}>
        <nav className="modal-nav">
          <div className="modal-link">
            <a href="/" className={location.pathname === "/" ? "active" : ""} onClick={toggleModal}>
              Accueil
            </a>
          </div>
          <div className="modal-link">
            <a href="/about" className={location.pathname === "/about" ? "active" : ""} onClick={toggleModal}>
              À Propos de moi
            </a>
          </div>
          <div className="modal-link">
            <a href="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={toggleModal}>
              Projets
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Modal;
