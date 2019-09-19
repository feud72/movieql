import axios from 'axios';

const baseURL = 'https://yts-proxy.now.sh/list_movies.json';

export const getMovies = async (limit = 20, rating = 0) => {
  const {
    data: {
      data: {movies},
    },
  } = await axios.get(baseURL, {
    params: {
      limit: limit,
      minimum_rating: rating,
    },
  });
  return movies;
};
