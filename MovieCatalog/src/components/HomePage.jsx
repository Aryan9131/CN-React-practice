import MovieList from './MovieList'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid';
import Carousel from './Carousel'
import {dualAudioMovies, bollywoodMovies, hollywoodMovies} from '../StaticMoviesApi/staticMovies'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const HomePage=()=>{
   const [likedMovies, setLikedMovies]=React.useState([]);
   const [watchLater, setWatchLater]=React.useState([]);
   const [searchResults, setSearchResults] = React.useState([]);

   const navigate=useNavigate()
   React.useEffect(()=>{
        const likedMovs=JSON.parse(localStorage.getItem('likedMovies')) || [];
        const watchLaterMovs=JSON.parse(localStorage.getItem('watchLater')) || [];
        setLikedMovies(likedMovs);
        setWatchLater(watchLater);
   }, [])
   React.useEffect(()=>{
      if(likedMovies.length>0)
         localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
   },[likedMovies, watchLater])
   const handleMovieLiked=(movie)=>{
      if(likedMovies.length==0){
          setLikedMovies((prev)=>[movie,...prev])
      }else{
         const isPresent = likedMovies.findIndex((obj) => obj.imdbID === movie.imdbID);
         if(isPresent!=-1){
           setLikedMovies((prev)=>prev.filter((obj)=>obj.imdbID!=movie.imdbID))
         }else{
           setLikedMovies((prev)=>[movie, ...prev]);
         }
      }
       
   }
   const showSuggestions=async (typedVal)=>{
      const fetchedMoviesResponse=await fetch(`https://www.omdbapi.com/?s=${typedVal}&plot=full&page=1&apikey=${process.env.REACT_APP_APIKEY}`);
      const fetchedMovies=await fetchedMoviesResponse.json();
      setSearchResults(fetchedMovies.Search)
   }
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
             {/* Navbar Area */}
             <NavBar showSuggestions={showSuggestions}/>
          </Grid>
          <Grid item xs={12}  >
             {/* Suggestion Area */}
             <h2 className='heading' style={{color:"#85827b", fontWeight:"300"}}>Suggested Movies : </h2>
             <hr />
             {
               searchResults && searchResults.length>0
               ?
               <MovieList movieList={searchResults} likedMovies={likedMovies} handleMovieLiked={handleMovieLiked}/>
               :
               <p style={{color:"#85827b", fontWeight:"300", textAlign:"center", margin:"20px"}}>Nothing to show</p>
             }
          </Grid>
          <Grid item xs={12} sx={{ display:"flex", flexDirection:{xs:"column", md:"row"}}}>
              <Grid item xs={12} sm={12} md={8} sx={{display:"flex", justifyContent:"center"}}>
                 {/* Carousel Area */}
                 <Carousel/>
              </Grid>
              <Grid item xs={12} sm={12} md={3} >
               <Box sx={{margin:"10px 5px", color:"whitesmoke",borderBottom:"1px solid black"}}>
                  <h2>Liked Movies :</h2>
               </Box>
               <List sx={{maxHeight:"60vh", overflowY:"auto"}}>
                {
                  likedMovies.map((likedMov)=>{
                     return(
                        <ListItem sx={{marginBottom:"5px", border:".5px solid black",cursor:"pointer",width:"100%",
                                       borderRadius:"15px",color:"white", display:"flex",
                                       flexDirection:"row", justifyContent:"space-between", 
                                       backgroundColor:"green",
                                       '&:hover':{
                                          boxShadow:"2px 2px 10px black"
                                       }
                                      }}
                        >
                             <Box onClick={()=>navigate(`/movie-details/${likedMov.imdbID}`)} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                                 <img src={likedMov.Poster} alt="MovieImg" width="35px" height="35" style={{borderRadius:"10px"}} />
                                 <ListItemText sx={{margin:"1px 10px"}}>{likedMov.Title}</ListItemText>
                             </Box>
                            <ListItemIcon sx={{color:"red"}} onClick={()=>handleMovieLiked({imdbID:likedMov.imdbID})}><DeleteOutlineIcon/></ListItemIcon>
                        </ListItem>
                     )
                  })
                }
                </List>
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
             <MovieList movieList={bollywoodMovies} likedMovies={likedMovies} handleMovieLiked={handleMovieLiked}/>
          </Grid>
          <Grid item xs={12}>
             {/* Dual Audio Movies Area */}
             <h2 className='heading' id="dual-audio-movies">Dual Audio Movies </h2>
             <hr />
             <MovieList movieList={dualAudioMovies} likedMovies={likedMovies} handleMovieLiked={handleMovieLiked}/>
          </Grid>
          <Grid item xs={12}>
             {/* Hollywood Movies Area */}
             <h2 className='heading' id="hollywood-movies">Hollywood Movies </h2>
             <hr />
             <MovieList movieList={hollywoodMovies} likedMovies={likedMovies} handleMovieLiked={handleMovieLiked}/>
          </Grid>
        </Grid>
      </Box>
    )
}
