export const SLUG_TO_TIPO = {
  cachorros: "cachorro",
  hembras: "hembra",
  machos: "macho",
  gatos: "gatito",
  gatas: "gatita",
} as const;

export type CategorySlug = keyof typeof SLUG_TO_TIPO;
export type FilterType = (typeof SLUG_TO_TIPO)[CategorySlug];

export interface Dog {
  id: string;
  documentId?: string;
  nombre: string;
  location?: string;
  likes?: number;
  birthdate: string;         // "08/08/2024"
  tipo: FilterType;          // "cachorro" | "hembra" | ...
  talla?: string;
  historia: string;          // texto plano (convertido)
  caracter: string;          // texto plano (convertido)
  imagenes: string[];        // SIEMPRE array
}
