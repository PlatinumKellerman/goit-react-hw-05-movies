import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

/* <Header>
  <Logo>
    <span role="img" aria-label="computer icon">
      💻
    </span>{' '}
    GoMerch Store
  </Logo>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
  </nav>
</Header>; */
