import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import UrlInput from './components/UrlInput';

function App() {
  const [letterboxdUrl, setLetterboxdUrl] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState('');

  const fetchSuggestions = async () => {
    setError('');
    setSuggestions([]);

    const urlPattern = /^https:\/\/letterboxd\.com\/\w+\/films\/$/;
    if (!urlPattern.test(letterboxdUrl)) {
      setError('Please enter a valid Letterboxd URL in the format: https://letterboxd.com/user/films/');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/get-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: letterboxdUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }

      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (err) {
      setError('An error occurred while fetching suggestions. Please try again.');
    }
  };

  return (
    <div className="App">
      <Header />
      <UrlInput
        letterboxdUrl={letterboxdUrl}
        setLetterboxdUrl={setLetterboxdUrl}
        fetchSuggestions={fetchSuggestions}
        error={error}
      />
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default App;
