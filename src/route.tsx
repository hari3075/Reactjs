import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movies from "./pages/movies";
import TvSeries from "./pages/tv-series";
import BookMark from "./pages/bookmark";
export const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      errorElement:<Error/>
    },
    {
        path:'/movies',
        element:<Movies/>,
        errorElement:<Error/>
      },
      {
        path:'/tv-series',
        element:<TvSeries/>,
        errorElement:<Error/>
      },
      {
        path:'/Bookmarks',
        element:<BookMark/>,
        errorElement:<Error/>
      },
    
])