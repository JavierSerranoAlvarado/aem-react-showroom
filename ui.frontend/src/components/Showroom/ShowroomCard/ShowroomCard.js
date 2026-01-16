import React from 'react';
import { formatPrice } from '../../../utils/formatters'

/**
 * Componente de presentación para un producto individual.
 * Recibe datos a través de props y delega la interacción al elemento principal.
 */
const ShowroomCard = ({ title, fileReference, price, onViewDetail }) => {
  return (
    <div className="product-card">
        {/* Validamos si viene imagen, si no, usaremos un placeholder */}
        <img 
            src={fileReference || 'https://placehold.co/300x300'} 
            alt={title} 
            className="card-image" 
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/300x300";
            }}
        />
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <span className="card-price">{formatPrice(price)}</span>
            <button className="btn-details" onClick={onViewDetail}>
                See Details
            </button>
        </div>
    </div>
  );
};

export default ShowroomCard;