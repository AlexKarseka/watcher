import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import FilmsPage from "./pages/FilmsPage/FilmsPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/movies" element={ <FilmsPage /> } />
      </Routes>
  );
}

export default App;
