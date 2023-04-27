import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Turning Your<span> Ideas</span>
        <br /> into Modern<span> Websites</span>.
      </h2>
      <h3 className="app__about-paragraph ">
        Helloo! <br/>
       My name is <span>Arpan</span> and I'm a <span>web developer</span> who's full stack with
       <span> MERN</span>  stack skills! Not only that, but I'm also studying the latest and
        greatest in the field of web development - <span>web 3.0 at Almabetter</span>. As a
        newbie in the web development world, I get super excited about creating
        captivating and user-friendly web applications. My goal is to learn and
        develop my skills to the max, and always deliver top-notch projects that
        meet my clients' needs!
      </h3>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__aboutbg"
);
