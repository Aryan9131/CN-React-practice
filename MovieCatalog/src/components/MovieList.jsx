import React from 'react';
import MovieCard from './MovieCard';
import { Box } from '@mui/material';
const MovieList = ({ movieList, likedMovies, handleMovieLiked }) => {
  // Memoize the liked status of each movie
  const likedStatus = React.useMemo(() => {
    const likedIds = likedMovies.map(movie => movie.imdbID);
    return movieList.map(movie => ({
      ...movie,
      isLiked: likedIds.includes(movie.imdbID),
    }));
  }, [movieList, likedMovies]);

  return (
    <Box  sx={{display:"flex", flexWrap:"nowrap",overflowX:"scroll", margin:"15px 10px"}} id="movieList">
      {likedStatus.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          handleMovieLiked={handleMovieLiked}
        />
      ))}
    </Box>
  );
};

export default MovieList;
