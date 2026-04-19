import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2024-03-24T00:00:00');
    const updateTimer = () => {
      const diff = new Date() - startDate;
      setTimeTogether({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeTogether.days,    label: 'Days' },
    { value: timeTogether.hours,   label: 'Hours' },
    { value: timeTogether.minutes, label: 'Minutes' },
    { value: timeTogether.seconds, label: 'Seconds' },
  ];

  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className="hero-eyebrow">Since March 24, 2024</span>
          <h1 className="hero-title">Our<br />Story</h1>
          <div className="hero-title-underline" />
          <p className="hero-quote">
            "In your eyes I found my home.<br />
            In your heart, my forever."
          </p>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="hero-counter-label">time together</p>
          <div className="timer-container">
            {units.map(({ value, label }) => (
              <div key={label} className="timer-box">
                <span className="timer-number">{String(value).padStart(2, '0')}</span>
                <span className="timer-label">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="scroll-arrow">↓</span>
      </motion.div>
    </div>
  );
};

export default HeroSection;
