'use client'
import React, { useState } from 'react';
import Filters from './Filters';
import { DogList } from './DogList';
import { Dog, FilterType } from '../../lib/types';
import { Caveat } from "next/font/google";

// Importar la fuente
const justAnotherHand = Caveat({
    weight: '400',
    subsets: ['latin'],
});

interface FiltersListProps {
    dogProfiles: Dog[]; // Aquí defines que se espera un array de objetos Dog
}

const FiltersList: React.FC<FiltersListProps> = ({ dogProfiles }) => {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('cachorro');

    // Filtros para dividir a las mascotas
    const cachorros = dogProfiles.filter((dog: Dog) => dog?.tipo === "cachorro");
    const hembras = dogProfiles.filter((dog: Dog) => dog?.tipo === "hembra");
    const machos = dogProfiles.filter((dog: Dog) => dog?.tipo === "macho");
    const gatitos = dogProfiles.filter((dog: Dog) => dog?.tipo === "gatito");
    const gatitas = dogProfiles.filter((dog: Dog) => dog?.tipo === "gatita");

    return (
        <div className="p-1">
            <h1 className={`${justAnotherHand.className} text-3xl md:text-6xl font-bold text-center mb-4`}>
                Lomitos y gatitos <span className="text-teal-500">disponibles</span>
            </h1>
            {/* Filtros */}
            <Filters selectedFilter={selectedFilter} setFilter={setSelectedFilter} />

            {/* Listado de mascotas filtradas */}
            {selectedFilter === "cachorro" && <DogList dogs={cachorros} title="Cachorros" />}
            {selectedFilter === "hembra" && <DogList dogs={hembras} title="Hembras" />}
            {selectedFilter === "macho" && <DogList dogs={machos} title="Machos" />}
            {selectedFilter === "gatito" && <DogList dogs={gatitos} title="Gatitos" />}
            {selectedFilter === "gatita" && <DogList dogs={gatitas} title="Gatitas" />}
        </div>
    );
};

export default FiltersList;
