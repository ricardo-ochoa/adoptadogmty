import React from "react";
import { fetchDogProfiles } from "../../data/petsdata";
import { fetchAdoptionHeading } from "../../data/adoption";
import FiltersList from "@/components/FiltersList/FiltersList";

const List = async () => {
  const [dogProfiles, heading] = await Promise.all([
    fetchDogProfiles(),
    fetchAdoptionHeading(),
  ]);

  console.log("Fetched dogProfiles in page.tsx:", dogProfiles);
  console.log("Fetched heading:", heading);

  return <FiltersList dogProfiles={dogProfiles} heading={heading} />;
};

export default List;
