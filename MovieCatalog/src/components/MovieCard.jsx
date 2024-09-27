import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
const StyledCard=styled(Card)`
  max-width: 250px;
  min-width:220px ;
  margin:10px;
  border-radius:10px`

export default function MovieCard({movie, handleMovieLiked}) {
  const navigate=useNavigate();
  
  const handleMovieClick =(imdbId)=>{
     navigate(`/movie-details/${imdbId}`)
  }
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={movie.img}
          id={movie.imdbId}
          alt="green iguana"
          sx={{backgroundColor:"white"}}
          onClick={()=>handleMovieClick(movie.imdbId)}
        />
      </CardActionArea>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography>
           8.6
       </Typography>
        <Box sx={{margin:"0px", display:"flex"}}>
           <RemoveIcon sx={{height:"15px"}}/>
            <StarIcon sx={{height:"17px", color:"yellow"}}/>
           <AddIcon sx={{height:"15px"}}/>
        </Box>
        <Button size="small" color="primary" onClick={()=>handleMovieLiked({name:movie.name, id:movie.imdbId})}>
           <FavoriteIcon id='fav'/>
        </Button>
      </CardActions>
    </StyledCard>
  );
}
