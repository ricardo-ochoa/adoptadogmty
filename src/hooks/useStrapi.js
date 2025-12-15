import { useMemo } from "react";
import { useRequest } from "./useRequest";
import { strapiRequest } from "@/lib/strapiRequest"; // ajusta path si lo necesitas

export function useStrapi(path, options = {}, deps = []) {
  // memo para que no se regenere a cada render
  const requestFn = useMemo(() => {
    return (signal) => strapiRequest(path, { ...options, signal });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, JSON.stringify(options), ...deps]);

  // Por default: GET se ejecuta inmediato, otros métodos no
  const immediate = (options.method || "GET").toUpperCase() === "GET";

  return useRequest(requestFn, [requestFn], { immediate });
}
