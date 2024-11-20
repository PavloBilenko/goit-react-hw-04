import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const modalContent = (
    <div className={s["modal-overlay"]} onClick={handleOverlayClick}>
      <div className={s["modal-content"]}>
        <button className={s["close-button"]} onClick={onClose}>
          ×
        </button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default ImageModal;
