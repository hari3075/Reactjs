import { Box, Grid, Paper } from '@mui/material';
// import React from 'react'
// import Movies from '../pages/movies';
import { MovieDataType } from '../assets/data';
import MovieTrendCard from '../components/movie-card/movieTrend';
interface MovieTrendListProps{
    trendingList:MovieDataType[];
}

const MovieTrendingList = ({trendingList}:MovieTrendListProps) => {
    
    console.log("trending list",trendingList);
  return (
   <Box sx={{display:'flex',gap:2,overflowX:'scroll'}}>
{trendingList.map((movie)=>(
<Grid item key={movie.id}>
    <Paper elevation={0} sx={{backgroundColor:'transparent'}}>
    <MovieTrendCard movie={movie} />
    </Paper>
</Grid>
   ) )}
   </Box>
  )
}

export default MovieTrendingList
