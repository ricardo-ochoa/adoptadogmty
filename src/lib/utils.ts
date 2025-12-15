import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calcularEdad(fechaNacimiento: string) {
  if (!fechaNacimiento || typeof fechaNacimiento !== "string") return "";

  const parts = fechaNacimiento.split(/[\/\-]/);
  if (parts.length !== 3) return "";

  const dia = Number(parts[0]);
  const mes = Number(parts[1]);
  const anio = Number(parts[2]);

  const fechaNac = new Date(anio, mes - 1, dia);
  if (Number.isNaN(fechaNac.getTime())) return "";

  const hoy = new Date();

  let anios = hoy.getFullYear() - fechaNac.getFullYear();
  let meses = hoy.getMonth() - fechaNac.getMonth();

  if (hoy.getDate() < fechaNac.getDate()) meses -= 1;

  if (meses < 0) {
    anios -= 1;
    meses += 12;
  }

  if (anios > 0) return anios === 1 ? "1 año" : `${anios} años`;
  if (meses <= 0) return "0 meses";
  return meses === 1 ? "1 mes" : `${meses} meses`;
}
