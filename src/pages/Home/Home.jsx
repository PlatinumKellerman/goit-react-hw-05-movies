import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import { Container } from 'components/Container';
import { Title, ListItem, StyledLink } from './Home.styled';

export function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
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
