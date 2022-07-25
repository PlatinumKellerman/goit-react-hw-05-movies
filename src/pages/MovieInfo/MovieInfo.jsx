import { useEffect, useState, useSearchParams } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export function MovieInfo() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  return (
    <>
      <div>{movieId}</div>
    </>
  );
}
