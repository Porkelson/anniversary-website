import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function useTypewriter(text, speed = 28) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed('');
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const displayed = useTypewriter(opened ? loveNotes[noteIndex] : '', 30);

  const openEnvelope = () => setOpened(true);

  const nextNote = () => {
    setNoteIndex((i) => (i + 1) % loveNotes.length);
  };

  return (
    <div className="love-letter">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            className="envelope-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <button className="envelope" onClick={openEnvelope} aria-label="Open envelope">
              <div className="envelope-body">
                <div className="envelope-flap" />
                <div className="envelope-seal">♥</div>
              </div>
            </button>
            <p className="envelope-hint">tap to open</p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="letter-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="letter-card">
              <div className="letter-header">
                <span className="letter-eyebrow">A note for you</span>
              </div>
              <div className="letter-body">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={noteIndex}
                    className="letter-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {displayed}
                    <span className="letter-cursor">|</span>
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="letter-footer">
                <motion.button
                  className="letter-next"
                  onClick={nextNote}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Another one →
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
