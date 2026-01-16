import React from 'react';
import { render, screen } from '@testing-library/react';
import { Showroom } from './Showroom';
import userEvent from '@testing-library/user-event';

// Mock Data para las pruebas
const mockData = {
    showroomTitle: "Tech Accessories Showroom",
    items: [
        {
            title: "Mechanical Keyboard",
            price: 999,
            sku: "KB-002",
            fileReference: "/content/dam/showroom/products/keyboard.jpg",
            description: "Compact mechanical keyboard with customizable RGB lighting."
        }
    ]
};

describe('Showroom Component', () => {
    
    // Verifica el estado cuando no hay productos
    test('renders empty message when no items provided', () => {
        render(<Showroom items={[]} />);

        expect(screen.getByText(/No products available/i)).toBeInTheDocument();
    });

    // Verifica el render correcto cuando hay datos
    test('renders title and product cards correctly', () => {
        render(<Showroom {...mockData} />);
        
        expect(screen.getByRole("heading", { name: /tech accessories showroom/i })).toBeInTheDocument();
        expect(screen.getByText("Mechanical Keyboard")).toBeInTheDocument();
        expect(screen.getByText("$999.00")).toBeInTheDocument();
    });

    // Verifica interacción: abrir modal al seleccionar un producto
    test('opens modal with product details when "See Details" is clicked', () => {
        render(<Showroom {...mockData} />);

        // Antes del clic, el modal no debe existir en el DOM
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        
        // Simulamos clic en el botón
        userEvent.click(screen.getByRole("button", { name: /see details/i }));


        // Después del clic, el modal debe mostrarse con contenido del producto
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText("Compact mechanical keyboard with customizable RGB lighting.")).toBeInTheDocument();
    });

    // Verifica interacción: cerrar modal con el botón de cerrar (aria-label="Close")
    test('closes modal when close button is clicked',  () => {
        render(<Showroom {...mockData} />);
        

        userEvent.click(screen.getByRole("button", { name: /see details/i }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();


        userEvent.click(screen.getByLabelText(/close/i));
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

});