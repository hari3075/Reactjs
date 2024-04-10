import React from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import { router } from './route';
import { MovieProvider } from './context/movie-context';


const App=()=> {

  return(
  <MovieProvider>
<RouterProvider router={router} />;
  </MovieProvider>
  )
};

export default App;
