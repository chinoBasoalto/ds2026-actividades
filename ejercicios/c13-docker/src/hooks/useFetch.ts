import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error al obtener los datos (${res.status})`);
          }
          return res.json();
        })
        .then((data: T) => {
          setData(data);
          setLoading(false);
        })
        .catch((err: Error) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [url]);

  return { data, loading, error };
}