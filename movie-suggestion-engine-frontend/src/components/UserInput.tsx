import React from 'react';

interface UserInput {
  letterboxdUser: string;
  setLetterboxdUser: (User: string) => void;
  fetchSuggestions: () => void;
  error: string;
}

const UserInput: React.FC<UserInput> = ({
  letterboxdUser,
  setLetterboxdUser,
  fetchSuggestions,
  error,
}) => {
  return (
    <div className="user-input-container">
      <input
        type="text"
        placeholder="Please enter your Letterboxd Username"
        value={letterboxdUser}
        onChange={(e) => setLetterboxdUser(e.target.value)}
        className="user-input"
      />
      <button onClick={fetchSuggestions} className="fetch-button">
        Get Suggestions
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UserInput;
