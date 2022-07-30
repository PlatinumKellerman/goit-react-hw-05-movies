import {
  AddInfoWrapper,
  AddInfoList,
  AddInfoItem,
  AddInfoLink,
} from './MovieActions.styled';

export function MovieActions({ location }) {
  return (
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
  );
}
