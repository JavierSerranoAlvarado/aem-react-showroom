import React, { useState } from "react";
import ProductModal from "./ProductModal";

export default {
  title: "Showroom/ProductModal",
  component: ProductModal,
};

const sampleProduct = {
  title: "Wireless Headphones",
  description: "Over-ear wireless headphones with active noise cancellation.",
  price: 1299,
  sku: "WH-001",
  fileReference: "https://placehold.co/600x400",
};

// Historia interactiva: valida apertura/cierre del modal
export const OpenAndClose = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <ProductModal
        product={open ? sampleProduct : null}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
