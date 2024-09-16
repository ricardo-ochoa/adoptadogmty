'use client'
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import { useState } from 'react';

interface LinkButtonProps {
    href: string;
    imageSrc: string;
    altText: string;
    text: string;
}

interface ShareModalProps {
    url: string;
    socialTypes: string[];
    style?: React.CSSProperties;
    isOpen?: boolean;
    onClose?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, imageSrc, altText, text }) => (
    <Link href={href} className="block" target="_blank" rel="noopener noreferrer">
        <button className="w-full px-1 bg-white text-purple-700 border-white border-2 rounded-full py-1 flex items-center justify-between hover:border-purple-700 hover:border-2 transform transition duration-300 hover:scale-105">
            <div className="flex items-center">
                {typeof imageSrc === 'string' ? (
                    <Image src={imageSrc} alt={altText} width={40} height={40} className="mr-3 rounded" />
                ) : (
                    <div className="mr-3">{imageSrc}</div>
                )}
                <p className='text-sm'>{text}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </button>
    </Link>
);

interface SocialLinkProps {
    href: string;
    icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
    <Link href={href} className="group relative" target="_blank" rel="noopener noreferrer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#7e22ce"
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
        >
            <path d={icon} />
        </svg>
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {new URL(href).hostname.split('.')[1]}
        </span>
    </Link>
);

const Links = () => {
    const [isOpen, setIsOpen] = useState(false)
    const links = [
        {
            href: "https://api.whatsapp.com/send?phone=5218116028654&text=Hola%20quiero%20contactar%20con%20AdoptADog%20MTY",
            imageSrc: '/links/whatsApp.png',
            altText: "WhatsApp",
            text: "Contactar por WhatsApp"
        },
        {
            href: "https://docs.google.com/forms/d/e/1FAIpQLScrPt4pwYgOByXzmKwuBN3ZhPJ1WN4tjCH4pHlSaZtlo7JnHA/viewform",
            imageSrc: "/links/adopcion.png",
            altText: "Adopción Responsable",
            text: "Adopción Responsable"
        },
    ];

    const socialLinks = [
        { href: "https://www.instagram.com/adoptadogmty/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
        { href: "https://www.tiktok.com/@adoptadogmty", icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" },
        { href: "https://www.facebook.com/adoptadogmty", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
    ];

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center mb-10">
                    <Image
                        src="/profilepic.jpg"
                        alt="AdoptADog Logo"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 rounded-full bg-white p-2 animate__animated animate__fadeInDown profilePic"
                    />
                    <h1 className="text-xl font-bold text-purple-700 mb-2 animate__animated animate__fadeInDown animate__delay-1s">@AdoptADogMTY</h1>
                    <p className="text-sm text-purple-700 max-w-xs mx-auto animate__animated animate__fadeInDown animate__delay-1s">
                        Centro de Adopciones. Creemos en un mundo mejor con respeto y amor a los animales
                    </p>
                </div>

                <div className="flex gap-8 mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                    {socialLinks.map((social, index) => (
                        <SocialLink key={index} {...social} />
                    ))}
                </div>

                <div className="w-full max-w-md space-y-3 mb-10 px-8 lg:px-0 animate__animated animate__backInUp animate__delay-1s">
                    {links.map((link, index) => (
                        <LinkButton key={index} {...link} />
                    ))}
                </div>

                {/* Sección con título, subtítulo y mapa */}
                <h2 className="text-lg font-bold mb-2 animate__animated animate__backInUp animate__delay-2s text-purple-700">
                    Conoce nuestro centro</h2>
                <a
                    href="https://maps.app.goo.gl/qyqY3MjcjQvN1r1Y8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline animate__animated animate__backInUp animate__delay-2s"
                >
                    <p className="text-sm text-gray-600 mb-4">Ave. Valle Real, Carr. a San Roque, 67280 N.L.</p>
                </a>
                <div className="w-full max-w-lg animate__animated animate__backInUp animate__delay-2s p-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4534.758680226316!2d-100.16064018819075!3d25.610724977352938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c329d6b5f039%3A0xac768f652534c0f6!2sADOPTADOG!5e1!3m2!1ses-419!2smx!4v1726299050986!5m2!1ses-419!2smx"
                        className="w-full md:w-[500px] h-[250px]"
                        style={{ border: '4px solid white' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Links;