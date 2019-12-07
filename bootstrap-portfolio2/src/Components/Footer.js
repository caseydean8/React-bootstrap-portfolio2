import React from "react";

function Footer() {
  return (
    <footer
      // class="navbar fixed-bottom"
      style={footerStyle}
    >
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#203562",
  height: "70px",
  borderTop: '8px solid',
  borderColor: '#c0c5cd',
  position: "absolute",
  bottom: "0",
  width: "100%"
}

export default Footer;
