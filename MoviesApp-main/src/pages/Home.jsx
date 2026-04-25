import { useState, useMemo } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../data/moviesData';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const processedMovies = useMemo(() => {
    let result = [...moviesData];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(movie =>
        movie.title.toLowerCase().includes(term) ||
        movie.director.toLowerCase().includes(term)
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'year') {
        return a.year - b.year;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

    return result;
  }, [searchTerm, sortBy]);

  return (
    <div className="home-page">
      <div className="page-header">
        <h1>Discover Movies</h1>
        <p>Browse our collection of popular films</p>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by title or director..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
      <div className="movies-grid">
        {processedMovies.length > 0 ? (
          processedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="no-results">No movies found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Home;