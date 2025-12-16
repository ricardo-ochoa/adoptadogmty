"use client";
import { useState, useEffect, useMemo } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { Caveat } from "next/font/google";
import "lightgallery.js/dist/css/lightgallery.css";
import { fetchHomeGallery } from "@/data/homeGalleryData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const justAnotherHand = Caveat({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [homeGalleryTitle, setHomeGalleryTitle] = useState<string>("");
  const [homeGallerySubtitle, setHomeGallerySubtitle] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const galleryTitle =
    homeGalleryTitle?.trim() || "Descubre nuestras historias y atrévete a adoptar";

  const { mainText, highlightText } = useMemo(() => {
    const text = galleryTitle.replace(/\s+/g, " ");
    const idx = text.lastIndexOf(" ");
    if (idx === -1) return { mainText: text, highlightText: "" };
    return { mainText: text.slice(0, idx), highlightText: text.slice(idx + 1) };
  }, [galleryTitle]);

  const PhotoItem = ({ image, group }: { image: string; group: string }) => (
    <div
      style={{
        maxWidth: isMobile ? "150px" : "200px",
        width: isMobile ? "150px" : "200px",
        padding: "5px",
      }}
    >
      <LightgalleryItem group={group} src={image}>
        <img
          src={image}
          alt="Gallery Item"
          style={{ width: "100%" }}
          className="animate__animated animate__backInUp"
        />
      </LightgalleryItem>
    </div>
  );

  useEffect(() => {
    setIsClient(true);

    const loadHomeGallery = async () => {
      try {
        const data = await fetchHomeGallery();
        setHomeGalleryTitle(data.title);
        setHomeGallerySubtitle(data.subtitle);
        setGalleryImages(data.images);
        console.log("Home Gallery:", data);
      } catch (error) {
        console.error("Error loading home gallery:", error);
      }
    };

    loadHomeGallery();
  }, []);


  const images = [
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1745638046/adoptadog/sliders/banner2_soztni.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1758646347/adoptadog/sliders/banner_carrera_r9ftlk.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1758646347/adoptadog/sliders/perritos_ojrvbo.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1742792134/adoptadog/sliders/2_aygxzb.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1742792134/adoptadog/sliders/4_q0haun.jpg" },
  ];

  const imagesMobile = [
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1745638046/adoptadog/sliders/chamobile_n3jvlg.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1758646347/adoptadog/sliders/banner_carrera_mobile_q4vdn3.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1758646347/adoptadog/sliders/perritos_mobile_pii1vk.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1742792972/adoptadog/sliders/2-mobile_f9udf9.jpg" },
    { url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1742792973/adoptadog/sliders/4-mobil_srb3yl.jpg" },
  ];

  const selectedImages = isClient && isMobile ? imagesMobile : images;

  return (
    <>
    <div className="slide-container" style={{ marginBottom: "2rem" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        style={{ padding: "20px" }}
      >
        {selectedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                marginBottom: "30px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <section className="homeContainer">
      
        <div className={`${isMobile ? "my-0" : "my-0"}`}>
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
            {mainText}{" "}
            {highlightText ? (
              <span className="highlight">{highlightText}</span>
            ) : null}
          </h2>
          {homeGallerySubtitle ? (
            <p
              className={`${isMobile ? "text-md" : "text-lg"} mb-10 text-center`}
            >
              {homeGallerySubtitle}
            </p>
          ) : null}


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

      </section >
    </>
  );
}
