import Papa from 'papaparse';
import { Dog, FilterType } from '../lib/types'; // Importa tus tipos

interface DogProfile {
  id: string;
  tipo: string; // Este sigue siendo string aquí
  nombre: string;
  edad: string;
  talla: string;
  historia: string;
  caracter: string;
  texto_especial?: string;
  imagenes: string | string[];
}

export const fetchDogProfiles = async (): Promise<Dog[]> => {
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS8DHojRvP7AlPtiKv5xK_8T0fmfb2PM-YqRseoQW1cEq7Z7GCkoOXJzbJlQ5cIZUeKpLzkxpFkAVFg/pub?output=csv');
  const csvData = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse<DogProfile>(csvData, {
      header: true,
      complete: (results) => {
        const dogProfiles: Dog[] = results.data.map((profile) => ({
          ...profile,
          tipo: convertToFilterType(profile.tipo), // Conversión segura a FilterType
          imagenes: convertImagesToArray(profile.imagenes), // Convierte imágenes a array
        }));

        resolve(dogProfiles);
      },
      error: (error: { message: any }) => reject(error.message),
    });
  });
};

// Convertir 'tipo' en 'FilterType'
const convertToFilterType = (tipo: string): FilterType => {
  const validTypes: FilterType[] = ['cachorro', 'hembra', 'macho', 'gatito', 'gatita'];

  const sanitizedTipo = tipo.trim().toLowerCase() as FilterType; // Normaliza y fuerza el tipo

  if (!validTypes.includes(sanitizedTipo)) {
    console.warn(`Tipo no válido encontrado: "${tipo}". Se asignará 'cachorro' por defecto.`);
    return 'cachorro'; // Valor por defecto si el tipo no es válido
  }

  return sanitizedTipo;
};




// Convertir la propiedad 'imagenes' en un array si está separada por comas
const convertImagesToArray = (imagenes: string | string[] | undefined): string[] => {
  if (!imagenes) return []; // Si está vacío o undefined, retorna un array vacío

  if (typeof imagenes === 'string') {
    return imagenes.split(',').map(img => img.trim());
  }

  return imagenes;
};
