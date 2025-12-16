// src/data/adoption.ts
export async function fetchAdoptionHeading(): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
  const url = `${baseUrl}/api/adopcion?populate=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch adoption heading: ${res.status}`);

  const json = await res.json();

  // Tu respuesta viene como: json.data.Title[0].Heading
  const titleArray = json?.data?.Title ?? [];
  const heading = titleArray.find((t: any) => typeof t?.Heading === "string")?.Heading;

  return typeof heading === "string" ? heading : "";
}
