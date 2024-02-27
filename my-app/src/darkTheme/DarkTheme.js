import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Blog from './components/Blog';
import { ThemeProvider } from './hooks/useDarkTheme';
import './dark-theme.css';

function DarkTheme() {
  return (
    <div>
      <ThemeProvider name='sk'>
        <Router>
            <Navigation />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default DarkTheme;
