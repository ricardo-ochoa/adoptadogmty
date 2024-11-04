"use client";
import { useState, useEffect } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import PetFace from "@/components/PetFace/PetFace";
import Link from 'next/link';
import { Caveat } from "next/font/google";
import "lightgallery.js/dist/css/lightgallery.css";
import { fetchGalleryImages } from "@/data/homeGalleryData";

// Importar la fuente
const justAnotherHand = Caveat({
  weight: '400',
  subsets: ['latin'],
});


export default function Home() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const PhotoItem = ({ image, group }: { image: string; group: string }) => (
    <div style={{
      maxWidth: isMobile ? "150px" : "200px",
      width: isMobile ? "150px" : "200px",
      padding: "5px",
    }}>
      <LightgalleryItem group={group} src={image}>
        <img src={image} alt="Gallery Item" style={{ width: "100%" }} className="animate__animated animate__backInUp" />
      </LightgalleryItem>
    </div>
  );


  useEffect(() => {
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
        <div className={`${isMobile ? "my-12" : "my-20"}`}>
          <h1 className={`${justAnotherHand.className} title`}>
            Somos <span className="highlight">AdoptADog</span>
          </h1>

          <img src="/LogoPrincipal.svg" alt="AdoptADog Logo" className="logo"
            style={{ margin: "0 auto", maxWidth: "200px", marginTop: "20px", marginBottom: "20px" }} />

          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
            <p className={`${isMobile ? "text-md" : "text-lg"} mb-10`}>
              Una A.C sin fines de lucro en
              donde buscamos proveer una segunda
              oportunidad de vida a perritos y gatitos
              que han vivido en situación de calle.
            </p>
            <p className={`${isMobile ? "text-md" : "text-lg"}`} style={{ maxWidth: "920px", margin: "0 auto" }}>
              Tenemos oficialmente un
              año cambiando vidas de
              cientos de animalitos en
              situación de calle.
              <br />
              Estamos comprometidos
              con el bienestar animal y
              contamos con un centro de
              adopciones ubicado en el
              municipio de juárez, ahí
              viven algunos de los
              rescatados. Sin embargo, la
              mayoría se encuentran en
              hogar temporal.
            </p>
          </div>
        </div>

        <div className="mt-20">
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
        </div>

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
                  gap: "5px",
                  maxWidth: "1200px",
                  margin: "0 auto",
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
      </section >
    </>
  );
}
