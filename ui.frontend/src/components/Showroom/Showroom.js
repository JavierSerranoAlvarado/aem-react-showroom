import React, { useState } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components'; 
import ShowroomCard from './ShowroomCard/ShowroomCard';
import ProductModal from './ProductModal/ProductModal';
import './Showroom.css';

/**
 * Componente contenedor principal.
 * Gestiona el estado de la lista de productos y la visibilidad del modal.
 */
export const Showroom = (props) => {
  //Gestión sencilla del estado para el producto modal activo.
  // null = modal cerrado | objeto = modal abierto con el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(null);

  const title =  props.showroomTitle || "Showroom Default Title";
  const products = props.items || [];

  // Caso vacío
  //Opcionalmente se puede cambiar que muestre null u otro mensaje especifico
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

// CONFIGURACIÓN AEM
// Esto le indica a AEM si el componente está vacío muestre este texto para que se pueda hacer clic en él.
const ShowroomEditConfig = {
  emptyLabel: "Showroom Component",
  isEmpty: (props) => !props || !props.items || props.items.length === 0,
};

export default MapTo("showroom/components/showroom")(Showroom, ShowroomEditConfig);

;