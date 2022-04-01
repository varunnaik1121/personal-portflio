import React, { useEffect, useState } from "react";
import "./About.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import AppWrap from "../../Wrapper/AppWrap";
import { urlFor, client } from "../../client";

const About = () => {
  console.log(urlFor());
  return (
    <div className="app__container-bg-normal app__container-border-bottom-small">
      <div className="app__flex margin-min">
        <h1 className="app__links-bold-text">&lt; About Me &gt; </h1>
      </div>
      <motion.div
        className="app__bio"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__bio-header">
          <h2 className="app__header-text-bold">My Biography</h2>
          <div>
            <img src={images.profile1} alt="about"></img>
            <h2>Varun Naik</h2>
          </div>
        </div>
        <motion.div
          className="app__bio-details"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="app_bio-details-header">Who Am I ?</h3>
          <div>
            20 Years <span> / </span> India <span> / </span> Student
          </div>
          <p>
            <span>H</span>i my name is varun naik. im from india. currrently
            studying bachelor of computer application and i'm 20 years old. i'm
            a web developer and i'm passionate about my work. i enjoy building
            websites preferrably front end web developement with react.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(About, "About");
