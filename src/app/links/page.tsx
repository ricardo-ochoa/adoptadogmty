import Image from 'next/image'
import Link from 'next/link'

export default function Links() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="text-center mb-8">
                <Image
                    src="/profilepic.jpg"
                    alt="AdoptADog Logo"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full bg-white p-2"
                />
                <h1 className="text-2xl font-bold text-purple-700 mb-2">@AdoptADogMTY</h1>
                <p className="text-purple-700 text-sm max-w-xs mx-auto">
                    Centro de Adopciones Creemos en un mundo mejor con respeto y amor a los animales
                </p>
            </div>

            <div className="flex gap-8 mb-8">
                <Link href="https://www.instagram.com/adoptadogmty/" className="hover:underline transform transition duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7e22ce" className="w-6 h-6">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </Link>
                <Link href="https://www.tiktok.com/@adoptadogmty" className="text-white hover:underline transform transition duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7e22ce" className="w-6 h-6">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </Link>
                <Link href="https://www.facebook.com/adoptadogmty" className="text-white hover:underline transform transition duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7e22ce" className="w-6 h-6">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </Link>
            </div>

            <div className="w-full max-w-md space-y-3 mb-10 px-3">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScrPt4pwYgOByXzmKwuBN3ZhPJ1WN4tjCH4pHlSaZtlo7JnHA/viewform" className="block"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="
                    w-full px-3 bg-white text-purple-700 
                    border-white border-2
                    rounded-full py-3 flex items-center justify-between
                    hover:border-purple-700 hover:border-2
                     transform transition 
                    duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/links/adopcion.png" alt="" width={50} height={50} className="mr-3 rounded" />
                            <span>Adopción Responsable</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="https://www.paypal.com/paypalme/AdoptadogDonaciones" className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="
                    w-full px-3 bg-white text-purple-700 
                    border-white border-2
                    rounded-full py-3 flex items-center justify-between
                    hover:border-purple-700 hover:border-2
                     transform transition 
                    duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/links/paypal.svg" alt="Donaciones paypal" width={50} height={50} className="mr-3 rounded" />
                            <span>Donaciones con Paypal</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="https://api.whatsapp.com/send?phone=5218116028654&text=Hola%2C%20quiero%20hacer%20una%20donaci%C3%B3n%20en%20especie%20para%20AdoptAdog%2C%20%C2%BFD%C3%B3nde%20los%20puedo%20ver%3F" className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="
                    w-full px-3 bg-white text-purple-700 
                    border-white border-2
                    rounded-full py-3 flex items-center justify-between
                    hover:border-purple-700 hover:border-2
                     transform transition 
                    duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/links/especie.webp" alt="" width={50} height={50} className="mr-3 rounded" />
                            <span>Donaciones en especie</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
                <Link href="https://www.moneypool.mx/p/TZT1z90" className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="
                    w-full px-3 bg-white text-purple-700 
                    border-white border-2
                    rounded-full py-3 flex items-center justify-between
                    hover:border-purple-700 hover:border-2
                     transform transition 
                    duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/links/moneypool.png" alt="" width={50} height={50} className="mr-3 rounded" />
                            <span>Moneypool</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="https://drive.google.com/drive/folders/1-f8K7CEGO_hm5Y_Wu_DSwCf3StHb9qZK" className="block"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="
                    w-full px-3 bg-white text-purple-700 
                    border-white border-2
                    rounded-full py-3 flex items-center justify-between
                    hover:border-purple-700 hover:border-2
                     transform transition 
                    duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/links/album.png" alt="" width={50} height={50} className="mr-3 rounded" />
                            <span>ALBUM - Google Drive</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}