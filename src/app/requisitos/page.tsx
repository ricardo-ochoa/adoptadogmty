import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';

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

    const CheckmarkIcon = ({ className }: { className?: string }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <linearGradient id="HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1" x1="21.241" x2="3.541" y1="39.241" y2="21.541" gradientUnits="userSpaceOnUse">
                <stop offset=".108" stopColor="#0d7044"></stop>
                <stop offset=".433" stopColor="#11945a"></stop>
            </linearGradient>
            <path fill="url(#HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1)" d="M16.599,41.42L1.58,26.401c-0.774-0.774-0.774-2.028,0-2.802l4.019-4.019	c0.774-0.774,2.028-0.774,2.802,0L23.42,34.599c0.774,0.774,0.774,2.028,0,2.802l-4.019,4.019	C18.627,42.193,17.373,42.193,16.599,41.42z"></path>
            <linearGradient id="HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2" x1="-15.77" x2="26.403" y1="43.228" y2="43.228" gradientTransform="rotate(134.999 21.287 38.873)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2ac782"></stop>
                <stop offset="1" stopColor="#21b876"></stop>
            </linearGradient>
            <path fill="url(#HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2)" d="M12.58,34.599L39.599,7.58c0.774-0.774,2.028-0.774,2.802,0l4.019,4.019	c0.774,0.774,0.774,2.028,0,2.802L19.401,41.42c-0.774,0.774-2.028,0.774-2.802,0l-4.019-4.019	C11.807,36.627,11.807,35.373,12.58,34.599z"></path>
        </svg>
    )

    const links = [
        {
            href: "https://api.whatsapp.com/send?phone=5218116028654&text=Hola%20quiero%20contactar%20con%20AdoptADog%20MTY",
            imageSrc: 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1726503771/whatsapp_wgas9n.png',
            altText: "WhatsApp",
            text: "Contactar por WhatsApp"
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
                <div className="max-w-3x mb-8">
                    <div className="px-6 py-8">
                        <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
                            REQUISITOS PARA ADOPTAR
                        </h1>

                        <ul className="space-y-6">
                            {[
                                <span key="survey">
                                    Llenar
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScrPt4pwYgOByXzmKwuBN3ZhPJ1WN4tjCH4pHlSaZtlo7JnHA/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline ml-1"
                                    >
                                        encuesta de adopción.
                                    </a>
                                </span>,
                                "Enviar fotos del espacio donde estaría el perrito.",
                                "Cuota de $800 MXN o su equivalente en donativos en especie por PERRITO 🐶.",
                            ].map((requirement, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckmarkIcon className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{requirement}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
                            El perrito se entrega:
                        </h2>

                        <ul className="space-y-4">
                            {[
                                "Vacunado",
                                "Desparasitado",
                                "Esterilizado (adulto)",
                                "En el domicilio del adoptante",
                            ].map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckmarkIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-10 animate__animated animate__backInUp">
                    <h2 className=" max-w-xs mx-auto font-bold">
                        Cualquier duda, contáctanos:
                    </h2>
                </div>

                <div className="flex gap-8 mb-8 animate__animated animate__backInUp">
                    {socialLinks.map((social, index) => (
                        <SocialLink key={index} {...social} />
                    ))}
                </div>

                <div className="w-full max-w-md space-y-3 mb-10 px-8 lg:px-0 animate__animated animate__backInUp">
                    {links.map((link, index) => (
                        <LinkButton key={index} {...link} />
                    ))}
                </div>

                <h2 className="text-lg font-bold mb-2 animate__animated animate__backInUp text-purple-700">
                    Conoce nuestro centro</h2>
                <a
                    href="https://maps.app.goo.gl/qyqY3MjcjQvN1r1Y8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline animate__animated animate__backInUp"
                >
                    <p className="text-sm text-gray-600 mb-4">Ave. Valle Real, Carr. a San Roque, 67280 N.L.</p>
                </a>
                <div className="w-full max-w-lg animate__animated animate__backInUp p-2 mb-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4534.758680226316!2d-100.16064018819075!3d25.610724977352938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c329d6b5f039%3A0xac768f652534c0f6!2sADOPTADOG!5e1!3m2!1ses-419!2smx!4v1726299050986!5m2!1ses-419!2smx"
                        className="w-full md:w-[500px] h-[250px]"
                        style={{ border: '4px solid white' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Links;