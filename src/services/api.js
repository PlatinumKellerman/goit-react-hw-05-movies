import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/apiConstants';

export async function getPopularMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

export async function getMoviesByName(movieName) {
  const response = await axios.get(`${BASE_URL}/search/movie?`, {
    params: {
      query: movieName,
      page: 1,
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.results;
}

export async function getMoviesById(id) {
  const response = await axios.get(`${BASE_URL}/search/movie/${id}?`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.results;
}
