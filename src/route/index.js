import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../page/HomePage.jsx';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)
export default router;
