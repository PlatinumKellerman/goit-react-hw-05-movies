import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const movies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    movies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
