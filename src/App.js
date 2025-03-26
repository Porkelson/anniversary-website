import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import HeroSection from './components/HeroSection';
import AnimatedBackground from './components/AnimatedBackground';
import PersonalTouches from './components/PersonalTouches';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <AnimatedBackground />
          <Navbar />
          <div className="content-wrapper">
            <main className="main-content">
              <Routes>
                <Route path="/" element={
                  <>
                    <HeroSection />
                    <h1 className="main-header">
                      Let's relive our first year together! ❤️
                    </h1>
                    <PhotoGallery />
                    <div className="section-text">
                      <h2>Here are some moments worth mentioning :)</h2>
                    </div>
                    <Timeline />
                    <PersonalTouches />
                  </>
                } />
                <Route path="/love-letter" element={
                  <>
                    <h1 className="main-header">Love Letter</h1>
                    <LoveLetter />
                  </>
                } />
              </Routes>
            </main>
            <footer className="footer">
              <p>Made with love, Olek ;&gt;</p>
            </footer>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
