import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Suggestions, { Movie } from './components/Suggestions';
import UserInput from './components/UserInput';
import mockSuggestions from './mocksuggestions.json';


function App() {
  const [letterboxdUser, setLetterboxdUser] = useState('');
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [error, setError] = useState('');

  const fetchSuggestions = async () => {
    setError('');
    setSuggestions([]);

    if (!letterboxdUser) {
      setError('Please enter a Letterboxd Username');
      return;
    }

    try {
      const data: Movie[] = mockSuggestions;
      
      setSuggestions(data || []);
    } catch (err) {
      setError('An error occurred while fetching suggestions. Please try again.');
    }
  };

  return (
    <div className="App">
      <Header />
      <UserInput
        letterboxdUser={letterboxdUser}
        setLetterboxdUser={setLetterboxdUser}
        fetchSuggestions={fetchSuggestions}
        error={error}
      />
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default App;
