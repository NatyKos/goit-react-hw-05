import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
// import { MovieDetailsPage } from '../../pages/MovieDetailsPage';
// import { MoviePage } from '../../pages/MoviesPage';
// import { NotFaundPage } from '../../pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/movie" element={<MoviePage />} />
      <Route path="*" element={<NotFaundPage />} /> */}
    </Routes>
  );
}
