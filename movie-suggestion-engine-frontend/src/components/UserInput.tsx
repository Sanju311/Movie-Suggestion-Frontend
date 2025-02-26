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
        className="user-input"
        placeholder="Enter Letterboxd Username"
        value={letterboxdUser}
        onChange={(e) => setLetterboxdUser(e.target.value)}
      />
      <button className="fetch-button" onClick={fetchSuggestions}>Get Suggestions</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default UserInput;
