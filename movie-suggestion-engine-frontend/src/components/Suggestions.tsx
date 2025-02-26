import React, { useState } from 'react';
import usePosterImages from '../hooks/getPosterImages';

export interface Movie {
  Release_year: number;
  genres: string[];
  id: number;
  predicted_rating: number;
  title: string;
  vote_average: number;
}

interface SuggestionsProps {
  suggestions: Movie[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  const [visibleCount, setVisibleCount] = useState(20);
  const { data: posters, isLoading, error } = usePosterImages(suggestions); // Fetch movies only when shouldFetch is true

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 20);
  };

  // const lowerCaseTitle = (title: string) => {
  //   return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  // };

  return (
    <main className='suggestions'>
      <h2 className="suggestions-header">Suggestions</h2>
      <div className="suggestions-container">
        {suggestions.length > 0 ? (
          <>
            <div className="suggestions-grid">
              {suggestions.slice(0, visibleCount).map((movie) => (
                <div key={movie.id} className="suggestion-item">
                  {posters && posters[movie.id] && (
                    <a
                    href={`https://www.themoviedb.org/movie/${movie.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className='suggestion-item-img' src={posters[movie.id]} alt={movie.title} />
                  </a>                  )}
                  <strong>{movie.title}</strong> ({movie.Release_year})
                  <div>Public Rating: {movie.vote_average.toFixed(1)}</div>
                  <div>Your Predicted Rating: {movie.predicted_rating.toFixed(1)}</div>
                </div>
              ))}
            </div>
            {visibleCount < suggestions.length && (
              <button className='show-more-suggestions-btn' onClick={showMore}>Show More</button>
            )}
          </>
        ) : (
          <p>No suggestions yet. Enter your Letterboxd URL to get started!</p>
        )}
      </div>
    </main>
  );
};

export default Suggestions;