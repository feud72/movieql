import {getMovies, getDetail, getSuggestions} from './db';

const resolvers = {
  Query: {
    movies: (_, {limit, rating}) => getMovies(limit, rating),
    movie: (_, {id}) => getDetail(id),
    movieSuggestions: (_, {id}) => getSuggestions(id),
  },
};

export default resolvers;
