import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { getMoviesByName } from '../../services/api';
import { MovieList } from '../../components/MovieList/index';

export function Movies() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const name = movieName.movieName;
    if (name === '' || name === null) return;
    async function moviesByName() {
      try {
        await getMoviesByName(name).then(data => {
          setMovies(data);
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (name) {
      moviesByName();
    }
  }, [movieName]);

  const handleMovieNameSubmit = searchName => {
    if (searchName) {
      setMovieName(searchName);
    }
  };
  return (
    <>
      <SearchForm onSubmit={handleMovieNameSubmit} />
      <MovieList movies={movies} />
    </>
  );
}
