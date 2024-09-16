import PetFace from "@/components/PetFace/PetFace";
import Link from 'next/link'; // Importar el componente Link
import { Caveat } from "next/font/google";

// Importar la fuente
const justAnotherHand = Caveat({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <section className={'homeContainer'}>
        <h1 className={`${justAnotherHand.className} title`}>
          Los amigos se <span className={'highlight'}>adoptan</span>, no se compran
        </h1>
        <p className="paragraph">
          Adopta un <Link href="/adopciones"> <u className="hover:text-purple-700"><strong>perrito o gatito</strong></u></Link> y dale un hogar lleno de amor.
          Cumple con los <Link href="/requisitos"><u className="hover:text-purple-700"><strong>requisitos</strong></u></Link> de adopción para asegurar una vida feliz para tu nueva mascota.
          También puedes apoyar nuestro proyecto con{' '}
          <Link href="/links">
            <u className="hover:text-purple-700"><strong>donaciones</strong></u>
          </Link>, ayudándonos a continuar brindando cuidados y encontrando hogares para más animales.
        </p>
        <p className={'finalText highlight'}>
          ¡Encuentra a tu mejor amigo y haz la diferencia!
        </p>
        <PetFace />
      </section >
    </>
  );
}
