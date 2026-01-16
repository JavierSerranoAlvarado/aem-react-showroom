import React from "react";
import ShowroomCard from "./ShowroomCard";

export default {
  title: "Showroom/ShowroomCard",
  component: ShowroomCard,
  // Decorator: limita el ancho para evitar que la card se estire a pantalla completa en Storybook
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px", margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    //base reutilizables para todas las historias
    title: "Producto Base",
    price: 999,
    onViewDetail: () => console.log("Click en detalle"),
  },
};

// Caso con imagen real para comparar contra placeholder/fallback
export const WithCustomImage = {
  args: {
    title: "Cámara DSLR",
    fileReference: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80", 
  },
};

// Caso sin imagen: se debe usar el placeholder interno (fileReference vacío)
export const WithoutImage = {
  args: {
    title: "Producto Sin Foto",
    fileReference: "", // String vacío
  },
};

// Caso link roto: valida el onError del <img> y debe mostrar el placeholder
export const BrokenLink = {
  args: {
    title: "Link Roto (Test onError)",
    fileReference: "https://ruta-que-no-existe.com/imagen.jpg",
  },
};