// app/links/page.tsx  (o donde tengas tu página de Links)
import Image from "next/image";
import ShareButton from "@/components/ui/ShareButton";
import "animate.css";

import { getLinksPage } from "@/lib/linksPage";
import { LinksGroup } from "@/components/Links/LinksGroup";

export default async function Links() {
  const { socialLinks, links } = await getLinksPage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <Image
          src="/profilepic.jpg"
          alt="AdoptADog Logo"
          width={120}
          height={120}
          className="mx-auto mb-3 rounded-full bg-white p-2 animate__animated animate__fadeInDown profilePic"
        />

        <h1 className="text-xl font-bold text-purple-700 mb-2 animate__animated animate__fadeInDown animate__delay-1s">
          @AdoptADogMTY
        </h1>

        <p className="text-sm text-purple-700 max-w-xs mx-auto animate__animated animate__fadeInDown animate__delay-1s">
          Centro de Adopciones. Creemos en un mundo mejor con respeto y amor a los animales
        </p>
      </div>

      <ShareButton />

      <LinksGroup socialLinks={socialLinks} links={links} />
    </div>
  );
}
