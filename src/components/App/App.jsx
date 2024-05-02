import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Layout from '../Layout/Layout';
// import { MovieDetailsPage } from '../../pages/MovieDetailsPage';
// import MoviesPage from '../../pages/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movie" element={<MoviesPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
