import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MovieList } from 'components/MovieList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          {/* <Route path="home" element={<div>HOME</div>} /> */}
          <Route path="movies" element={<div>MOVIES</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};
