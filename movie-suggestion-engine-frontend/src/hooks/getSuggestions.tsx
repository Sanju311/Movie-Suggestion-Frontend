import { useQuery } from 'react-query';
import { Movie } from '../components/Suggestions';

// const fetchMovieSuggestions = async (username: string): Promise<Movie[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(mockSuggestions), 500); // Simulating API delay
//   });
// };

const fetchMovieSuggestions = async (username: string): Promise<Movie[]> => {
  const response = await fetch(`http://127.0.0.1:5000/GetMovieRecommendations/${username}`);
  if (!response.ok) throw new Error('Failed to load suggestions');
  return response.json();
};

const useSuggestions = (username: string, enabled: boolean) => {
  return useQuery<Movie[]>({
    queryKey: ['suggestions', username],
    queryFn: () => fetchMovieSuggestions(username),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    retry: false, // Disable automatic retries
  });
};

// const useSuggestions = (username: string, enabled: boolean) => {
//   return useQuery<Movie[]>({
//     queryKey: ['suggestions', username],
//     queryFn: () => fetchMovieSuggestions(username),
//     enabled,
//   });
// };

export default useSuggestions;
