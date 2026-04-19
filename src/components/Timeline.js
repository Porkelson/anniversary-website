import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

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
  { date: 'June 2024',     title: 'Shooting Range Experience', description: 'Alright I admit you are better than me :>',                    image: strzelnica    },
  { date: 'June 2024',     title: 'Antique Shop Visit',        description: 'We must visit mr Jaroslaw next time!!',                         image: antykwariat   },
  { date: 'July 2024',     title: 'Wilcza Wola Adventure',     description: 'Mussels got what they deserved',                                image: wilczaWoda    },
  { date: 'July 2024',     title: 'Juwenalia Celebration',     description: 'Never again',                                                   image: juwenalia     },
  { date: 'July 2024',     title: 'Dorm Room Moving',          description: 'Lots of carrying boxes and cleaning',                           image: akademikGogle },
  { date: 'October 2024',  title: 'Halloween Fun',             description: 'I did not think dressing up would be so fun!!',                 image: halloween     },
  { date: 'January 2025',  title: 'Jordan Park Visit',         description: 'Look at this cute kitty cat',                                   image: jordanKotek   },
  { date: 'February 2025', title: 'Zakopane Trip',             description: 'We will get better boots next time',                            image: zakopane      },
  { date: 'ALL THE TIME',  title: 'WONDERFUL FOOD',            description: 'Thank you for every single meal we shared together',            image: jedzenie      },
];

const rotations = [-1.2, 0.8, -0.6, 1.4, -1, 0.5, -1.3, 0.9, -0.4];

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-spine">
        <div className="timeline-spine-line" />
        {timelineData.map((_, i) => (
          <div key={i} className="timeline-sprocket" style={{ top: `${(i + 0.5) * (100 / timelineData.length)}%` }} />
        ))}
      </div>

      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`timeline-item ${isLeft ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="timeline-card"
              style={{ rotate: rotations[index % rotations.length] }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="timeline-polaroid-frame">
                <img src={item.image} alt={item.title} className="timeline-img" loading="lazy" />
              </div>
              <div className="timeline-card-body">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
