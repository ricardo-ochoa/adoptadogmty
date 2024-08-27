import Image from 'next/image'
import Link from 'next/link'

export default function Links() {
    return (
        <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center">

            <div className="text-center mb-8">
                <Image
                    src="/placeholder.svg"
                    alt="AdoptADog Logo"
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full bg-white p-2"
                />
                <h1 className="text-2xl font-bold text-purple-700 mb-2">@AdoptADogMTY</h1>
                <p className="text-purple-700 text-sm max-w-xs mx-auto">
                    Centro de Adopciones Creemos en un mundo mejor con respeto y amor a los animales
                </p>
            </div>

            <div className="w-full max-w-md space-y-4">
                <Link href="/adopcion-responsable" className="block">
                    <button className="w-full bg-white text-purple-700 rounded-full py-3 px-4 flex items-center justify-between hover:bg-gray-100 transform transition duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/placeholder.svg" alt="" width={24} height={24} className="mr-3 rounded" />
                            <span>Adopción Responsable</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="/donaciones-paypal" className="block">
                    <button className="w-full bg-white text-purple-700 rounded-full py-3 px-4 flex items-center justify-between hover:bg-gray-100 transform transition duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/placeholder.svg" alt="" width={24} height={24} className="mr-3 rounded" />
                            <span>Donaciones con Paypal</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="/donaciones-paypal" className="block">
                    <button className="w-full bg-white text-purple-700 rounded-full py-3 px-4 flex items-center justify-between hover:bg-gray-100 transform transition duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/placeholder.svg" alt="" width={24} height={24} className="mr-3 rounded" />
                            <span>Donaciones en especie</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="/album-google-drive" className="block">
                    <button className="w-full bg-white text-purple-700 rounded-full py-3 px-4 flex items-center justify-between hover:bg-gray-100 transform transition duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/placeholder.svg" alt="" width={24} height={24} className="mr-3 rounded" />
                            <span>ALBUM - Google Drive</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>

                <Link href="/instagram" className="block">
                    <button className="w-full bg-white text-purple-700 rounded-full py-3 px-4 flex items-center justify-between hover:bg-gray-100 transform transition duration-300 hover:scale-105">
                        <div className="flex items-center">
                            <Image src="/placeholder.svg" alt="" width={24} height={24} className="mr-3 rounded" />
                            <span>Instagram</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>


            <div className="flex gap-8 mt-8">
                <Link href="https://tiktok.com" className="text-white hover:underline transform transition duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </Link>
                <Link href="https://tiktok.com" className="text-white hover:underline transform transition duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </Link>
                <Link href="https://tiktok.com" className="text-white hover:underline transform transition duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}