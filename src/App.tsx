import React from "react";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";
import { IGenresList } from "./models";
import MovieService from "./services/MovieService";

import MainPage from "./pages/MainPage/MainPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SerialsPage from "./pages/SerialsPage/SerialsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import MovieList from "./pages/MovieList/MovieList";
import SerialsList from "./pages/SerialsList/SerialsList";
import ScrollToTop from "./pages/ScrollToTop/ScrollToTop";
import PersonList from "./pages/PersonList/PersonList";
import MoviesGenre from "./pages/MoviesPage/MoviesGenre";
import SerialsGenre from "./pages/SerialsPage/SerialsGenre";

function App() {
    const {data: movie} = useQuery(`genresMovie`, () => MovieService.getGenres('movie'));
    const {data: tv} = useQuery(`genresTV`, () => MovieService.getGenres('tv'));

    if (!movie || !tv) return null;

    const genresMovie: Array<IGenresList> = movie;
    const genresTV: Array<IGenresList> = tv;

    return (
        <div>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                {genresMovie.map(genre => <Route key={genre.id} path={`/movies/${genre.name.toLowerCase()}`} element={<MoviesGenre genre={genre.name} genreId={genre.id}/>}/>)}
                <Route path="/serials" element={<SerialsPage/>}/>
                {genresTV.map(genre => <Route key={genre.id} path={`/serials/${genre.name.toLowerCase()}`} element={<SerialsGenre genre={genre.name} genreId={genre.id}/>}/>)}
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/favourite" element={<FavouritePage/>}/>
                <Route path="/list/movies/:id" element={<MovieList/>}/>
                <Route path="/list/serials/:id" element={<SerialsList/>}/>
                <Route path="/list/person/:id" element={<PersonList/>}/>
            </Routes>
        </div>
    );
}

export default App;
