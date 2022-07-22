import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBar = styled.header`
  padding: 10px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
  &.active {
    background-color: skyblue;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blueviolet;
  }
`;
