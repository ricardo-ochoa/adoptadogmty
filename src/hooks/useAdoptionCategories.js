import { useStrapi } from "@/hooks/useStrapi";

export function useAdoptionCategories({
  page = 1,
  pageSize = 25,
  sort = ["name:asc"],
} = {}) {
  const { data, loading, error, run, reset } = useStrapi(
    "/api/adoption-categories",
    {
      params: {
        pagination: { page, pageSize },
        sort,
      },
    },
    [page, pageSize, JSON.stringify(sort)]
  );

  const categories = data?.data ?? [];
  const pagination = data?.meta?.pagination ?? null;

  // útil para <select>
  const options = categories.map((c) => ({
    value: c.slug,     // o c.id si prefieres
    label: c.name,
    id: c.id,
    slug: c.slug,
  }));

  return { categories, options, pagination, raw: data, loading, error, run, reset };
}
