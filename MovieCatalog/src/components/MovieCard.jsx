import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const StyledCard = styled(Card)`
  max-width: 250px;
  min-width:220px ;
  margin:10px;
  border-radius:10px;
`;

export default function MovieCard({ movie, handleMovieLiked }) {
  const navigate = useNavigate();

  const handleMovieClick = (imdbID) => {
    navigate(`/movie-details/${imdbID}`);
  };

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={movie.Poster}
          id={movie.imdbId}
          alt={movie.Title}
          sx={{ backgroundColor: "white" }}
          onClick={() => handleMovieClick(movie.imdbID)}
        />
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>8.6</Typography>
        <Box sx={{ margin: "0px", display: "flex" }}>
          <RemoveIcon sx={{ height: "15px" }} />
          <StarIcon sx={{ height: "17px", color: "yellow" }} />
          <AddIcon sx={{ height: "15px" }} />
        </Box>
        <Button
          size="small"
          sx={{ color: movie.isLiked ? 'red' : 'blueviolet' }} // Use the isLiked prop to set the color
          onClick={() => handleMovieLiked({ Title: movie.Title, imdbID: movie.imdbID, Poster: movie.Poster })}
        >
          <FavoriteIcon />
        </Button>
      </CardActions>
    </StyledCard>
  );
}
