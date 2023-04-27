import React ,{useState ,useEffect} from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

// Variants for scaling animation
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};


const Header = () => {
  const [resume, setResume] = useState([0]);

  useEffect(() => {
    const query = '*[_type == "resume"]';

    client.fetch(query).then((data) => {
      setResume(data);
    });
  }, []);

  return (
    // Main header section
    <div className="app__header app__flex">
      {/* Header information */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        {/* Header badge */}
        <div className="app__header-badge">
          {/* Badge components */}
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Hello , I am </p>
              <h1 className="head-text"> Arpan Waddewar</h1>
            </div>
          </div>

          {/* Tag components */}
          <div className="tag-cmp app__flex">
            <p className="p-text">Full stack Web Developer</p>
            <p className="p-text"> MERN stack developer</p>
            <p className="p-text"> studying web 3.0 at Almabetter</p>
          </div>

          {/* Link to download resume */}
          {resume.map((link)=>(
          <div className="app__resume app__flex">
            <a
              href={link.docslink}
              target="_blank"
              rel="noreferrer"
              className="app__header-link"
            >
              <button type="button" className="app__header-resume">
                Download Resume
              </button>
            </a>
          </div>
          ))}
        </div>
      </motion.div>

      {/* Header image section */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.9, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* Background image */}
        <img src={images.profile} alt="profile_bg" />

        {/* Circle overlay */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      {/* Header circles section */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {/* Map through circle images */}
        {[images.mongoDb, images.react, images.node, images.sass].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

// Export header component wrapped in AppWrap higher-order component with


export default AppWrap(Header, "home");
