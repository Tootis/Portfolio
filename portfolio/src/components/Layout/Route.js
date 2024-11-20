import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import PageLayout from './PageLayout'

const AppRoutes = ({ currentPage, setCurrentPage }) => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path="/projects" element={<Projects currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path="About" element={<About currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
