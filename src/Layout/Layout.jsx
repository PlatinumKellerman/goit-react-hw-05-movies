import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './common/Header';
import { Container } from './common/Container';

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
