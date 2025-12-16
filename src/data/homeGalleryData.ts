// src/data/homeGalleryData.ts
export type HomeGalleryData = {
  title: string;
  subtitle: string;
  images: string[];
};

export async function fetchHomeGallery(): Promise<HomeGalleryData> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
  const url = `${baseUrl}/api/home-gallery?populate[gallery][populate]=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch home-gallery: ${res.status}`);

  const json = await res.json();

  const gallery = json?.data?.gallery ?? [];
  const first = gallery[0] ?? {};

  const title = typeof first?.Title === "string" ? first.Title : "";
  const subtitle = typeof first?.subtitle === "string" ? first.subtitle : "";

  const imagesRaw = Array.isArray(first?.images) ? first.images : [];

  const images = imagesRaw
    .map((img: any) => {
      const u =
        img?.formats?.medium?.url ??
        img?.formats?.small?.url ??
        img?.url;

      if (typeof u !== "string" || !u) return null;
      return u.startsWith("http") ? u : `${baseUrl}${u}`;
    })
    .filter((u: string | null): u is string => Boolean(u));

  return { title, subtitle, images };
}



// import Papa from 'papaparse';

// interface GalleryImage {
//   id: string;
//   title: string;
//   description?: string;
//   url: string | string[]; // URL de la imagen o lista de URLs en caso de múltiples imágenes
// }

// export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
//   const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTsaL5P7m6Ka5sb6s41zpLNNAsZHTtG4qbnmyUqYGtlCLkL125-Q3pRtOZDqi3P-dtHE__FzqgLAJa4/pub?output=csv');
//   const csvData = await response.text();

//   return new Promise((resolve, reject) => {
//     Papa.parse<GalleryImage>(csvData, {
//       header: true,
//       complete: (results) => {
//         const galleryImages: GalleryImage[] = results.data.map((image) => ({
//           ...image,
//           url: convertUrlsToArray(image.url), // Convierte la URL en un array si hay múltiples URLs separadas por comas
//         }));
//         resolve(galleryImages);
//       },
//       error: (error: { message: any; }) => reject(error.message),
//     });
//   });
// };

// // Convertir la propiedad 'url' en un array si está separada por comas
// const convertUrlsToArray = (url: string | string[]): string[] => {
//   if (typeof url === 'string') {
//     return url.split(',').map(img => img.trim()); // Divide por comas y elimina espacios en blanco
//   }
//   return url; // Si ya es un array, lo devuelve tal cual
// };
