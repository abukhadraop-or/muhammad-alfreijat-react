import MoviesPage from "pages/movie-page";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
