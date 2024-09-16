// Definir un tipo para los filtros
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card/Card"
import { ImageCarousel } from "../ui/CarouselComponent";
import { Badge } from "../ui/Badge/Badge";
import { Dog } from "@/lib/types";

type FilterType = 'cachorro' | 'hembra' | 'macho';

interface DogListProps {
    dogs: Dog[];
    title: string;
}

export const DogList: React.FC<DogListProps> = ({ dogs, title }) => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogs.map((dog) => (
                <Card key={dog.id} className="w-full">
                    <CardHeader>
                        <CardTitle>{dog.nombre}</CardTitle>
                        <CardDescription>
                            <Badge variant="secondary" className="mr-2">{dog.tipo}</Badge>
                            <Badge variant="outline">{dog.talla}</Badge>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {dog.imagenes && (
                            <ImageCarousel
                                images={Array.isArray(dog.imagenes) ? dog.imagenes : [dog.imagenes]}
                            />
                        )}
                        <p className="text-sm text-gray-600 mb-2">{dog.edad}</p>
                        <p className="text-sm">{dog.historia}</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm font-semibold">{dog.caracter}</p>
                    </CardFooter>
                    {dog.texto_especial && (
                        <div className="px-6 pb-4">
                            <p className="text-sm italic text-blue-600">{dog.texto_especial}</p>
                        </div>
                    )}
                </Card>
            ))}
        </div>
    </div>
);