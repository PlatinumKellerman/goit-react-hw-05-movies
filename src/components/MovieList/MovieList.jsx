export function MovieList(props) {
  return (
    <ul>
      {props.movies.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
