"use client";
import React, { useEffect, useMemo, useState } from "react";
import Filters from "./Filters";
import { DogList } from "./DogList";
import { useAdoptionCategories } from "@/hooks/useAdoptionCategories";
import { Dog } from "@/lib/types";
import { Caveat } from "next/font/google";

const justAnotherHand = Caveat({ weight: "400", subsets: ["latin"] });

const SLUG_TO_TIPO = {
  cachorros: "cachorro",
  hembras: "hembra",
  machos: "macho",
  gatos: "gatito",
  gatas: "gatita",
} as const;

type Tipo = (typeof SLUG_TO_TIPO)[keyof typeof SLUG_TO_TIPO];
const TIPOS = Object.values(SLUG_TO_TIPO) as Tipo[];
const isTipo = (v: string): v is Tipo => (TIPOS as readonly string[]).includes(v);

type DogProfileInput = {
  id?: string;
  nombre?: string;
  edad?: number;
  birthdate?: string;
  tipo: string;
  talla?: string;
  historia?: string;
  caracter?: string;
  imagenes?: string[];
};

export default function FiltersList({
  dogProfiles = [],
  heading,
}: {
  dogProfiles: DogProfileInput[];
  heading?: string;
}) {
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
        tipo: dog.tipo as Tipo,
        talla: dog.talla ?? "",
        historia: dog.historia ?? "",
        caracter: dog.caracter ?? "",
        imagenes: dog.imagenes ?? [],
      }));
  }, [dogProfiles, selectedFilter]);

  const { mainText, highlightText } = useMemo(() => {
    const fallback = "Perritos y gatitos disponibles";
    const text = (heading?.trim() || fallback).replace(/\s+/g, " ");
    const idx = text.lastIndexOf(" ");
    if (idx === -1) return { mainText: text, highlightText: "" };
    return { mainText: text.slice(0, idx), highlightText: text.slice(idx + 1) };
  }, [heading]);

  return (
    <div className="p-1">
      <h1 className={`${justAnotherHand.className} title my-8 text-center`}>
        {mainText}{" "}
        {highlightText ? <span className="highlight">{highlightText}</span> : null}
      </h1>

      <Filters
        categories={categories.map((category, index) => ({
          id: index.toString(),
          name: SLUG_TO_TIPO[category.slug] ?? category.slug,
          slug: category.slug,
        }))}
        selectedFilter={selectedFilter}
        setFilter={(filter: string) => {
          if (isTipo(filter)) setSelectedFilter(filter);
        }}
      />

      {loading ? <p>Cargando...</p> : <DogList dogs={filteredDogs} title="Listos para adoptar" />}
    </div>
  );
}
