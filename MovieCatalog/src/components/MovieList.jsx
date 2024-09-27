import React from 'react'
import MovieCard from './MovieCard'
import { Box } from '@mui/material';
export default function MovieList({movieList, handleMovieLiked}) {
    const [rating , setRating]=React.useState(0);
    const increaseRating=(val)=>{
        if(rating<10 ){
        setRating(rating+val);
        }
    }
    const decreaseRating=(val)=>{
        if(rating>0){
        setRating(rating+val);
        }
    }
  return (
    <Box  sx={{display:"flex", flexWrap:"nowrap",overflowX:"scroll", margin:"15px 10px"}} id="movieList">
        {
            movieList.map((movie)=>{
                return(
                    <MovieCard movie={movie} handleMovieLiked={handleMovieLiked}/>
                )
            })
        } 
    </Box>
  )
}

MovieCard.defaultProps={
    rate:"9"
}

