import Link from 'next/link';
import Image from 'next/image';

// Página 404 personalizada
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-2">
            <h1 className="text-4xl font-bold mb-4">Así de perdido estaba Romeo</h1>
            <p className="text-gray-600 mb-6">
                Lo sentimos, no pudimos encontrar la página que estabas buscando.
            </p>
            {/* Imagen */}
            <div className='max-w-[450px] flex flex-col items-center justify-center mb-10'>
                <Image
                    src="/romeo.png" // Asegúrate de tener esta imagen en tu carpeta "public"
                    alt="404 Error"
                    width={300}
                    height={300}
                    className="mb-8"
                />
                <p className="text-md mb-4 text-teal-500">ROMEO - 2 años</p>
                <p className="text-md mb-4 text-stone-700">Convive con más perritos, miedoso y timido ya que no han sido pacientes con cariño, pero es muy leal.</p>

                <h2 className="text-xl md:text-2xl font-bold">Hoy busca una familia que le de amor</h2>
            </div>

            {/* Botón para regresar al inicio */}
            <Link href="/">
                <p className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition mb-8">
                    Volver al inicio
                </p>
            </Link>
        </div>
    );
};

export default NotFound;
