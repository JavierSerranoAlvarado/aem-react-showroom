// utils/formatters.js

/**
 * Formatea un numero como precio.
 * @param {string|number} value: el precio que se va a formatear.
 * @returns {string}: precio formateado (por ejemplo, «1299,00 $») o «N/A».
 */
export const formatPrice = (value) => {
   if (value === null || value === undefined) {
    return "N/A";
  }
   const num = Number(value);
   return Number.isFinite(num) ? `$${num.toFixed(2)}` : "N/A";
};