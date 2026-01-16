import React from 'react';
import { useEffect } from "react";
import { formatPrice }  from '../../../utils/formatters'

/**
 * Componente modal para mostrar los detalles del producto.
 * Gestiona la accesibilidad y las interacciones con el teclado.
 */
const ProductModal = ({ product, onClose }) => {
  const isOpen = Boolean(product);

  useEffect(() => {
    if (!isOpen) return;

    //Permitir cerrar el modal con la tecla Escape
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Evita render innecesario si está cerrado
  if (!isOpen) return null;


  return (
      <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        // Evita que el click dentro del modal cierre el overlay
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" type="button" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <h2 id="modal-title">{product.title || "Product Details"}</h2>

        <img
          src={product.fileReference || "https://placehold.co/300x300"}
          alt={product.title || "Product"}
          style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/300x300";
          }}
        />

        <div className="modal-details">
          <p><strong>SKU:</strong> {product.sku || "N/A"}</p>
          <p><strong>Price:</strong> {formatPrice(product.price)}</p>

          <p><strong>Description:</strong></p>
          <p>{product.description || "No description."}</p>
        </div>

        <button className="btn-details" type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;