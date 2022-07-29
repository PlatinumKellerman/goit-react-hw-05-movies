import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieInfo = lazy(() => import('./pages/MovieInfo/MovieInfo'));
const MovieCredits = lazy(() =>
  import('./components/MovieCredits/MovieCredits')
);
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            <Route path="credits" element={<MovieCredits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
