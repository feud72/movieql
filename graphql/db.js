import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yts-proxy.now.sh/',
});

export const getMovies = async (limit = 20, rating = 0) => {
  const {
    data: {
      data: {movies},
    },
  } = await api.get('list_movies.json', {
    params: {
      limit: limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getDetail = async id => {
  const {
    data: {
      data: {movie},
    },
  } = await api.get('movie_details.json', {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: {movies},
    },
  } = await api.get('movie_suggestions.json', {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
