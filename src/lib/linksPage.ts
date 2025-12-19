// lib/linksPage.ts
export type UISocialLink = {
  id: number;
  href: string;
  iconSrc: string;
  altText: string;
  label: string; // lo usamos para filtrar y para tooltip
};

export type UILinkButton = {
  id: number;
  href: string;
  imageSrc: string;
  altText: string;
  text: string; // aquí normalmente coincide con label
};

type StrapiFile = {
  url: string;
  alternativeText?: string | null;
  name?: string;
};

type StrapiLink = {
  id: number;
  label: string;
  href: string;
  socialMedia: boolean | null;
  icon?: StrapiFile | null;
};

type StrapiResponse = {
  data: {
    Links: StrapiLink[];
  };
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

function toAbsoluteUrl(maybeRelativeUrl?: string | null) {
  if (!maybeRelativeUrl) return "";
  if (maybeRelativeUrl.startsWith("http")) return maybeRelativeUrl;
  return `${STRAPI_URL}${maybeRelativeUrl}`;
}

export async function getLinksPage() {
  const res = await fetch(`${STRAPI_URL}/api/links-page?populate[Links][populate]=*`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Strapi error: ${res.status}`);

  const json = (await res.json()) as StrapiResponse;
  const all = json.data?.Links ?? [];

  const socialLinks: UISocialLink[] = all
    .filter((l) => l.socialMedia === true)
    .map((l) => ({
      id: l.id,
      href: l.href,
      iconSrc: toAbsoluteUrl(l.icon?.url),
      altText: l.icon?.alternativeText ?? l.label,
      label: l.label,
    }))
    .filter((l) => l.iconSrc);

  const links: UILinkButton[] = all
    .filter((l) => l.socialMedia !== true) // null/false => botones
    .map((l) => ({
      id: l.id,
      href: l.href,
      imageSrc: toAbsoluteUrl(l.icon?.url),
      altText: l.icon?.alternativeText ?? l.label,
      text: l.label,
    }))
    .filter((l) => l.imageSrc);

  return { socialLinks, links };
}

/** Helpers para filtrar (por label o por id) */
export function pickByLabel<T extends { label?: string; text?: string }>(
  items: T[],
  allowed: string[],
  opts?: { caseInsensitive?: boolean }
) {
  const caseInsensitive = opts?.caseInsensitive ?? true;
  const allowedSet = new Set(
    caseInsensitive ? allowed.map((x) => x.toLowerCase()) : allowed
  );

  return items.filter((item) => {
    const key = (item as any).label ?? (item as any).text ?? "";
    const normalized = caseInsensitive ? String(key).toLowerCase() : String(key);
    return allowedSet.has(normalized);
  });
}

export function omitByLabel<T extends { label?: string; text?: string }>(
  items: T[],
  denied: string[],
  opts?: { caseInsensitive?: boolean }
) {
  const caseInsensitive = opts?.caseInsensitive ?? true;
  const deniedSet = new Set(caseInsensitive ? denied.map((x) => x.toLowerCase()) : denied);

  return items.filter((item) => {
    const key = (item as any).label ?? (item as any).text ?? "";
    const normalized = caseInsensitive ? String(key).toLowerCase() : String(key);
    return !deniedSet.has(normalized);
  });
}

export function pickById<T extends { id: number }>(items: T[], allowedIds: number[]) {
  const allowedSet = new Set(allowedIds);
  return items.filter((item) => allowedSet.has(item.id));
}
