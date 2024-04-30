import { useEffect } from 'react';
import { getTrendingFilms } from '../../search-films-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  useEffect(() => {
    async function trendingFilmsList() {
      const trendingFilms = await getTrendingFilms();
      return trendingFilms.data.results;
    }
    trendingFilmsList();
  }, []);
  return <h1>Trending today</h1>;
}
