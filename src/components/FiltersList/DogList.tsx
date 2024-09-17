import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/Card/Card";
import { ImageCarousel } from "../ui/CarouselComponent";
import { Dog } from "@/lib/types";
import { X } from 'lucide-react';
import { Caveat } from "next/font/google";

// Importar la fuente
const justAnotherHand = Caveat({
    weight: '400',
    subsets: ['latin'],
});

interface DogListProps {
    dogs: Dog[];
    title: string;
}

interface ModalProps {
    dog: Dog;
    onClose: () => void;
}

const handleAdoptClick = (onClose: () => void) => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScrPt4pwYgOByXzmKwuBN3ZhPJ1WN4tjCH4pHlSaZtlo7JnHA/viewform", "_blank");
    onClose();
};

const data = [
    { label: "Cachorros", value: "cachorro", color: "bg-red-100", ring: "ring-red-200", icon: "/cachorros.svg" },
    { label: "Hembras", value: "hembra", color: "bg-pink-200", ring: "ring-pink-200", icon: "/hembras.svg" },
    { label: "Machos", value: "macho", color: "bg-indigo-200", ring: "ring-indigo-200", icon: "/machos.svg" },
    { label: "Gatitos", value: "gatito", color: "bg-orange-200", ring: "ring-orange-200", icon: "/machos-gatos.svg" },
    { label: "Gatitas", value: "gatita", color: "bg-yellow-200", ring: "ring-yellow-200", icon: "/Hembras-gatos.svg" },
];

const Modal: React.FC<ModalProps> = ({ dog, onClose }) => {
    // Buscar el color basado en el tipo de mascota
    const filter = data.find((filter) => filter.value === dog.tipo);
    const bgColor = filter ? filter.color : "bg-white"; // Usa el color encontrado o un color blanco por defecto

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className={`${bgColor} p-6 max-w-lg mx-auto relative m-2 w-full md:w-auto rounded-lg`}>
                <button
                    className="absolute top-2 right-2 text-gray-600 z-[100]"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                {/* Contenedor con scroll si es necesario */}
                <div className="overflow-y-auto max-h-[500px] md:max-h-fit">
                    <h2 className="text-xl font-bold mb-4">{dog.nombre} · {dog.edad}</h2>
                    <ImageCarousel
                        images={Array.isArray(dog.imagenes) ? dog.imagenes : [dog.imagenes]}
                    />
                    <p className="text-sm my-6 "><strong className={`text-2xl ${justAnotherHand.className}`}>Carácter:</strong><br /> {dog.caracter}</p>
                    <p className="text-sm mb-4"><strong className={`text-2xl ${justAnotherHand.className}`}>Mi historia:</strong><br /> {dog.historia}</p>
                </div>
                {/* Botón en la parte inferior */}
                <button
                    className="bg-teal-500 text-white px-4 py-2 rounded-full w-full mt-4"
                    onClick={() => handleAdoptClick(onClose)}
                >
                    Quiero adoptar a {dog.nombre}
                </button>
            </div>
        </div>
    );
};


export const DogList: React.FC<DogListProps> = ({ dogs, title }) => {
    const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

    return (
        <div className="mb-8 px-3 max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dogs.map((dog) => {
                    const filter = data.find((filter) => filter.value === dog.tipo);
                    const bgColor = filter ? `${filter.color}` : "bg-gray-100";

                    return (
                        <Card key={dog.id} className={`${bgColor} cursor-pointer`}>
                            <CardContent onClick={() => setSelectedDog(dog)}>
                                {dog.imagenes && (
                                    <ImageCarousel
                                        images={Array.isArray(dog.imagenes) ? dog.imagenes : [dog.imagenes]}
                                    />
                                )}
                                <div className="flex justify-center items-center">
                                    <p className={`text-2xl md:text-3xl text-black ${justAnotherHand.className}`}>{dog.nombre}</p>
                                    <p className="text-sm text-gray-600 ml-2 mt-1">· {dog.edad}</p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {selectedDog && (
                <Modal dog={selectedDog} onClose={() => setSelectedDog(null)} />
            )}
        </div>
    );
};
