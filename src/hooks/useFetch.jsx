import { useState, useEffect } from "react";
import { fetchMoviesFromApi } from "../services/api";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; 
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchMoviesFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong",err);
      });
  }, [url]);

  return { data, loading, error };
};
