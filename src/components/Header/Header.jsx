"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // if (!mounted) {
  //   return null // Esto evita que se renderice en el servidor
  // }

  return (
    <div className="background-color:'#f6ffff">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo_horizontal.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
                style={{
                  filter: '#38C8CF',
                }}
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/adopciones" className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                    Perritos y gatitos
                </Link>
              </li>
              <li>
                <Link href="/requisitos" className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                    Requisitos
                </Link>
              </li>
              <li>
                <Link href="/voluntarios" className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                  Voluntarios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                    Contacto
                </Link>
              </li>
              <li>
                <Link href="/links" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Donaciones
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md
               text-teal-500 hover:text-teal-500 hover:bg-teal-100
               focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" style={{backgroundColor:"#f6ffff"}}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/adopciones"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-teal-100 transition duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Perritos y gatitos
            </Link>
            <Link
              href="/requisitos"
              className="block px-3 py-2 rounded-md text-base font-medium  text-black hover:bg-teal-100 transition duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Requisitos
            </Link>
            <Link
              href="/voluntarios"
              className="block px-3 py-2 rounded-md text-base font-medium  text-black hover:bg-teal-100 transition duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Voluntarios
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium  text-black hover:bg-teal-100 transition duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Contacto
            </Link>
            <Link
              href="/links"
              className="block px-3 py-2 rounded-md text-base font-medium bg-pink-500 text-white hover:bg-pink-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              onClick={closeMenu}
            >
              Donaciones
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
