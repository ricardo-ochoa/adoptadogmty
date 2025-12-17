// src/data/headerSliderData.ts
export type HeaderSliderData = {
  desktop: { url: string; alt?: string }[];
  mobile: { url: string; alt?: string }[];
};

export async function fetchHeaderSlider(): Promise<HeaderSliderData> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
  const url = `${baseUrl}/api/header-slider?populate[header_slider][populate]=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch header-slider: ${res.status}`);

  const json = await res.json();
  const slides = json?.data?.header_slider ?? [];

  const pickUrl = (img: any) =>
    img?.formats?.large?.url ??
    img?.formats?.medium?.url ??
    img?.formats?.small?.url ??
    img?.url;

  const toAbs = (u: string) => (u.startsWith("http") ? u : `${baseUrl}${u}`);

  const desktop = slides
    .flatMap((slide: any) => (Array.isArray(slide?.images) ? slide.images : []))
    .map((img: any) => {
      const u = pickUrl(img);
      if (typeof u !== "string" || !u) return null;
      return { url: toAbs(u), alt: img?.alternativeText ?? undefined };
    })
    .filter(Boolean) as { url: string; alt?: string }[];

  const mobile = slides
    .flatMap((slide: any) => (Array.isArray(slide?.imagesMobile) ? slide.imagesMobile : []))
    .map((img: any) => {
      const u = pickUrl(img);
      if (typeof u !== "string" || !u) return null;
      return { url: toAbs(u), alt: img?.alternativeText ?? undefined };
    })
    .filter(Boolean) as { url: string; alt?: string }[];

  return { desktop, mobile };
}
