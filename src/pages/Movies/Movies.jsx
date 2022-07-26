import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { getMoviesByName } from '../../services/api';
import { MovieList } from '../../components/MovieList/index';
import { useLocation, useSearchParams } from 'react-router-dom';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (name === '' || name === null) return;
    async function moviesByName() {
      try {
        const response = await getMoviesByName(name);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    }
    if (name) {
      moviesByName();
    }
  }, [name]);

  const handleMovieNameSubmit = name => {
    if (name) {
      setSearchParams(name);
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleMovieNameSubmit} />
      {movies && <MovieList movies={movies} location={location} />}
    </>
  );
}
