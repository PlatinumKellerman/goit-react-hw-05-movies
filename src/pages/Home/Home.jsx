import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/api';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const movies = async () => {
      try {
        await getPopularMovies().then(data => setMovies(data));
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
