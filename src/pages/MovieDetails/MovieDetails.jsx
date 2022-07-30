import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMoviesById } from '../../services/api';
import { GoBackLink } from '../../components/GoBackLink/GoBackLink';
import { useNavigate } from 'react-router-dom';
import { MovieInfoDetail } from '../../components/MovieInfoDetail/MovieInfoDetail';
import { MovieActions } from '../../components/MovieActions/MovieActions';

function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const response = await getMoviesById(movieId);
        setMovie(response);
      } catch (error) {
        if (error) {
          if (error) {
            navigate('/*', { replace: true });
          }
        }
      }
    };
    movieInfo();
  }, [movieId, navigate]);

  return (
    <main>
      <GoBackLink to={backLinkHref}>{'<'} Go back</GoBackLink>
      <MovieInfoDetail movie={movie}></MovieInfoDetail>
      <MovieActions location={location}></MovieActions>
      <Outlet />
    </main>
  );
}

export default MovieDetails;
