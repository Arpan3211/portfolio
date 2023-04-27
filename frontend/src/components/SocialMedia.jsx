import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  // define the LinkedIn and Instagram URLs as constants to avoid hardcoding them multiple times
  const LINKEDIN_URL = "https://www.linkedin.com/in/arpan-waddewar";
  const INSTAGRAM_URL = "https://instagram.com/arpan_waddewar?igshid=ZDdkNTZiNTM=";

  return (
    <div className="app__social">
      {/* use the constant LINKEDIN_URL as the href for the LinkedIn link */}
      <div className="app__social-linkedin">
        <a href={LINKEDIN_URL} target="_blank" rel="noreferer">
          <BsLinkedin />
        </a>
      </div>
      {/* use the constant INSTAGRAM_URL as the href for the Instagram link */}
      <div className="app__social-instagram">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
