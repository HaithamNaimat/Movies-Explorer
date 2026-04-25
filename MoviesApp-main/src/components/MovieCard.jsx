function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card-header">
        <span className="movie-genre">{movie.genre}</span>
        <span className="movie-rating">{movie.rating}</span>
      </div>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-director">Director: {movie.director}</p>
      <p className="movie-year">Year: {movie.year}</p>
    </div>
  );
}

export default MovieCard;