import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Timeline.css";

import firstDate from "../timeline/first-date.jpeg";

const events = [
  {
    date: "March 25, 2023",
    title: "First Date",
    description: "We met for the first time at the local café. The conversation flowed naturally, and time seemed to stand still.",
    image: "/timeline/first-date.jpeg"
  },
  {
    date: "April 15, 2023",
    title: "First Trip Together",
    description: "A weekend getaway to the mountains. We hiked, laughed, and created unforgettable memories.",
    image: "/timeline/first-trip.jpg"
  },
  {
    date: "June 1, 2023",
    title: "Moving In Together",
    description: "Taking the next big step in our relationship. Making a house our home.",
    image: "/timeline/moving-in.jpg"
  },
  {
    date: "March 25, 2024",
    title: "One Year Together ❤️",
    description: "Celebrating our first year together. Looking back at all the beautiful moments and looking forward to many more.",
    image: "/timeline/anniversary.jpg"
  }
];

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`timeline-event ${expandedIndex === index ? 'expanded' : ''}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div 
            className="timeline-node"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{event.date}</div>
          </div>

          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{event.title}</h3>
                {event.image && (
                  <div className="timeline-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                )}
                <p>{event.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
