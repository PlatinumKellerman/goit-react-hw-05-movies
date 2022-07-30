import { MovieListItem, MovieListLink } from './MovieList.styled';

export function MovieList({ movies, location }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MovieListItem key={id}>
          <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieListLink>
        </MovieListItem>
      ))}
    </ul>
  );
}
