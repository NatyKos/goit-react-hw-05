import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Layout from '../Layout/Layout';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<p> REVIEWS</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
