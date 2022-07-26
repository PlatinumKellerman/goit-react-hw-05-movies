import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';
import {
  CreditsList,
  CreditsImage,
  CreditsItem,
  ActorPlug,
} from './MovieCredits.styled';
import actor_plug from '../../img/actor_plug.jpg';

export function MovieCredits() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const movieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCredits(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    movieCredits();
  }, [movieId]);

  return (
    <>
      {credits.length > 0 ? (
        <CreditsList>
          {credits.map(({ id, name, profile_path, character }) => (
            <CreditsItem key={id}>
              {profile_path ? (
                <CreditsImage
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              ) : (
                <ActorPlug src={actor_plug} alt="Actor Plug" />
              )}

              <div>
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </div>
            </CreditsItem>
          ))}
        </CreditsList>
      ) : (
        <p> We don't have any cast for this movie. </p>
      )}
    </>
  );
}
