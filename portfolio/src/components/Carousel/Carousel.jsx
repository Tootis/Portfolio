import React, { useState } from "react";
import "./CarouselStyle.scss";

const Carousel = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImage = (image, index) => {
    if (currentImage === image.src) {
      setIsOpen(false);
      setCurrentImage(null);
    } else {
      setCurrentImage(image.src);
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
    setCurrentImage(images[nextIndex].src);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex].src);
    setCurrentIndex(prevIndex);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("overlay")) {
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
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>

      {isOpen && (
        <div className="overlay" onClick={handleOutsideClick}>
          <div className="overlay-content">
            <button onClick={prevImage}>&lt;</button>
            <div className="image-container">
              <img
                src={currentImage}
                alt={`Texte explicatif ${currentIndex + 1}`}
                style={{ width: "80vw", height: "80vh", objectFit: "contain" }}
              />
              <div className="image-description">
                {images[currentIndex].description}
              </div>
            </div>
            <button onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;