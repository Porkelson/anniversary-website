import React from "react";
import { motion } from "framer-motion";
// import "./Gallery.css"; // Custom styles

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
];

export default function PhotoGallery() {
  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Memory"
          whileHover={{ scale: 1.1 }}
          className="gallery-img"
        />
      ))}
    </div>
  );
}
