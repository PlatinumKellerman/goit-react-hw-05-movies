import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/apiConstants';

export async function getPopularMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return response.data.results;
}
