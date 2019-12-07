import React from "react";

function Background() {
  return <div style={backgroundImage}></div>;
}

const backgroundImage = {
  height: "100%",
  background: "url(./Images/water-droplet.jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

export default Background;
