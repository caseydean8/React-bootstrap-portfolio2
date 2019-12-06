import React from 'react';
import profilePic from '../Images/profile-photo.png'

function About() {
  return (
    <div class="container content">
      <h1>About Me</h1>
      <img src={profilePic} style={imageStyle} alt="profile"></img>
      <p>I approach everything in life with a positive attitude. I love solving complicated problems, and I’m determined to follow through on tasks and projects to completion. I’m drawn to aesthetic details, and want to work on front-end development and design. I’ve successfully completed the Penn LPS full-stack developer bootcamp with high grades and I’m hungry to learn more. I’m detail oriented, and skilled at css manipulation and working within the React structure. I’ve worked as a legal-printing production management and ran a small contracting business, but I’m drawn to the tech industry and programming in particular because of the continuous innovation and learning opportunities.</p>
      <p>I approach everything in life with a positive attitude. I love solving complicated problems, and I’m determined to follow through on tasks and projects to completion. I’m drawn to aesthetic details, and want to work on front-end development and design. I’ve successfully completed the Penn LPS full-stack developer bootcamp with high grades and I’m hungry to learn more. I’m detail oriented, and skilled at css manipulation and working within the React structure. I’ve worked as a legal-printing production management and ran a small contracting business, but I’m drawn to the tech industry and programming in particular because of the continuous innovation and learning opportunities.</p>
    </div>
  )
}

const imageStyle = {
  width: '200px',
  float: 'left',
}

export default About
