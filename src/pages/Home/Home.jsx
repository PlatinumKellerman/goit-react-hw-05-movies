import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import { Container } from 'Layout/common/Container';
import { Title, LoaderWrapper } from './Home.styled';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/index';
import { MovieList } from '../../components/MovieList/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    getMovies();
    setIsLoading(true);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        movies && <MovieList movies={movies} location={location} />
      )}
    </Container>
  );
}

export default Home;
