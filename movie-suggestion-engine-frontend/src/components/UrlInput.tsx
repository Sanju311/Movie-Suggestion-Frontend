import React from 'react';

interface UrlInputProps {
  letterboxdUrl: string;
  setLetterboxdUrl: (url: string) => void;
  fetchSuggestions: () => void;
  error: string;
}

const UrlInput: React.FC<UrlInputProps> = ({
  letterboxdUrl,
  setLetterboxdUrl,
  fetchSuggestions,
  error,
}) => {
  return (
    <div className="url-input-container">
      <input
        type="text"
        placeholder="https://letterboxd.com/user/films/"
        value={letterboxdUrl}
        onChange={(e) => setLetterboxdUrl(e.target.value)}
        className="url-input"
      />
      <button onClick={fetchSuggestions} className="fetch-button">
        Get Suggestions
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UrlInput;
