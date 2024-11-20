import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Layout/Route';
import './App.scss';

function App() {
  const [currentPage, setCurrentPage] = useState('Accueil');

  return (
    <Router>      
        <AppRoutes currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Router>
  );
}

export default App;
