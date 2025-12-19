// app/requisitos/page.tsx (o donde lo tengas)
import "animate.css";
import ImageBanner from "@/components/ui/ImageBanner/ImageBanner";

import { getLinksPage, pickByLabel } from "@/lib/linksPage";
import { LinksGroup } from "@/components/Links/LinksGroup";
import Image from "next/image";

export default async function RequisitosPage() {
  const { socialLinks, links } = await getLinksPage();

  const CheckmarkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
      <linearGradient
        id="HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1"
        x1="21.241"
        x2="3.541"
        y1="39.241"
        y2="21.541"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".108" stopColor="#0d7044" />
        <stop offset=".433" stopColor="#11945a" />
      </linearGradient>
      <path
        fill="url(#HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1)"
        d="M16.599,41.42L1.58,26.401c-0.774-0.774-0.774-2.028,0-2.802l4.019-4.019	c0.774-0.774,2.028-0.774,2.802,0L23.42,34.599c0.774,0.774,0.774,2.028,0,2.802l-4.019,4.019	C18.627,42.193,17.373,42.193,16.599,41.42z"
      />
      <linearGradient
        id="HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2"
        x1="-15.77"
        x2="26.403"
        y1="43.228"
        y2="43.228"
        gradientTransform="rotate(134.999 21.287 38.873)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2ac782" />
        <stop offset="1" stopColor="#21b876" />
      </linearGradient>
      <path
        fill="url(#HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2)"
        d="M12.58,34.599L39.599,7.58c0.774-0.774,2.028-0.774,2.802,0l4.019,4.019	c0.774,0.774,0.774,2.028,0,2.802L19.401,41.42c-0.774,0.774-2.028,0.774-2.802,0l-4.019-4.019	C11.807,36.627,11.807,35.373,12.58,34.599z"
      />
    </svg>
  );

  const imageBanner = {
    url: "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1742839505/adoptadog/sliders/req_ikwrok.jpg",
    altText: "Requisitos para adoptar un perrito",
  };

  const linksOnly = pickByLabel(links, ["Contactar por WhatsApp"]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ImageBanner imageUrl={imageBanner.url} altText={imageBanner.altText} className="" />

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
              "Enviar fotos del espacio donde estaría el perrito / gatito.",
              "Cuota de $900 MXN adultos / $1,000 MXN cachorros o su equivalente en donativos en especie por PERRITO / GATITO 🐶😺.",
            ].map((requirement, index) => (
              <li key={index} className="flex items-start">
                <CheckmarkIcon className="h-6 w-6 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
            El perrito se entrega:
          </h2>

          <ul className="space-y-4">
            {["Vacunado", "Desparasitado", "Esterilizado (adulto)", "En el domicilio del adoptante"].map(
              (benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckmarkIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="text-center mb-10 animate__animated animate__backInUp">
        <h2 className="max-w-xs mx-auto font-bold">Cualquier duda, contáctanos:</h2>
      </div>

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
    </div>


        <LinksGroup socialLinks={socialLinks} links={linksOnly} />


      <h2 className="text-lg font-bold mb-2 animate__animated animate__backInUp text-purple-700">
        Conoce nuestro centro
      </h2>

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
          style={{ border: "4px solid white" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
