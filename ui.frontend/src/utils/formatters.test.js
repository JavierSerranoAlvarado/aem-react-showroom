import { formatPrice } from './formatters';

describe('formatPrice Utility', () => {
    
    // Verifica formateo estándar a 2 decimales
    test('formats valid numbers correctly', () => {
        expect(formatPrice(1000)).toBe('$1000.00');
        expect(formatPrice(1299.50)).toBe('$1299.50');
        expect(formatPrice(0)).toBe('$0.00');
    });

    // Acepta strings numéricos y los convierte a formato precio
    test('handles string inputs correctly', () => {
        expect(formatPrice("500")).toBe('$500.00');
    });

    // Valores inválidos deben regresar "N/A" para evitar resultados inesperados
    test('returns N/A for invalid inputs', () => {
        expect(formatPrice(null)).toBe('N/A');
        expect(formatPrice(undefined)).toBe('N/A');
        expect(formatPrice("invalid")).toBe('N/A');
    });
});