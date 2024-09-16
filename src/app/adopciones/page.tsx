import React from 'react'
import { fetchDogProfiles } from '../../data/petsdata'
import { FiltersList } from '@/components/FiltersList/FiltersList'


// Componente de servidor que obtiene los datos
const List = async () => {
    const dogProfiles = await fetchDogProfiles(); // Obtener los datos directamente del servidor

    return (
        <FiltersList dogProfiles={dogProfiles} />
    );
};

export default List;
