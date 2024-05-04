import { getRequestedFilm } from '../../search-films-api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
// import css from './MoviePage.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [requestedFilm, setRequestedFilm] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    async function searchMovie() {
      try {
        setLoading(true);
        const searchFilm = await getRequestedFilm(searchParams.get('query'));
        if (searchFilm.data.results.length === 0) {
          return alert('Sorry, we can not find your film');
        }
        setRequestedFilm(searchFilm.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchMovie();
  }, [searchParams]);

  const handleSubmit = input => {
    setSearchParams({ query: input });
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {requestedFilm.length > 0 && <MovieList movies={requestedFilm} />}
      {loading && <Loader />}
      {error && <p>Please restart the page</p>}
    </>
  );
}
