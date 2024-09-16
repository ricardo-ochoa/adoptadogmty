import React from 'react';
import { fetchDogProfiles } from '../../data/petsdata';
import FiltersList from '@/components/FiltersList/FiltersList';

const List = async () => {
    const dogProfiles = await fetchDogProfiles();

    return <FiltersList dogProfiles={dogProfiles} />;
};

export default List;
