// app/contacto/page.tsx
import Image from "next/image";
import ImageBanner from "@/components/ui/ImageBanner/ImageBanner";

import { getLinksPage } from "@/lib/linksPage";
import { LinksGroup } from "@/components/Links/LinksGroup";

export default async function ContactoPage() {
  const { socialLinks, links } = await getLinksPage();

  const imageBanner = {
    url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1742839505/adoptadog/sliders/contacto_itlg10.jpg",
    altText: "Contacto Adoptadog",
  };

  return (
    <>
      <ImageBanner imageUrl={imageBanner.url} altText={imageBanner.altText} className="" />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <Image
            src="/profilepic.jpg"
            alt="AdoptADog Logo"
            width={120}
            height={120}
            className="mx-auto mb-3 rounded-full bg-white p-2 animate__animated animate__fadeInDown profilePic"
          />
          <h1 className="text-xl font-bold text-purple-700 mb-2 animate__animated animate__fadeInDown">
            @AdoptADogMTY
          </h1>
          <p className="text-sm text-purple-700 max-w-xs mx-auto animate__animated animate__fadeInDown">
            Centro de Adopciones. Creemos en un mundo mejor con respeto y amor a los animales
          </p>
        </div>

        <LinksGroup socialLinks={socialLinks} links={links} />

        {/* Sección con título, subtítulo y mapa */}
        <h2 className="text-lg font-bold mb-2 animate__animated animate__backInUp text-purple-700">
          Conoce nuestro centro
        </h2>

        <a
          href="https://maps.app.goo.gl/qyqY3MjcjQvN1r1Y8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:underline animate__animated animate__backInUp"
        >
          <p className="text-sm text-gray-600 mb-4">
            Ave. Valle Real, Carr. a San Roque, 67280 N.L.
          </p>
        </a>

        <div className="w-full max-w-lg animate__animated animate__backInUp p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4534.758680226316!2d-100.16064018819075!3d25.610724977352938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c329d6b5f039%3A0xac768f652534c0f6!2sADOPTADOG!5e1!3m2!1ses-419!2smx!4v1726299050986!5m2!1ses-419!2smx"
            className="w-full md:w-[500px] h-[250px]"
            style={{ border: "4px solid white" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
