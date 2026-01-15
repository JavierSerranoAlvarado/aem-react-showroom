import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

/**
 * US-001
 * Componente React minimo para validar integracion de AEM + React.
 */
const Showroom = () => {
  return (
    <div style={{ padding: "16px", border: "1px solid #ccc" }}>
      <h2>Showroom Demo</h2>
      <p>React component es montando correctamente en AEM.</p>
    </div>
  );
};

MapTo("showroom/components/showroom")(Showroom);

export default Showroom;