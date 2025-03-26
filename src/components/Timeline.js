import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

// Import timeline images
import halloween from "../timeline/halloween.jpeg";
import wilczaWoda from "../timeline/wilcza_woda.jpeg";
import juwenalia from "../timeline/juwenalia.jpeg";
import jordanKotek from "../timeline/jordan_kotek.jpeg";
import strzelnica from "../timeline/strzelnica.jpeg";
import akademikGogle from "../timeline/akademik_gogle.jpeg";
import antykwariat from "../timeline/antykwariat.jpeg";

const timelineData = [
  {
    date: 'October 2023',
    title: 'Halloween Fun',
    description: 'Dressing up and celebrating Halloween together.',
    image: halloween
  },
  {
    date: 'November 2023',
    title: 'Wilcza Woda Adventure',
    description: 'Exploring Wilcza Woda together.',
    image: wilczaWoda
  },
  {
    date: 'December 2023',
    title: 'Juwenalia Celebration',
    description: 'Having fun at Juwenalia.',
    image: juwenalia
  },
  {
    date: 'January 2024',
    title: 'Jordan Park Visit',
    description: 'A lovely day at Jordan Park.',
    image: jordanKotek
  },
  {
    date: 'February 2024',
    title: 'Shooting Range Experience',
    description: 'An exciting day at the shooting range.',
    image: strzelnica
  },
  {
    date: 'March 2024',
    title: 'Dorm Room Memories',
    description: 'Special moments in the dorm room.',
    image: akademikGogle
  },
  {
    date: 'April 2024',
    title: 'Antique Shop Visit',
    description: 'Exploring the antique shop together.',
    image: antykwariat
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    x: -50
  },
  visible: { 
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const dotVariants = {
  hidden: { 
    scale: 0,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="timeline-dot"
            variants={dotVariants}
          ></motion.div>
          <motion.div 
            className="timeline-card"
            variants={cardVariants}
          >
            <div className="timeline-date">{item.date}</div>
            <h3>{item.title}</h3>
            <div className="timeline-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
