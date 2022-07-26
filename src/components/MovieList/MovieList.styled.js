import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListItem = styled.li`
  list-style: inside;
  text-decoration: none;
  margin-bottom: 5px;
`;

export const MovieListLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover {
    color: blueviolet;
  }
`;
