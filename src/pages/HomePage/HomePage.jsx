import { useEffect } from 'react';
import { searchFilms } from '../../search-films-api';

export default function HomePage() {
  useEffect(() => {
    async function fetchFilms() {
      const trendingFilms = await searchFilms();
      return trendingFilms.data.results;
    }
    fetchFilms();
  }, []);
  return <h1>Trending today</h1>;
}
