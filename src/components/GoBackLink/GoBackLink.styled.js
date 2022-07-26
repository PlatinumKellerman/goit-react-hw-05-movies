import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLinkStyled = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  &:hover,
  :focus,
  :active {
    color: blueviolet;
  }
`;
