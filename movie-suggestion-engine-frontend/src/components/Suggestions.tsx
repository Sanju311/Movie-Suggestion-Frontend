import React, {useState, useEffect, useRef} from 'react';
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
  suggestionVisibility: boolean;
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, suggestionVisibility}: SuggestionsProps) => {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const [allPosters, setAllPosters] = useState<{ [key: number]: string }>({});


  const visibleMovies = suggestions.slice(0, page * pageSize);
  const { data: posters } = usePosterImages(visibleMovies);

  useEffect(() => {
    if (posters) {
      setAllPosters((prev) => ({ ...prev, ...posters }));
    }
  }, [posters]);

  const showMore = () => {
    setPage(prev => prev + 1);
    setTimeout(() => {
      window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
    }, 0);
  } 


  //return visible only if suggestions have been fetched
  return suggestionVisibility
    ? (
      <main className='suggestions'>
        <h2 className="suggestions-header">What we think you'll like!</h2>
        <div className="suggestions-container">
          {suggestions.length > 0 ? (
            <>
              <div className="suggestions-grid">
                {visibleMovies.map((movie) => (
                  <div key={movie.id} className="suggestion-item">
                    {allPosters && allPosters[movie.id] && (
                      <a
                        href={`https://www.themoviedb.org/movie/${movie.id}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className='suggestion-item-img' src={allPosters[movie.id]} alt={movie.title} />
                      </a>
                    )}
                    <strong>{movie.title}</strong> ({movie.Release_year})
                    <div>Public Rating: {movie.vote_average.toFixed(1)}</div>
                    <div>Your Predicted Rating: {movie.predicted_rating.toFixed(1)}</div>
                  </div>
                ))}
              </div>
              {visibleMovies.length < suggestions.length && (
                <button className='show-more-suggestions-btn' onClick={showMore}>Show More</button>
              )}
            </>
          ) : (
            <p>No suggestions yet. Enter your Letterboxd URL to get started!</p>
          )}
        </div>
      </main>
    )
  :null;
};

export default Suggestions;