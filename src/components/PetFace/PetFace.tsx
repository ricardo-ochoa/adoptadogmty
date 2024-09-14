"use client"
import { Caveat } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const justAnotherHand = Caveat({
    weight: '400',
    subsets: ['latin'],
});

interface PetProfileProps {
    name: string;
    age: string;
    imageSrc: string;
    className?: string;
    isMobile: boolean;
}

const PetProfile: React.FC<PetProfileProps> = ({ name, age, imageSrc, className = '', isMobile }) => (
    <div className={`flex flex-col items-center ${isMobile ? 'w-full' : 'w-1/3'} px-2 ${className}`}>
        <h1 className={`text-2xl font-bold mb-1 ${justAnotherHand.className} animate__animated animate__fadeInUp animate__delay-1s`}>{name}</h1>
        <p className="text-md text-teal-500 mb-1 animate__animated animate__fadeInUp animate__delay-1s">{age}</p>
        <Image
            src={imageSrc}
            alt={name}
            width={150}
            height={150}
            className="rounded-lg object-cover animate__animated animate__fadeInUp"
        />
    </div>
);

export default function Component() {
    const pets = [
        { name: "Blackie", age: "5 meses", imageSrc: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726264782/blacky_qwop9e.png" },
        { name: "Chanel", age: "9 meses", imageSrc: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726264782/chanel_dvxcls.png" },
        { name: "Ross", age: "3 meses", imageSrc: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726264782/ross_y12kqt.png" },
        { name: "Amber", age: "6 meses", imageSrc: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726272778/Mesa_de_trabajo_1_copia_5_aq5lh1.png" },
        { name: "Chandler", age: "3 meses", imageSrc: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726272779/Mesa_de_trabajo_1_copia_3_nrig4g.png" },
        { name: "Emilia", age: "2 años", imageSrc: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726272779/Mesa_de_trabajo_1_copia_4_jgkvsr.png" },
    ];

    const [currentGroup, setCurrentGroup] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es móvil o no
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Define 768px como el umbral para dispositivos móviles
        };

        handleResize(); // Ejecutar cuando se carga el componente
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Limpiar el event listener al desmontar
    }, []);
    // Cambiar grupo de mascotas en intervalos de 5 segundos en pantallas grandes
    useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                setCurrentGroup((prevGroup) => (prevGroup + 1) % 2); // Alterna entre grupo 0 y 1
            }, 5000); // Cambiar cada 5 segundos

            return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
        }
    }, [isMobile]);

    // Cambiar mascota en dispositivos móviles
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentGroup((prevIndex) => (prevIndex + 1) % pets.length);
            }, 5000); // Cambiar cada 5 segundos

            return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
        }
    }, [isMobile, pets.length]);

    const petGroup = currentGroup === 0 ? pets.slice(0, 3) : pets.slice(3); // Grupo de tres mascotas


    return (
        <div className="petFaceFixed relative flex justify-center items-center">
            {isMobile ? (
                // Mostrar solo una mascota en dispositivos móviles
                <PetProfile
                    {...pets[currentGroup]}
                    className=""
                    isMobile={isMobile}
                />
            ) : (
                // Mostrar las tres mascotas en pantallas grandes
                <>
                    {petGroup.map((pet, index) => (
                        <PetProfile
                            key={index}
                            {...pet}
                            className={index === 1 ? "relative z-20 transform scale-150 -translate-y-12" : ""}
                            isMobile={isMobile}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
