import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayVideo }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => {
            setPlayVideo(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ipsam
          sint voluptate excepturi officiis saepe tenetur praesentium,
          accusantium vitae blanditiis provident, corporis necessitatibus ut,
          quae cupiditate inventore! Ipsam, iste neque?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          optio esse voluptates molestias in modi qui fugit veritatis.
          Architecto veniam eveniet odit iste temporibus, quidem vero quibusdam
          sed nobis? Numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ab
          omnis saepe eaque dolores, quae, facilis exercitationem molestias illo
          eveniet minus quidem. Repellendus sed quod veritatis sint soluta
          distinctio at.
        </p>
      </div>
    </div>
  );
};

export default About;
