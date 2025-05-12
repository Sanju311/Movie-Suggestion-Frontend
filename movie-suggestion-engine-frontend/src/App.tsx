import { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import UserInput from './components/UserInput';
import useSuggestions from './hooks/getSuggestions';
import Carousel from './components/carousel'; 

function App() {
  const [letterboxdUser, setLetterboxdUser] = useState('');
  const { data: suggestions, isLoading, error, refetch } = useSuggestions(letterboxdUser);

  const fetchSuggestions = () => {
    if (!letterboxdUser) return;
    refetch();
  };


  return (
    <div className="App">
      <Header />
      <Carousel
        options={{loop: true}}
      />
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