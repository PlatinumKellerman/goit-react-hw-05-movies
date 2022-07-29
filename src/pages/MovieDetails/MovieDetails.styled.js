import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainInfoWrapper = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Poster = styled.img`
  width: 250px;
  height: auto;
`;

export const PosterPlug = styled.img`
  width: 250px;
  height: auto;
`;

export const UserScoreText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

export const TitleYear = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-left: 5px;
`;

export const AddInfoWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const AddInfoList = styled.ul`
  margin-bottom: 20px;
`;

export const AddInfoItem = styled.li`
  text-decoration: none;
  margin-bottom: 5px;
`;

export const AddInfoLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #551a8b;
  &:hover {
    color: blueviolet;
  }
`;
