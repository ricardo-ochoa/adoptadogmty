import { useCallback, useEffect, useRef, useState } from "react";

export function useRequest(fn, deps = [], options = {}) {
  const { immediate = true } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(immediate);

  const abortRef = useRef(null);

  const run = useCallback(async () => {
    // cancela request anterior
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const result = await fn(controller.signal);
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      if (err?.name === "AbortError") return null;
      setError(err);
      setLoading(false);
      return null;
    }
  }, deps);

  const reset = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!immediate) return;
    run();
    return () => abortRef.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, immediate]);

  return { data, error, loading, run, reset };
}
