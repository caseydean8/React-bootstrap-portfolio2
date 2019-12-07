import React from "react";
import profilePic from "../Images/profile-photo.png";

function About() {
  return (
    <div class="container content">
      <h1>About Me</h1>
      <img src={profilePic} style={imageStyle} alt="profile"></img>
      <p>
        Just for today I will be agreeable, I will look as well as I can, dress
        as becomingly as possible, talk low, act courteously, be liberal with
        praise, criticize not at all, nor find fault with anything and not try
        to regulate nor improve anyone. Just for today I will try to live
        through this day only, not to tackle my whole life problem at once. I
        can do things for 12 hours that would appall me if I had to keep them up
        for a lifetime.
      </p>
      <p>
        {" "}
        Just for today I will have a program. I will write down what I expect to
        do every hour. I may not follow it exactly, but I will have. It will
        eliminate two pests, hurry and indecision. Just for today I will have a
        quiet half-hour all by myself and relax. In this half-hour I will think
        of god, so as to get a little more perspective into my life. Just for
        today I will be unafraid, especially I will not be afraid to be happy,
        to enjoy what is beautiful, to love, and to believe that those I love,
        love me.
      </p>
    </div>
  );
}

const imageStyle = {
  width: "200px",
  float: "left"
};

export default About;
