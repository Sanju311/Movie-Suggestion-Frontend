import axios from 'axios';
import { useQuery } from 'react-query';
import { Movie } from '../components/Suggestions';
import { TMDB_API_KEY } from '../config'; // Import the TMDB API key


// const TMDB_API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API key

const fetchPosterImages = async (movies: Movie[]) => {
  const posters: { [key: number]: string } = {};

  for (const movie of movies) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_API_KEY}`,
          },
        }
      );
      const posterPath = response.data.poster_path;
      if (posterPath) {
        posters[movie.id] = `https://image.tmdb.org/t/p/w500${posterPath}`;
      }
    } catch (error) {
      console.error(`Failed to fetch poster for movie: ${movie.title}`, error);
    }
  }

  return posters;
};

const usePosterImages = (movies: Movie[]) => {
  return useQuery({
    queryKey: ['posterImages', movies],
    queryFn: () => fetchPosterImages(movies),
    enabled: movies.length > 0, // Ensuring query runs only if movies array is not empty
  });
};

export default usePosterImages;