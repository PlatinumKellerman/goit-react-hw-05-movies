import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import { toast } from 'react-toastify';
import { ReviewPlug } from './Reviews.styled';
import { Loader } from '../../components/Loader/index';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.data.results);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieReviews();
    setIsLoading(true);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <ReviewPlug> We don't have any reviews for this movie. </ReviewPlug>
        )}
      </ul>
    </>
  );
}

export default Reviews;
