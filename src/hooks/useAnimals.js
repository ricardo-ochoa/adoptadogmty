import { useStrapi } from "@/hooks/useStrapi";

export function useAnimals({
  page = 1,
  pageSize = 25,
  sort = ["createdAt:desc"],
} = {}) {
  const { data, loading, error, run, reset } = useStrapi(
    "/api/animals",
    {
      params: {
        pagination: { page, pageSize },
        sort,
      },
    },
    [page, pageSize, JSON.stringify(sort)]
  );

  // helpers para tu UI
  const animals = data?.data ?? [];
  const pagination = data?.meta?.pagination ?? null;

  return { animals, pagination, raw: data, loading, error, run, reset };
}
