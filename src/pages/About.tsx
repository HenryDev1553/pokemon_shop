import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/henry.jpg";
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Henry Dev</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>

      <div className="profile-links">
        <a href="https://github.com/henrydev1553">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/namngn15203">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
