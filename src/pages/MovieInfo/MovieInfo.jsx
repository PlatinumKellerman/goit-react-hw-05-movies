import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMoviesById } from '../../services/api';

export function MovieInfo() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const releaseDate = new Date(movie.release_date).getFullYear();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        await getMoviesById(movieId).then(data => setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };
    movieInfo();
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></img>
        <h3>
          {movie.title}
          <span>({releaseDate})</span>
        </h3>
        <p>User Score: {`${Number(movie.vote_average).toFixed(1) * 10}%`}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>

        <h3>Genres</h3>
        <p>
          {movie.genres
            ? movie.genres.map(genre => genre.name).join(', ')
            : 'There are no genres!'}
        </p>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
