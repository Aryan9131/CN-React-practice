import MovieList from './MovieList'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Carousel from './Carousel'
import {dualAudioMovies, bollywoodMovies, hollywoodMovies} from '../StaticMoviesApi/staticMovies'
import React from 'react';

export const HomePage=()=>{
   const [likedMovies, setLikedMovies]=React.useState([]);
   const [watchLater, setWatchLater]=React.useState([]);
   React.useEffect(()=>{
        const likedMovs=JSON.parse(localStorage.getItem('likedMovies')) || [];
        const watchLaterMovs=JSON.parse(localStorage.getItem('watchLater')) || [];
        setLikedMovies(likedMovs);
        setWatchLater(watchLater);
   }, [])
   const handleMovieLiked=(movie)=>{
      console.log("liked Movie -->"+JSON.stringify(movie))
      console.log("liked Movie array -->"+likedMovies)
      if(likedMovies.length==0){
          setLikedMovies((prev)=>prev.push(movie))
      }else{
         const isPresent = likedMovies.findIndex((obj) => obj.id === movie.id);
         if(isPresent!=-1){
           setLikedMovies((prev)=>prev.filter((obj)=>obj.id!=movie.id))
         }else{
           setLikedMovies((prev)=>[movie, ...prev]);
         }
      }
       
   }
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
             {/* Navbar Area */}
          </Grid>
          <Grid item xs={12}>
             {/* Suggestion Area */}
             <h1 className='heading'>Suggested Movies </h1>
             <hr />
             <p id="suggested-para"> Nothing to Show</p>
          </Grid>
          <Grid item xs={12}>
              <Grid item xs={12} md={8} sx={{display:"flex", justifyContent:"center",backgroundColor:"red"}}>
                 {/* Carousel Area */}
                 <Carousel/>
              </Grid>
              <Grid item xs={12} md={4}>
                {/* Likes Movies Area */}
              </Grid>
          </Grid>
          <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
             {/* Movies Types Area */}
             <a href="#hollywood-movies"><button type="button" className='movie-type'>English</button></a>
             <a href="#bollywood-movies"><button type="button" className='movie-type'>Hindi</button></a>
             <a href="#dual-audio-movies"><button type="button" className='movie-type'>Dual Audio</button></a>
          </Grid>
          <Grid item xs={12}>
             {/* Bollywood Movies Area */}
             <h2 className='heading' id="bollywood-movies">Bollywood Movies </h2>
             <hr />
             <MovieList movieList={bollywoodMovies} handleMovieLiked={handleMovieLiked}/>
          </Grid>
          <Grid item xs={12}>
             {/* Dual Audio Movies Area */}
             <h2 className='heading' id="dual-audio-movies">Dual Audio Movies </h2>
             <hr />
             <MovieList movieList={dualAudioMovies} handleMovieLiked={handleMovieLiked}/>
          </Grid>
          <Grid item xs={12}>
             {/* Hollywood Movies Area */}
             <h2 className='heading' id="hollywood-movies">Hollywood Movies </h2>
             <hr />
             <MovieList movieList={hollywoodMovies} handleMovieLiked={handleMovieLiked}/>
          </Grid>
        </Grid>
      </Box>
    )
}