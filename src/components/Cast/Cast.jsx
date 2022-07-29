import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/index';
import {
  CreditsList,
  CreditsImage,
  CreditsItem,
  ActorPlug,
  CreditsPlug,
} from './Cast.styled';
import actor_plug from '../../img/actor_plug.jpg';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCredits(response.data.cast);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieCredits();
    setIsLoading(true);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {credits.length > 0 ? (
        <CreditsList>
          {credits.slice(0, 20).map(({ id, name, profile_path, character }) => (
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
        <CreditsPlug> We don't have any cast for this movie. </CreditsPlug>
      )}
    </>
  );
}

export default Cast;
