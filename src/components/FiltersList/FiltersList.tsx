'use client'; // Indicar que es un componente del cliente
import { useState } from 'react';
import Filters from './Filters';
import { DogList } from './DogList';

// Definir un tipo para los filtros
type FilterType = 'cachorro' | 'hembra' | 'macho';

interface Dog {
    id: string;
    tipo: string;
    nombre: string;
    edad: string;
    talla: string;
    historia: string;
    caracter: string;
    texto_especial?: string;
    imagenes: string | string[];
}

interface ClientComponentProps {
    dogProfiles: Dog[];
}

export const FiltersList = ({ dogProfiles }: ClientComponentProps) => {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('cachorro');

    // Filtros para dividir a las mascotas
    const cachorros = dogProfiles.filter((dog: Dog) => dog.tipo === "cachorro");
    const hembras = dogProfiles.filter((dog: Dog) => dog.tipo === "hembra");
    const machos = dogProfiles.filter((dog: Dog) => dog.tipo === "macho");

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Lomitos y gatitos <span className="text-teal-500">disponibles</span>
            </h1>
            {/* Filtros */}
            <Filters selectedFilter={selectedFilter} setFilter={setSelectedFilter} />

            {/* Listado de mascotas filtradas */}
            {selectedFilter === "cachorro" && <DogList dogs={cachorros} title="Cachorros" />}
            {selectedFilter === "hembra" && <DogList dogs={hembras} title="Hembras" />}
            {selectedFilter === "macho" && <DogList dogs={machos} title="Machos" />}
        </div>
    );
};
