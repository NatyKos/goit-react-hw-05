import { getFilmDetails } from '../../search-films-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

export default function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmDetails } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const details = await getFilmDetails(filmDetails);
        setMovieDetails(details.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [filmDetails]);

  return (
    <div className={css.detailsContainer}>
      {movieDetails && <h2>{movieDetails.title}</h2>}
      {loading && <Loader />}
      {error && <p>Please restart the page</p>}
    </div>
  );
}
