// types.ts
export type FilterType = 'cachorro' | 'hembra' | 'macho' | 'gatito' | 'gatita';

export interface Dog {
  id: string;
  tipo: FilterType;
  nombre: string;
  edad: string;
  talla: string;
  historia: string;
  caracter: string;
  texto_especial?: string;
  imagenes: string | string[];
}
