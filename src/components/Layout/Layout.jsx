import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Container } from '../Container';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
