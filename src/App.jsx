import { Movies } from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { MovieInfo } from 'pages/MovieInfo/MovieInfo';
import { MovieCredits } from './components/MovieCredits/MovieCredits';
import { Reviews } from './components/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
