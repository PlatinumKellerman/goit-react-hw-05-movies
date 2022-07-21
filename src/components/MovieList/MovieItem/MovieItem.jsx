import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../../services/api';

export function MovieItem() {
  const [movies, setMovies] = useState([]);

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

  return movies.map(({ title, id }) => {
    return (
      <>
        <li key={id}>{title}</li>
      </>
    );
  });
}
