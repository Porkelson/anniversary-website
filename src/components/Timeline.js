import React from "react";
import { motion } from "framer-motion";
// import "./Timeline.css";

const events = [
  { date: "First Date", description: "We met for the first time!" },
  { date: "First Trip", description: "Our first adventure together." },
  { date: "Anniversary!", description: "One year together ❤️" },
];

export default function Timeline() {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="timeline-event"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <h3>{event.date}</h3>
          <p>{event.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
