import styled from 'styled-components';
import { GoBackLinkStyled } from '../../components/GoBackLink/GoBackLink.styled';

const NotFoungPage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: red;
`;

function PageNotFound() {
  return (
    <>
      <GoBackLinkStyled to={'/'}>{'<'} Go back</GoBackLinkStyled>
      <NotFoungPage> Sorry, page not found! </NotFoungPage>;
    </>
  );
}

export default PageNotFound;
