import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import { Container } from 'components/Container';
import { Title, ListItem, StyledLink, LoaderWrapper } from './Home.styled';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/index';

export function Home() {
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
      <LoaderWrapper>
        <Title>Trending today</Title>
        {isLoading && <Loader />}
      </LoaderWrapper>

      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <ListItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </ListItem>
          ))}
        </ul>
      )}
    </Container>
  );
}
