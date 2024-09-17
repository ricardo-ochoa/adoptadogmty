"use client";

import { Dog } from "../../lib/types";
import { X } from "lucide-react"; // Usar el ícono de cierre
import { ImageCarousel } from "../ui/CarouselComponent"; // Asegúrate de que el componente exista
import { useEffect } from "react"; // Para manejar el ciclo de vida
import React from "react";
import { Caveat } from "next/font/google";

// Importar la fuente
const justAnotherHand = Caveat({
    weight: '400',
    subsets: ['latin'],
});


interface ModalProps {
    dog: Dog;
    onClose: () => void;
}

const data = [
    { label: "Cachorros", value: "cachorro", color: "bg-red-100", ring: "ring-red-200", icon: "/cachorros.svg" },
    { label: "Hembras", value: "hembra", color: "bg-pink-200", ring: "ring-pink-200", icon: "/hembras.svg" },
    { label: "Machos", value: "macho", color: "bg-indigo-200", ring: "ring-indigo-200", icon: "/machos.svg" },
    { label: "Gatitos", value: "gatito", color: "bg-orange-200", ring: "ring-orange-200", icon: "/machos-gatos.svg" },
    { label: "Gatitas", value: "gatita", color: "bg-yellow-200", ring: "ring-yellow-200", icon: "/Hembras-gatos.svg" },
];

// Función para manejar la adopción (abrir en otra pestaña)
const handleAdoptClick = (dogName: string, onClose: () => void) => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScrPt4pwYgOByXzmKwuBN3ZhPJ1WN4tjCH4pHlSaZtlo7JnHA/viewform", "_blank");
    onClose(); // Cierra el modal
};

const ModalPets: React.FC<ModalProps> = ({ dog, onClose }) => {
    // Buscar el color de fondo basado en el tipo de mascota
    const filter = data.find((filter) => filter.value === dog.tipo);
    const bgColor = filter ? filter.color : "bg-white"; // Usa el color encontrado o blanco por defecto

    // Efecto para bloquear el scroll al abrir el modal
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className={`${bgColor} p-4 max-w-lg mx-auto relative m-2 w-full md:w-auto rounded-lg`}>
                <button
                    className="absolute top-2 right-2 text-gray-600 z-[100]"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                {/* Contenedor con scroll si es necesario */}
                <div className="overflow-y-auto max-h-[500px] md:max-h-[650px]">
                    <h2 className="text-2xl font-bold mb-4">{dog.nombre} · {dog.edad}</h2>
                    <ImageCarousel
                        images={Array.isArray(dog.imagenes) ? dog.imagenes : [dog.imagenes]}
                    />
                    <p className="text-sm mb-6"><strong className={`text-2xl ${justAnotherHand.className}`}>Carácter:</strong><br /> {dog.caracter}</p>
                    <p className="text-sm mb-4"><strong className={`text-2xl ${justAnotherHand.className}`}>Mi historia:</strong><br /> {dog.historia}</p>
                </div>
                {/* Botón en la parte inferior */}
                <button
                    className="bg-teal-500 text-white px-4 py-2 rounded-full w-full mt-4"
                    onClick={() => handleAdoptClick(dog.nombre, onClose)}
                >
                    Quiero adoptar a {dog.nombre}
                </button>
            </div>
        </div>
    );
};

export default ModalPets;
