import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";
import { data } from "./data";

import "./Skills.scss";
const Skills = () => {
  return (
    <motion.div className="app__container-normal border">
      <motion.div
        className="app__flex margin-min"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="app__links-bold-text">&lt; My Skills &gt; </h1>
      </motion.div>
      <motion.div
        className="app__skills-container app__flex"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="app__header-text-bold">Weapons of My Choice</h2>
        <div className="app__skills-details">
          <p className="text-small">
            this is my favourite tool set.i mainly concentrate on responsive
            design using basic HTML,CSS and JS.
          </p>
          <motion.div className="app__skills-items margin-min">
            {data.map((item, index) => {
              return (
                <div className="progress-wrapper" key={index}>
                  <h5>{item.name}</h5>
                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="app__skills-cards"
        whileInView={{ opacity: [0, 1] }}
        transition={{ delayChildren: 0.2, duration: 0.6 }}
      >
        {data.map((item,index) => {
          return (
            <div className="card " key={index+11}>
              <div className="card-image-wrapper ">
                <img src={item.image} alt={item.name}></img>
              </div>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(Skills, "Skills");
