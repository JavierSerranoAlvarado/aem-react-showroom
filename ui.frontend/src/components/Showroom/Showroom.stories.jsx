import React from "react";
import { Showroom }from "./Showroom"; 

export default {
  title: "Showroom/Showroom",
  component: Showroom,
  parameters: {
    // Fullscreen ayuda a ver el grid responsivo como en la app real
    layout: 'fullscreen', 
  },
};

export const Default = {
  args: {
    showroomTitle: "Tech Accessories Showroom",
    items: [
      {
        title: "Mechanical Keyboard",
        price: 999,
        sku: "KB-002",
        fileReference: "https://placehold.co/300x300",
        description: "Compact mechanical keyboard.",
      },
      {
        title: "Wireless Headphones",
        price: 1299,
        sku: "WH-001",
        fileReference: "", // Validamos fallback de imagen en la lista (placeholder)
        description: "Over-ear wireless headphones.",
      },
    ],
  },
};

export const Empty = {
  args: {
    showroomTitle: "Empty Showroom",
    items: [], // Debe mostrar el empty-state ("No products available")
  },
};