import { Just_Another_Hand } from "next/font/google";
import Link from 'next/link'; // Importar el componente Link

// Importar la fuente
const justAnotherHand = Just_Another_Hand({
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
        <p className={'paragraph'}>
          Adopta un <strong><u>perrito o gatito</u></strong> y dale un hogar lleno de amor.
          Cumple con los <strong><u>requisitos</u></strong> de adopción para asegurar una vida feliz para tu nueva mascota.
          También puedes apoyar nuestro proyecto con{' '}
          <Link href="/links">
            <strong><u>donaciones</u></strong>
          </Link>, ayudándonos a continuar brindando
          cuidados y encontrando hogares para más animales.
        </p>
        <p className={'finalText'}>
          ¡Encuentra a tu mejor amigo y haz la diferencia!
        </p>
      </section>
    </>
  );
}
