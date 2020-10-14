const jsonDbContext = require("./json-context.js");

exports.findAllMovies = () => {
  return jsonDbContext.movies.findAll();
};

exports.findMovieById = (id) => {
  return jsonDbContext.movies.findById(id);
};

exports.createMovie = (movie) => {
  return jsonDbContext.movies.create(movie);
};

exports.updateMovie = (movie) => {
  return jsonDbContext.movies.update(movie);
};

exports.deleteMovie = (id) => {
  return jsonDbContext.movies.delete(id);
};

exports.findAllMoviesByGenre = (genre) => {
  let movies = jsonDbContext.movies.findAll();
  let moviesByCategory = movies.filter((movie) => {
    return movie.genre == genre;
  });
  return moviesByCategory;
};
