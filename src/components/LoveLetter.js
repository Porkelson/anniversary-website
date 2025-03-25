import React, { useState } from "react";
import { motion } from "framer-motion";

const loveNotes = [
  "You're the best part of my every day ❤️",
  "I love you more than coffee... and that's a lot ☕",
  "Being with you is my favorite adventure 🌍",
  "You're my sunshine on a rainy day ☀️",
];

export default function LoveLetter() {
  const [message, setMessage] = useState("Click below for a love note!");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <motion.p
        key={message}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#C71585" }}
      >
        {message}
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          setMessage(loveNotes[Math.floor(Math.random() * loveNotes.length)])
        }
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#FFD700",
          color: "#333",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Generate Love Note
      </motion.button>
    </div>
  );
}
