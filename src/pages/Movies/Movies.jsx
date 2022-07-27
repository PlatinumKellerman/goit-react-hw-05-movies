import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { getMoviesByName } from '../../services/api';
import { MovieList } from '../../components/MovieList/index';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieWrapper } from './Movies.styled';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/index';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (name === '' || name === null) return;
    async function moviesByName() {
      try {
        const response = await getMoviesByName(name);
        setMovies(response);
        setIsLoading(false);
        if (response.length === 0) {
          toast.error(`Sorry, there are no movies for this request.`);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    }
    if (name) {
      moviesByName();
      setIsLoading(true);
    }
  }, [name]);

  const handleMovieNameSubmit = name => {
    if (name) {
      setSearchParams(name);
    }
  };

  return (
    <MovieWrapper>
      <SearchForm onSubmit={handleMovieNameSubmit} />
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} location={location} />}
    </MovieWrapper>
  );
}
