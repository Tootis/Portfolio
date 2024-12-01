import React, { useState } from "react";
import "./CarouselStyle.scss";

const Carousel = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImage = (image, index) => {
    if (currentImage === image) {
      setIsOpen(false);
      setCurrentImage(null);
    } else {
      setCurrentImage(image);
      setCurrentIndex(index);
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("overlay") || e.target.tagName === "IMG") {
      handleClose();
    }
  };

  return (
    <div className="wrapper">
      <div className="items">
        {images.map((image, index) => (
          <div
            key={index}
            className="item"
            onClick={() => toggleImage(image, index)}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {isOpen && (
        <div className="overlay" onClick={handleOutsideClick}>
          <div className="overlay-content">
            <button onClick={prevImage}>&lt;</button>
            <img
              src={currentImage}
              alt="Zoom sur un projet"
              style={{ width: "80vw", height: "80vh", objectFit: "contain" }}
            />
            <button onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
