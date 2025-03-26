import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import './App.css';

function App() {
  return (
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
                <Timeline />
              </>
            } />
            <Route path="/memories" element={
              <>
                <PhotoGallery />
                <Timeline />
              </>
            } />
            <Route path="/letter" element={<LoveLetter />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>Made with love, Olek ;&gt;</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
