const VALID_TYPES = ["cachorro", "hembra", "macho", "gatito", "gatita"];

const SLUG_TO_TIPO: Record<string, string> = {
  cachorros: "cachorro",
  hembras: "hembra",
  machos: "macho",
  gatos: "gatito",
  gatas: "gatita",
};

const STRAPI_URL = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchDogProfiles() {
  if (!STRAPI_URL) throw new Error("Falta STRAPI_URL en .env.local");

  // 👇 QUITA populate=* (tu Strapi ya te regresa photos y category)
  const url = `${STRAPI_URL}/api/animals?populate=*&pagination[page]=1&pagination[pageSize]=1000`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Error GET ${url}: ${res.status}\n${body}`);
  }

  const json = await res.json();
  return (json?.data ?? []).map(mapStrapiAnimalToDog);
}

function mapStrapiAnimalToDog(row: any) {
  const a = row?.attributes ? row.attributes : row;

  const categorySlug = a?.category?.slug || a?.categorySlug;
  const tipo = normalizeTipo(categorySlug || a?.tipo);

  const imagenes = normalizeImages(a?.photos, STRAPI_URL);

  return {
    id: String(a?.id ?? row?.id ?? ""),
    documentId: a?.documentId ?? "",

    // 👇 IMPORTANTE: agrega tipo para tus filtros UI
    tipo,

    nombre: a?.name ?? "",
    location: a?.location ?? "",
    likes: a?.likes ?? 0,

    // tu UI usa calcularEdad(dog.birthdate) (o dog.edad)
    edad: a?.birthdate ?? "",
    birthdate: a?.birthdate ?? "",

    caracter: richTextToPlain(a?.caracter),
    historia: richTextToPlain(a?.mi_historia),

    imagenes,

    category: a?.category
      ? { id: a.category.id, name: a.category.name, slug: a.category.slug }
      : null,
  };
}

function normalizeTipo(value: any) {
  if (!value) return "cachorro";
  const v = String(value).trim().toLowerCase();
  const maybe = SLUG_TO_TIPO[v] || v;

  if (!VALID_TYPES.includes(maybe)) return "cachorro";
  return maybe;
}

function normalizeImages(photos: any, baseUrl: string | undefined) {
  if (!photos) return [];
  const base = (baseUrl || "").replace(/\/+$/, "");

  if (Array.isArray(photos)) {
    return photos
      .map((p) => p?.url || p?.formats?.thumbnail?.url)
      .filter(Boolean)
      .map((u) => (u.startsWith("http") ? u : `${base}${u.startsWith("/") ? u : `/${u}`}`));
  }

  if (Array.isArray(photos?.data)) {
    return photos.data
      .map((p: any) => p?.attributes?.url || p?.url)
      .filter(Boolean)
      .map((u: string) => (u.startsWith("http") ? u : `${base}${u.startsWith("/") ? u : `/${u}`}`));
  }

  return [];
}

function richTextToPlain(value: any) {
  if (!value) return "";
  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value
      .map((block) =>
        Array.isArray(block?.children)
          ? block.children.map((ch: any) => ch?.text || "").join("")
          : ""
      )
      .join("\n")
      .trim();
  }

  return "";
}
