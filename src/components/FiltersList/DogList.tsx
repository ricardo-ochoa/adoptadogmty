// Definir un tipo para los filtros
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card/Card"
import { ImageCarousel } from "../ui/CarouselComponent";
import { Badge } from "../ui/Badge/Badge";
import { Dog } from "@/lib/types";
import { Caveat } from "next/font/google";

// Importar la fuente
const justAnotherHand = Caveat({
    weight: '400',
    subsets: ['latin'],
});

type FilterType = 'cachorro' | 'hembra' | 'macho';

interface DogListProps {
    dogs: Dog[];
    title: string;
}

const data = [
    { label: "Cachorros", value: "cachorro", color: "red-100", ring: "red", icon: "/cachorros.svg" },
    { label: "Hembras", value: "hembra", color: "pink-200", ring: "pink", icon: "/hembras.svg" },
    { label: "Machos", value: "macho", color: "indigo-200", ring: "indigo", icon: "/machos.svg" },
    { label: "Gatitos", value: "gatito", color: "orange-200", ring: "orange", icon: "/machos-gatos.svg" },
    { label: "Gatitas", value: "gatita", color: "yellow-200", ring: "yellow", icon: "/Hembras-gatos.svg" },
];

export const DogList: React.FC<DogListProps> = ({ dogs, title }) => (
    <div className="mb-8 px-3 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dogs.map((dog) => {
                const filter = data.find((filter) => filter.value === dog.tipo);
                const bgColor = filter ? `bg-${filter.color}` : "bg-gray-100";

                return (
                    <Card key={dog.id} className={`${bgColor} p-1`}>
                        <CardContent>
                            {dog.imagenes && (
                                <ImageCarousel
                                    images={Array.isArray(dog.imagenes) ? dog.imagenes : [dog.imagenes]}
                                />
                            )}
                            <div className="flex justify-center items-center">
                                <p className={`text-2xl md:text-3xl text-black ${justAnotherHand.className}`}>{dog.nombre}</p>
                                <p className="text-sm text-gray-600 ml-2 mt-1">· {dog.edad}</p>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    </div>
);
