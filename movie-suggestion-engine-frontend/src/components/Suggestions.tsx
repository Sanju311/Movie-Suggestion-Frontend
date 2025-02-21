import React, { useState } from 'react';

export interface Movie {
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
}

interface SuggestionsProps {
  suggestions: Movie[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  const [visibleCount, setVisibleCount] = useState(20);

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
                  <strong>{movie.title}</strong> ({new Date(movie.release_date).getFullYear()}) - Rating: {movie.vote_average}
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