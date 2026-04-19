import React, { memo } from "react";
import { motion } from "framer-motion";
import "./PhotoGallery.css";
import photo1 from "../images/photo1.jpeg";
import photo2 from "../images/photo2.jpeg";
import photo3 from "../images/photo3.jpeg";
import photo4 from "../images/photo4.jpeg";
import photo5 from "../images/photo5.png";

const images = [
  { src: photo1, label: "Us" },
  { src: photo2, label: "Together" },
  { src: photo3, label: "Our Moment" },
  { src: photo4, label: "Memory" },
  { src: photo5, label: "Always" },
];

const PhotoGallery = memo(() => {
  return (
    <section className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.figure
            key={index}
            className={`gallery-item gallery-item--${index + 1}`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
          >
            <div className="gallery-image-wrapper">
              <img
                src={image.src}
                alt={image.label}
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.label}</span>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
});

export default PhotoGallery;
