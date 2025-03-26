import React, { useState, useEffect } from "react";
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

export default function PhotoGallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + images.length) % images.length,
      newDirection
    ]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const imageIndex = ((page % images.length) + images.length) % images.length;
  const prevIndex = (imageIndex - 1 + images.length) % images.length;
  const nextIndex = (imageIndex + 1) % images.length;

  return (
    <div className="gallery-container">
      <div className="gallery-preview prev-preview">
        <img
          src={images[prevIndex]}
          alt="Previous"
          onClick={() => paginate(-1)}
        />
      </div>

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
              initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 1000 : -1000 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              alt={`Memory ${imageIndex + 1}`}
              className="gallery-img"
            />
          </AnimatePresence>
        </div>

        <button className="nav-button next" onClick={() => paginate(1)}>
          ›
        </button>
      </div>

      <div className="gallery-preview next-preview">
        <img
          src={images[nextIndex]}
          alt="Next"
          onClick={() => paginate(1)}
        />
      </div>

      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === imageIndex ? "active" : ""}`}
            onClick={() => {
              setPage([index, index > imageIndex ? 1 : -1]);
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
