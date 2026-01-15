import React, { useState } from 'react';
import ShowroomCard from './ShowroomCard/ShowroomCard';
import ProductModal from './ProductModal/ProductModal';
import './Showroom.css';

/**
 * Componente contenedor principal.
 * Gestiona el estado de la lista de productos y la visibilidad del modal.
 */
const Showroom = () => {
  //Gestión sencilla del estado para el producto modal activo.
  // null = modal cerrado | objeto = modal abierto con el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(null);

  const title =  MOCK_DATA.showroomTitle || "Showroom (Modo React Puro)";
  const products =  MOCK_DATA.items || [];

  // Caso vacío
  if (products.length === 0) {
    return <div className="showroom-container"><p>No products available</p></div>;
  }

  return (
    <div className="showroom-container">
      <h1 className="showroom-title">{title}</h1>

      <div className="showroom-grid">
        {products.map((item, index) => (
          <ShowroomCard 
            key={item.sku || index}
            title={item.title}
            price={item.price}
            fileReference={item.fileReference}
            onViewDetail={() => setSelectedProduct(item)}
          />
        ))}
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

// DATOS DE PRUEBA (MOCKS)
// US-003: "Componentes React funcionales" sin depender del backend real.
const MOCK_DATA = {
  showroomTitle: "Tech Accessories Showroom (Mock)",
  items: [
    {
      title: "Wireless Headphones",
      description: "Over-ear wireless headphones with active noise cancellation.",
      price: 1299,
      sku: "WH-001",
      fileReference: "https://placehold.co/300x300"
    },
    {
      title: "Mechanical Keyboard",
      description: "Compact mechanical keyboard with customizable RGB lighting.",
      price: 999,
      sku: "KB-002",
      fileReference: "https://placehold.co/300x300"
    },
    {
      title: "Gaming Mouse",
      description: "Ergonomic gaming mouse with adjustable DPI and side buttons.",
      price: 699,
      sku: "GM-003",
      fileReference: "https://placehold.co/300x300"
    }
  ]
};


export default Showroom;
