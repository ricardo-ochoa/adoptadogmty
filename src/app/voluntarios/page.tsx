"use client";
import React from 'react';
import { Caveat } from 'next/font/google';
import { Download, PhoneOutgoing } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const justAnotherHand = Caveat({
    weight: '400',
    subsets: ['latin'],
});

export default function QuieresSerVoluntario() {


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/MANUAL DEL VOLUNTARIO_ ADOPTADOG.pdf';
        link.download = 'MANUAL DEL VOLUNTARIO_ ADOPTADOG.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const sections = [
        {
            title: "¿Cómo ayudar?",
            items: [
                "Ofreciendo hogar temporal",
                "Donando en especie o económicamente",
                "Difundiendo a través de redes los casos que tenemos",
                "Ayudando en traslados"
            ]
        },
        {
            title: "Hogar Temporal",
            items: [
                "La familia provee hogar temporal el tiempo que puedan ofrecer",
                "Mínimo 1 semana",
                "Nosotros proveemos lo que sea necesario",
                "Se mantiene constante contacto para cerciorarse de que todo está en orden"
            ]
        },
        {
            title: "Actividades en PETCO",
            items: [
                "Alimentar a los perritos en caso de ser necesario.",
                "Dar informes sobre la AC.",
                "Invitar a las personas a ser voluntarios.",
                "Enseñar el álbum de los rescatados.",
                "Limpiar el área antes de salir.",
                "Entregar las llaves y control de aire acondicionado."
            ]
        },
        {
            title: "Jornadas de Esterilización",
            items: [
                "Estar en 1 de los diferentes puestos que se asignan al llegar.",
                "Mínimo 2h."
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8" style={{ maxWidth: "920px", margin: "0 auto" }}>
            <h1 className={`${justAnotherHand.className} title my-8 text-center`}>Voluntarios en <span className="highlight">AdoptADog</span></h1>
            <p className="text-xl text-center mb-10" >¡Bienvenido a nuestra comunidad de voluntarios! Si tienes el deseo de marcar una diferencia en la vida de los animales y ser parte de una labor que impacta positivamente, aquí encontrarás varias maneras de involucrarte.</p>
            <p className="text-md text-center mb-10" >¡Descarga el Manual del Voluntario y únete a esta gran misión! Cada aporte cuenta, y juntos podemos hacer la diferencia.</p>


            <button
                onClick={handleDownload}
                className={twMerge(clsx(
                    "flex items-center justify-center",
                    "px-4 py-2 mb-8 mx-auto",
                    "bg-pink-600 text-white rounded-md",
                    "hover:bg-pink-700 transition-colors duration-300",
                    "mb-20"
                ))}
            >
                <Download className="mr-2" size={20} />
                Descargar Manual del Voluntario
            </button>
            {/* <button
                className={twMerge(clsx(
                    "flex items-center justify-center",
                    "px-4 py-2 mb-8 mx-auto",
                    "bg-pink-600 text-white rounded-md",
                    "hover:bg-pink-700 transition-colors duration-300",
                    "mb-20",
                ))}
            >
                <PhoneOutgoing className="mr-2" size={20} />
                Contactar
            </button> */}

            <Accordion>
                {sections.map((section, index) => (
                    <AccordionItem key={index} title={section.title}>
                        <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
