import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calcularEdad(fechaNacimiento: string) {
  // Convertir fecha de formato DD/MM/YYYY a YYYY-MM-DD
  const [dia, mes, año] = fechaNacimiento.split("/");
  const fechaNac = new Date(`${año}-${mes}-${dia}`);
  const fechaActual = new Date();
  
  let años = fechaActual.getFullYear() - fechaNac.getFullYear();
  let meses = fechaActual.getMonth() - fechaNac.getMonth();
  
  // Ajuste si el mes de nacimiento es mayor al mes actual en el mismo año
  if (meses < 0) {
      años--;
      meses += 12;
  }
  
  // Formateo de la salida
  if (años > 0) {
      return años === 1 ? "1 año" : `${años} años`;
  } else {
      return meses === 1 ? "1 mes" : `${meses} meses`;
  }
}