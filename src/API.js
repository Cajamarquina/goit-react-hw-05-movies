import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTRiOWU0NzYwYjc1NjRlMTBhODBkMGM3MmY1MDY2NSIsInN1YiI6IjY1MzBmMzAwNTFhNjRlMDBlOWQwZDkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F0V2ERrAtsa61fHF3dVDfjZxdlbA-rJZNB3SSptdH8c';
axios.defaults.params = {
  language: 'en-US',
};

export const fetchMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const fetchSearchMovie = async searchValue => {
  const response = await axios.get(`/search/movie?query=${searchValue}`);
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
};