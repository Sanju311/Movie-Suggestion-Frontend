import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import UserInput from './components/UserInput';
import useSuggestions from './hooks/getSuggestions'; // Import the custom hook


function App() {
  const [letterboxdUser, setLetterboxdUser] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false); // Controls when to fetch

  const { data: suggestions, isLoading, error } = useSuggestions(letterboxdUser, shouldFetch); // Fetch movies only when shouldFetch is true

  const fetchSuggestions = () => {
    if (!letterboxdUser) {
      setShouldFetch(false); // Prevents query execution
      return;
    }
    setShouldFetch(true); // Triggers fetching
  };

  return (
    <div className="App">
      <Header />
      <UserInput
        letterboxdUser={letterboxdUser}
        setLetterboxdUser={setLetterboxdUser}
        fetchSuggestions={fetchSuggestions}
        error={!letterboxdUser ? '' : error instanceof Error ? error.message : ''}
      />
      {isLoading && <p className='loading-wheel'></p>}
      <Suggestions suggestions={suggestions || []} />
    </div>
  );
}

export default App;