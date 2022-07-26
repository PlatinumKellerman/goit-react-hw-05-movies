import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMoviesById } from '../../services/api';
import { GoBackLinkStyled } from '../../components/GoBackLink/GoBackLink.styled';
import {
  Poster,
  MainInfoWrapper,
  InfoWrapper,
  UserScoreText,
  Title,
  TitleYear,
} from './MovieInfo.styled';

export function MovieInfo() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const releaseDate = new Date(movie.release_date).getFullYear();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const response = await getMoviesById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieInfo();
  }, [movieId]);

  return (
    <main>
      <GoBackLinkStyled to={backLinkHref}>← Go back</GoBackLinkStyled>
      <div>
        <MainInfoWrapper>
          {movie.poster_path ? (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            ></Poster>
          ) : (
            'Sorry, no poster found!'
          )}
          <InfoWrapper>
            <Title>
              {movie.title}
              <TitleYear>({releaseDate})</TitleYear>
            </Title>
            <UserScoreText>
              User Score: {`${Number(movie.vote_average).toFixed(1) * 10}%`}
            </UserScoreText>
            <h3>Overview</h3>
            <p>{movie.overview}</p>

            <h3>Genres</h3>
            <p>
              {movie.genres
                ? movie.genres.map(genre => genre.name).join(', ')
                : 'There are no genres!'}
            </p>
          </InfoWrapper>
        </MainInfoWrapper>

        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="credits" state={{ from: location }}>
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
      <Outlet />
    </main>
  );
}
