"use client";
import { useState, useEffect } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import PetFace from "@/components/PetFace/PetFace";
import Link from 'next/link';
import { Caveat } from "next/font/google";
import "lightgallery.js/dist/css/lightgallery.css";
import { fetchGalleryImages } from "@/data/homeGalleryData";

// Importar la fuente
const justAnotherHand = Caveat({
  weight: '400',
  subsets: ['latin'],
});

const PhotoItem = ({ image, group }: { image: string; group: string }) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image}>
      <img src={image} alt="Gallery Item" style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos en el cliente
    setIsClient(true);

    const loadImages = async () => {
      try {
        const images = await fetchGalleryImages();
        // Extrae las URLs de las imágenes
        const imageUrls = images.flatMap(img => Array.isArray(img.url) ? img.url : [img.url]);
        setGalleryImages(imageUrls);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <>
      <section className="homeContainer">
        <h1 className={`${justAnotherHand.className} title`}>
          Los amigos se <span className="highlight">adoptan</span>, no se compran
        </h1>
        <p className="paragraph">
          Adopta un <Link href="/adopciones"><u className="hover:text-purple-700"><strong>perrito o gatito</strong></u></Link> y dale un hogar lleno de amor.
          Cumple con los <Link href="/requisitos"><u className="hover:text-purple-700"><strong>requisitos</strong></u></Link> de adopción para asegurar una vida feliz para tu nueva mascota.
          También puedes apoyar nuestro proyecto con{' '}
          <Link href="/links"><u className="hover:text-purple-700"><strong>donaciones</strong></u></Link>,
          ayudándonos a continuar brindando cuidados y encontrando hogares para más animales.
        </p>
        <p className="finalText highlight">
          ¡Encuentra a tu mejor amigo y haz la diferencia!
        </p>

        <div>
          <h2 className={`${justAnotherHand.className} title mt-40`}>
            Descubre nuestras historias y atrévete a <span className="highlight">adoptar</span>
          </h2>

          {/* Solo renderizar la galería en el cliente */}
          {isClient && (
            <LightgalleryProvider>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {galleryImages.map((image, idx) => (
                  <PhotoItem key={idx} image={image} group="imagnesHomeGallery" />
                ))}
              </div>
            </LightgalleryProvider>
          )}
        </div>

        {/* <PetFace /> */}
      </section>
    </>
  );
}
