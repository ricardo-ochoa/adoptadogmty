import React from 'react';
import { fetchDogProfiles } from '../../data/petsdata';
import FiltersList from '@/components/FiltersList/FiltersList';

const List = async () => {
    const dogProfiles = await fetchDogProfiles();
    console.log("Fetched dogProfiles in page.tsx:", dogProfiles);

    return <FiltersList dogProfiles={dogProfiles} />;
};

export default List;
