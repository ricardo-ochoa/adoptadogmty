"use client";
import React, { useEffect, useMemo, useState } from "react";
import Filters from "./Filters";
import { DogList } from "./DogList";
import { useAdoptionCategories } from "@/hooks/useAdoptionCategories";

const SLUG_TO_TIPO = {
  cachorros: "cachorro",
  hembras: "hembra",
  machos: "macho",
  gatos: "gatito",
  gatas: "gatita",
};

export default function FiltersList({ dogProfiles = [] }) {
  const { categories, loading } = useAdoptionCategories({ sort: ["id:asc"] });

  const [selectedFilter, setSelectedFilter] = useState("cachorro");

  console.log("dogProfiles:", dogProfiles);

  // si quieres que el default sea la primera categoría de Strapi:
  useEffect(() => {
    if (!categories?.length) return;
    const firstTipo = SLUG_TO_TIPO[categories[0].slug];
    if (firstTipo) setSelectedFilter(firstTipo);
  }, [categories]);

  const filteredDogs = useMemo(() => {
    return dogProfiles.filter((dog) => dog?.tipo === selectedFilter);
  }, [dogProfiles, selectedFilter]);

  return (
    <div className="p-1">
      <Filters
        categories={categories}
        selectedFilter={selectedFilter}
        setFilter={setSelectedFilter}
      />

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DogList dogs={filteredDogs} title="Resultados" />
      )}
    </div>
  );
}
