import React, { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PhotoGallery.css";
import photo1 from "../images/photo1.jpeg";
import photo2 from "../images/photo2.jpeg";
import photo3 from "../images/photo3.jpeg";
import photo4 from "../images/photo4.jpeg";
import photo5 from "../images/photo5.png";

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100
  }),
  center: {
    x: 0
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100
  })
};

const PhotoGallery = memo(() => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        paginate(1);
      }, 8000);
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + images.length) % images.length,
      newDirection
    ]);
    startTimer();
  };

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      startTimer();
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-main">
        <button className="nav-button prev" onClick={() => paginate(-1)}>
          ‹
        </button>
        
        <div className="gallery-wrapper">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.2, ease: "linear" }
              }}
              loading="lazy"
              alt={`Memory ${imageIndex + 1}`}
              className="gallery-img"
            />
          </AnimatePresence>
        </div>

        <button className="nav-button next" onClick={() => paginate(1)}>
          ›
        </button>

        <div className="gallery-controls">
          <button 
            className={`auto-play-button ${isAutoPlaying ? 'active' : ''}`}
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? '⏸' : '▶'}
          </button>
        </div>
      </div>

      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${index === imageIndex ? 'active' : ''}`}
            onClick={() => {
              const direction = index > imageIndex ? 1 : -1;
              setPage([index, direction]);
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default PhotoGallery;
