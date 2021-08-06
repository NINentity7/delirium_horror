import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const resp = await fetch(url);
    const movieList = await resp.json({});
    setMovies(movieList.results);
  }, [url]);

  useEffect(() => {
    getMovies();
  }, [url, getMovies]);

  return { movies };
};