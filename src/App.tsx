import React from "react";
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SerialsPage from "./pages/SerialsPage/SerialsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import MovieList from "./pages/MovieList/MovieList";

function App() {

  return (
      <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/movies" element={ <MoviesPage /> } />
          <Route path="/serials" element={ <SerialsPage /> } />
          <Route path="/search" element={ <SearchPage /> } />
          <Route path="/signin" element={ <SignInPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/favourite" element={ <FavouritePage /> } />
          <Route path="/list/:id" element={ <MovieList /> } />
      </Routes>
  );
}

export default App;
