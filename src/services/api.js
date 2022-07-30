import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/apiConstants';

const instance = axios.create({
  baseURL: BASE_URL,
  language: 'en-US',
  params: {
    api_key: API_KEY,
  },
});

export async function getPopularMovies() {
  const response = await instance.get(`/trending/movie/day`);
  return response.data.results;
}

export async function getMoviesByName(query) {
  const response = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return response.data.results;
}

export async function getMoviesById(id) {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
}

export function getMovieCredits(id) {
  const response = instance.get(`/movie/${id}/credits`);
  return response;
}

export function getMovieReviews(id) {
  const response = instance.get(`/movie/${id}/reviews`);
  return response;
}
