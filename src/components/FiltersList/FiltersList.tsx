"use client";
import React, { useEffect, useMemo, useState } from "react";
import Filters from "./Filters";
import { DogList } from "./DogList";
import { useAdoptionCategories } from "@/hooks/useAdoptionCategories";
import { Dog } from "@/lib/types";

const SLUG_TO_TIPO = {
  cachorros: "cachorro",
  hembras: "hembra",
  machos: "macho",
  gatos: "gatito",
  gatas: "gatita",
} as const;

// 👇 union de valores: "cachorro" | "hembra" | ...
type Tipo = (typeof SLUG_TO_TIPO)[keyof typeof SLUG_TO_TIPO];

const TIPOS = Object.values(SLUG_TO_TIPO) as Tipo[];
const isTipo = (v: string): v is Tipo => (TIPOS as readonly string[]).includes(v);

type DogProfileInput = {
  id?: string;
  nombre?: string;
  edad?: number;
  birthdate?: string;
  tipo: string; // viene de CMS/API como string
  talla?: string;
  historia?: string;
  caracter?: string;
  imagenes?: string[];
};


export default function FiltersList({ dogProfiles = [] }: { dogProfiles: DogProfileInput[] }) {
  const { categories, loading }: { categories: { slug: keyof typeof SLUG_TO_TIPO }[]; loading: boolean } =
    useAdoptionCategories({ sort: ["id:asc"] });

  const [selectedFilter, setSelectedFilter] = useState<Tipo>("cachorro");

  useEffect(() => {
    if (!categories?.length) return;
    const firstTipo = SLUG_TO_TIPO[categories[0].slug];
    setSelectedFilter(firstTipo);
  }, [categories]);

  const filteredDogs = useMemo<Dog[]>(() => {
    return dogProfiles
      .filter((dog) => isTipo(dog.tipo) && dog.tipo === selectedFilter)
      .map((dog) => ({
        id: dog.id ?? "",
        nombre: dog.nombre ?? "",
        edad: dog.edad ?? 0,
        birthdate: dog.birthdate ?? "",
        tipo: dog.tipo as Tipo, // 👈 ya es Tipo por el type-guard
        talla: dog.talla ?? "",
        historia: dog.historia ?? "",
        caracter: dog.caracter ?? "",
        imagenes: dog.imagenes ?? [],
      }));
  }, [dogProfiles, selectedFilter]);

  return (
    <div className="p-1">
      <Filters
        categories={categories.map((category, index) => ({
          id: index.toString(),
          name: SLUG_TO_TIPO[category.slug] ?? category.slug,
          slug: category.slug,
        }))}
        selectedFilter={selectedFilter}
        setFilter={(filter: string) => {
          if (isTipo(filter)) {
            setSelectedFilter(filter);
          }
        }}
      />

      {loading ? <p>Cargando...</p> : <DogList dogs={filteredDogs} title="Resultados" />}
    </div>
  );
}
