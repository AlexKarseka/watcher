import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from "./pages/MainPage/MainPage";
import FilmsPage from "./pages/FilmsPage/FilmsPage";
import SerialsPage from "./pages/SerialsPage/SerialsPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/movies" element={ <FilmsPage /> } />
          <Route path="/serials" element={ <SerialsPage /> } />
      </Routes>
  );
}

export default App;
