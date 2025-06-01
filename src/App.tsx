import { useState, useEffect, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import UserInput from './components/UserInput';
import useSuggestions from './hooks/getSuggestions';
import Carousel from './components/carousel'; 


function App() {
  const [letterboxdUser, setLetterboxdUser] = useState('');
  const { data: suggestions, isLoading, isFetching, error, refetch } = useSuggestions(letterboxdUser);
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const suggestionsRef = useRef<HTMLDivElement | null>(null); 
  

  const fetchSuggestions = async () => {
    setErrorMessage('');
    setShowSuggestions(false);
    const result = await refetch()
    if (result.isError && result.error instanceof Error) {
      setErrorMessage(result.error.message); // Show backend error like "invalid username"
    } else {
      setShowSuggestions(true); // Only show suggestions on success
    
     // 👇 Scroll to suggestions after DOM updates
     setTimeout(() => {
      suggestionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    }
  };

// // Watch for query errors
//   useEffect(() => {
//     if (error instanceof Error) {
//       setErrorMessage(error.message); // Set the error text (e.g. "invalid username")
//     }
//   }, [error]);
  return (
    <div className="App">
      <Header />
      <Carousel/>
      <UserInput
        letterboxdUser={letterboxdUser}
        setLetterboxdUser={setLetterboxdUser}
        fetchSuggestions={fetchSuggestions}
        error={errorMessage}
      />
      {isFetching && <p className='loading-wheel'></p>}
      <div>
        
      </div>
      {showSuggestions && <div ref={suggestionsRef} style={{ display: 'flex', justifyContent: 'center' }}>
        <Suggestions suggestions={suggestions || []} suggestionVisibility = {showSuggestions} />  
      </div>}
    </div>
  );
}

export default App;