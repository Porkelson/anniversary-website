import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#C71585" }}>
        Our 1-Year Journey ❤️
      </h1>
      <PhotoGallery />
      <Timeline />
      <LoveLetter />
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Made with love 💕</p>
      </footer>
    </div>
  );
}
