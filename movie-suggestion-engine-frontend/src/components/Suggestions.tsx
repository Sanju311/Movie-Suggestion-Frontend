import React from 'react';

interface SuggestionsProps {
  suggestions: string[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  return (
    <main className='suggestions'>
      <h2 className="suggestions-header">Suggestions</h2>
      <div className="suggestions-container">
        {suggestions.length > 0 ? (
          <ul>
            {suggestions.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        ) : (
          <p>No suggestions yet. Enter your Letterboxd URL to get started!</p>
        )}
      </div>
    </main>
  );
};

export default Suggestions;
