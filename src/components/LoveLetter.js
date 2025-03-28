import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LoveLetter.css";

const loveNotes = [
  "You're the best part of my every day ❤️",
  "I love you more than tea... and that's a lot ☕",
  "Being with you is my favorite adventure 🌍",
  "You're my sunshine on a rainy day ☀️",
  "Every moment with you feels like magic ✨",
  "You're the sweetest melody in my heart 🎶",
  "I'd choose you over a lifetime of extra sleep 😴❤️",
  "Loving you is the easiest thing I've ever done 💕",
  "You're my favorite person to do absolutely nothing with 🛋️",
  "You're the missing piece I never knew I needed 🧩",
  "Holding your hand makes everything feel right 🤝",
  "You're the dream I never want to wake up from 🌙",
  "Even on my worst days, you make everything better 💖",
  "You're my happy place, no matter where we are 🏡",
  "I'd rather be with you in the rain than anywhere else in the sun ☔",
  "Every love song suddenly makes sense because of you 🎵",
  "You make my world brighter just by being in it 🌟",
  "You're not just my love, you're my best friend too 💞",
];


export default function LoveLetter() {
  const [message, setMessage] = useState("Click below for a love note!");

  return (
    <div className="love-letter">
      <div className="love-letter-card">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="love-message"
        >
          {message}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setMessage(loveNotes[Math.floor(Math.random() * loveNotes.length)])
          }
          className="love-button"
        >
          Get a Love Note ❤️
        </motion.button>
      </div>
    </div>
  );
}
