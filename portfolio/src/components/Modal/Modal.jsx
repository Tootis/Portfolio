import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ModalStyle.scss";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Bouton "X" pour les tests de la modal */}
      <button className="modal-toggle-btn" onClick={toggleModal}>
        X
      </button>

      <div className={`modal-container ${isOpen ? "open" : "hide"}`}>
        <nav className="modal-nav">
          <Link to="/" onClick={toggleModal}>Home</Link>
          <Link to="/about" onClick={toggleModal}>About</Link>
          <Link to="/projects" onClick={toggleModal}>Projects</Link>
        </nav>
      </div>
    </>
  );
};

export default Modal;
