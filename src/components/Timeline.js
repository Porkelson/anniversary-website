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
import zakopane from "../timeline/zakopane.jpeg";
import jedzenie from "../timeline/jedzenie.jpeg";

const timelineData = [
  {
    date: 'June 2024',
    title: 'Shooting Range Experience',
    description: 'Alright I admit you are better than me :>',
    image: strzelnica
  },
  {
    date: 'June 2024',
    title: 'Antique Shop Visit',
    description: 'We must visit mr Jaroslaw next time!!',
    image: antykwariat
  },
  {
    date: 'July 2024',
    title: 'Wilcza Wola Adventure',
    description: 'Mussels got what they deserved',
    image: wilczaWoda
  },
  {
    date: 'July 2024',
    title: 'Juwenalia Celebration',
    description: 'Never again',
    image: juwenalia
  },
  {
    date: 'July 2024',
    title: 'Dorm Room Moving',
    description: 'Lots of carrying boxes and cleaning',
    image: akademikGogle
  },
  {
    date: 'October 2024',
    title: 'Halloween Fun',
    description: 'I did not think dressing up would be so fun!!',
    image: halloween
  },
  {
    date: 'January 2025',
    title: 'Jordan Park Visit',
    description: 'Look ath this cute kitty cat',
    image: jordanKotek
  },
  {
    date: 'February 2025',
    title: 'Zakopane Trip',
    description: 'We will get better boots next time',
    image: zakopane
  },
  {
    date: 'ALL THE TIME',
    title: 'WONDERFUL FOOD',
    description: 'Thank you for every single meal we shared together',
    image: jedzenie
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
