import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <h1 className="main-header">
              Let's relive our first year together! ❤️
            </h1>
            <Routes>
              <Route path="/" element={
                <>
                  <PhotoGallery />
                  <h2 className="timeline-header">Here are our most important dates in our relationship</h2>
                  <Timeline />
                </>
              } />
              <Route path="/love-letter" element={<LoveLetter />} />
            </Routes>
            <footer className="footer">
              <p>Made with love, Olek ;&gt;</p>
            </footer>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
