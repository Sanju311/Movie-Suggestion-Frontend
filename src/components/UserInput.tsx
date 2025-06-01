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
        placeholder="Enter Letterboxd User ex: Sanju311"
        value={letterboxdUser}
        onChange={(e) => setLetterboxdUser(e.target.value)}
      />
      <button className="fetch-button" onClick={fetchSuggestions}>Get Suggestions</button>
      {error && (
        <div style={{ color: 'red', marginTop: '1.5rem' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default UserInput;
