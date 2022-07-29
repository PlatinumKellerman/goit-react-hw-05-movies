import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../components/Header';
import { Container } from '../components/Container';

export const Layout = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Header />
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
