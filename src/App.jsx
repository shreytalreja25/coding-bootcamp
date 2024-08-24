import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import CodingBootcamp from './pages/CodingBootcamp';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CodingBootcamp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
