import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yts-proxy.now.sh/list_movies.json',
});

export const getMovies = async (limit = 20, rating = 0) => {
  const {
    data: {
      data: {movies},
    },
  } = await axios.get('https://yts-proxy.now.sh/list_movies.json', {
    params: {
      limit: limit,
      minimum_rating: rating,
    },
  });
  return movies;
};
