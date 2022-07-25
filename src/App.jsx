import { Movies } from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home/Home';
import { MovieInfo } from 'pages/MovieInfo/MovieInfo';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
