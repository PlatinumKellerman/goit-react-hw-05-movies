import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMoviesById } from '../../services/api';
import { GoBackLinkStyled } from '../../components/GoBackLink/GoBackLink.styled';
import poster_plug from '../../img/poster_plug.jpg';
import { useNavigate } from 'react-router-dom';
import {
  Poster,
  MainInfoWrapper,
  InfoWrapper,
  UserScoreText,
  Title,
  TitleYear,
  AddInfoItem,
  AddInfoLink,
  AddInfoWrapper,
  AddInfoList,
  PosterPlug,
} from './MovieDetails.styled';

function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const releaseDate = new Date(movie.release_date).getFullYear();

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
      <GoBackLinkStyled to={backLinkHref}>{'<'} Go back</GoBackLinkStyled>
      <div>
        <MainInfoWrapper>
          {movie.poster_path ? (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            ></Poster>
          ) : (
            <PosterPlug src={poster_plug} alt="Poster Plug"></PosterPlug>
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

        <AddInfoWrapper>
          <h3>Additional information</h3>
          <AddInfoList>
            <AddInfoItem>
              <AddInfoLink to="credits" state={{ from: location }}>
                {'>'} Cast
              </AddInfoLink>
            </AddInfoItem>
            <AddInfoItem>
              <AddInfoLink to="reviews" state={{ from: location }}>
                {'>'} Reviews
              </AddInfoLink>
            </AddInfoItem>
          </AddInfoList>
        </AddInfoWrapper>
      </div>
      <Outlet />
    </main>
  );
}

export default MovieDetails;
