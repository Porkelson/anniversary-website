import React, { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import './HeroSection.css';

const HeroSection = () => {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2024-03-24T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeTogether({
        days,
        hours,
        minutes,
        seconds
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <AnimatedBackground />
      
      <div className="hero-content">
        <h1 className="hero-title">Our Love Story</h1>
        <p className="hero-quote">
          "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my forever."
        </p>
        
        <div className="timer-container">
          <div className="timer-box">
            <span className="timer-number">{timeTogether.days}</span>
            <span className="timer-label">Days</span>
          </div>
          <div className="timer-box">
            <span className="timer-number">{timeTogether.hours}</span>
            <span className="timer-label">Hours</span>
          </div>
          <div className="timer-box">
            <span className="timer-number">{timeTogether.minutes}</span>
            <span className="timer-label">Minutes</span>
          </div>
          <div className="timer-box">
            <span className="timer-number">{timeTogether.seconds}</span>
            <span className="timer-label">Seconds</span>
          </div>
        </div>
        <p className="together-quote">This is how much we've been together!!!</p>
      </div>
    </div>
  );
};

export default HeroSection; 