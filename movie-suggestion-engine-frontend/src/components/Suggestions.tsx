import React, { useState } from 'react';
import usePosterImages from '../hooks/getPosterImages';

export interface Movie {
  title: string;
  id: number;
  vote_average: number;
  predicted_rating: number;
  Release_year: string;
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
                    <img className='suggestion-item-img' src={posters[movie.id]} alt={movie.title} />
                  )}
                  <strong>{movie.title}</strong> ({new Date(movie.Release_year).getFullYear()})
                  <div>Rating: {movie.predicted_rating}</div>                
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