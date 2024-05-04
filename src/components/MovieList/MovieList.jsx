import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li className={css.listItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
