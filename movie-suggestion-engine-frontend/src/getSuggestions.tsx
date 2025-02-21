import { useQuery } from 'react-query';
import { Movie } from './components/Suggestions';
import mockSuggestions from './mocksuggestions.json';

// const fetchMockSuggestions = async (): Promise<Movie[]> => {
//   const response = await fetch('/mocksuggestions.json');
//   if (!response.ok) throw new Error('Failed to load suggestions');
//   return response.json();
// };

const fetchMovieSuggestions = async (): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSuggestions), 500); // Simulating API delay
  });
};

const useSuggestions = (enabled: boolean) => {
  return useQuery<Movie[]>({
    queryKey: ['suggestions'],
    queryFn: fetchMovieSuggestions,
    enabled,
  });
};

export default useSuggestions;
