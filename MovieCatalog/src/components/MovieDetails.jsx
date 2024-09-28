import { useLocation } from 'react-router-dom'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import NavBar from './NavBar';

export const MovieDetails = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { id } = useParams(); // Extract the movie ID from the URL
    console.log('currentPathdId : ' + id);
    const [movie, setMovie] = React.useState(undefined)
    React.useEffect(() => {
        async function getMovie() {
            const movieResponse = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=1e6d9e90`);
            const movieData = await movieResponse.json();
            setMovie(movieData);
            console.log(JSON.stringify(movieData))
        }
        getMovie();
    }, [])
    return (
        <Grid container spacing={2} sx={{ display: "flex",justifyContent:"center", alignItems:"center",width:"100vw", height: "100vh" }}>
            <Grid item xs={12}>
             {/* Navbar Area */}
                 <NavBar />
            </Grid>
            <Grid item sm={12} md={5} sx={{ color: "white", backgroundColor: "green", display: "flex", alignItems:"center", justifyContent:"center" , height:'90%'}}>
                {
                    movie
                        ?
                        <>
                            <Box sx={{ margin: "10px", height:"100%" }}>
                                <img src={movie.Poster} alt="Movie-Poster" width='400px' height='90%' />
                            </Box>
                        </>
                        :
                        null
                }
            </Grid>
            <Grid item sm={12} md={7} sx={{display:"flex", justifyContent:"center", backgroundColor:"white", lineHeight:"2.5rem", height:"90%"}}>
                {

                    movie
                        ?
                        <>
                            <Box sx={{height:"100%", overflowY:"scroll",textAlign:{sm:"center", md:"left"}}}>
                                <Box>
                                    <Typography variant='h4' gutterBottom>{movie.Title}</Typography>
                                    <Divider sx={{border: '.5px solid black', margin:"10px 1px"}} />
                                </Box>
                                
                                <Box>
                                    <Typography  variant="subtitle1" gutterBottom>Stars : {movie.Actors}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>Director : {movie.Director}</Typography>
                                    <Typography  variant="subtitle1" gutterBottom>Writer  : {movie.Writer}</Typography >
                                    <Typography variant="subtitle1">Genre  : {movie.Genre}</Typography>
                                    <Typography variant="subtitle1">Language  : {movie.Language}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" gutterBottom>Release Year : {movie.Released}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>BoxOffice : {movie.BoxOffice}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>IMDB : {movie.imdbRating}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>IMDB Votes : {movie.imdbVotes}</Typography>
                                    <Divider sx={{border: '.5px solid black', margin:"10px 1px"}} />
                                </Box>
                                <Box sx={{fontWeight:"600", fontSize:"15px", lineHeight:"20px"}}>
                                   <p>
                                      Plot : {movie.Plot}
                                   </p>
                                </Box>
                            </Box>
                        </>
                        :
                        null

                }

            </Grid>
        </Grid>
    )
}