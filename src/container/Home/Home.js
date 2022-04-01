import React, { useEffect } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";
import { urlFor, client } from "../../client";
const Home = () => {
  useEffect(() => {
    const query = `*[_type=="abouts"]`;
    client.fetch(query).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="app__container app__flex app__container-border-bottom-small">
      <motion.div
        className="app__home-wrapper"
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-wrapper">
          <h2 className="app__text-bold">
            Hi! I'm <span className="span-bg">Varun</span> Web Developer Based
            In India.
          </h2>
          <p className="p-text">
            I Enjoy Building Websites Mainly FrontEnd with
            <span style={{ fontWeight: 600 }}> REACT JS</span>.
          </p>
        </div>
        <div className="app__image-wrapper">
          <img src={images.profile} alt="profile"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Home, "Home");
