import React from 'react'
import { MovieDataType } from '../assets/data'
import { Box, Grid, Paper } from '@mui/material';
import MovieTrendingList from './movieTrend';
import MovieCard from '../components/movie-card';

interface MovieListProps{
    recomendedList:MovieDataType[];
}

const MovieList = ({recomendedList}:MovieListProps) => {
    console.log("remended list",recomendedList)
  return (
    <Box sx={{display:'flex',gap:2,overflowX:'scroll'}}>
    {recomendedList.map((movie)=>(
    <Grid item key={movie.id}>
        <Paper elevation={0} sx={{backgroundColor:'transparent'}}>
            <MovieCard movie={movie}/>
        </Paper>
    </Grid>
       ) )}
       </Box>
  )
}

export default MovieList
