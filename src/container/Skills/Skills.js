import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";

import { useEffect } from "react";
import "./Skills.scss";
const Skills = () => {
  return (
    <motion.div
      className="app__container-normal border"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.4 }}
    >
      <div className="app__flex margin-min">
        <h1 className="app__links-bold-text">&lt; My Skills &gt; </h1>
      </div>
      <div className="app__skills-container app__flex">
        <h2 className="app__header-text-bold">Weapons of My Choice</h2>
        <div className="app__skills-details">
          <p className="text-small">
            this is my favourite tool set.i mainly concentrate on responsive
            design using basic HTML,CSS and JS.
          </p>
          <motion.div
            className="app__skills-items margin-min"
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            transition={{ duration: 0.4 }}
          >
            <div className="progress-wrapper">
              <h5>Html</h5>
              <div className="progress">
                <div className="progress-fill" style={{ width: "10%" }}></div>
              </div>
            </div>
            <div className="progress-wrapper">
              <h5>Css</h5>
              <div className="progress">
                <div className="progress-fill" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="progress-wrapper">
              <h5>Javascript</h5>
              <div className="progress">
                <div className="progress-fill" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="progress-wrapper">
              <h5>React</h5>
              <div className="progress">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="app__skills-cards">
        <div className="card ">
          <div className="card-image-wrapper ">
            <img src={images.html} alt="html"></img>
          </div>
          <h5>Html</h5>
          <p>
            HTML (HyperText Markup Language) is the code that is used to
            structure a web page and its content.
          </p>
        </div>
        <div className="card">
          <div className="card-image-wrapper">
            <img src={images.react} alt="html"></img>
          </div>
          <h5>React</h5>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        </div>
        <div className="card">
          <div className="card-image-wrapper">
            <img src={images.javascript} alt="html"></img>
          </div>
          <h5>Html</h5>
          <p>
            HTML (HyperText Markup Language) is the code that is used to
            structure a web page and its content.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(Skills, "Skills");
