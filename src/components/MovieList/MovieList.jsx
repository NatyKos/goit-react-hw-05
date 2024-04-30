import css from './MovieList.module.css';

export default function MovieList(movies) {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </ul>
  );
}
