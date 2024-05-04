import { getFilmDetails } from '../../search-films-api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

export default function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const details = await getFilmDetails(movieId);
        setMovieDetails(details.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  return (
    <div className={css.details}>
      {movieDetails && (
        <div className={css.detailsContainer}>
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
            alt="movie poster"
          />
          <h2>
            {movieDetails.title} (
            {movieDetails.release_date.slice(
              0,
              movieDetails.release_date.indexOf('-')
            )}
            )
          </h2>
          <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>

          <b>Owerview</b>
          <p>{movieDetails.overview}</p>
          <b>Genres</b>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      )}
      <h3> Aditional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
      {loading && <Loader />}
      {error && <p>Please restart the page</p>}
    </div>
  );
}
