import { useEffect, useState } from 'react';
import { getMovieCast } from '../../search-films-api';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const movieCast = await getMovieCast(movieId);
        setCast(movieCast.data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <div>
      {cast && (
        <ul>
          {cast.map(cast => {
            <li key={cast.cast_id}>
              <h4>{cast.name}</h4>
              <p>{cast.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt="actor photo"
              />
            </li>;
          })}
        </ul>
      )}
      {loading && <Loader />}
      {error && <p>Please restart the page</p>}
    </div>
  );
}
