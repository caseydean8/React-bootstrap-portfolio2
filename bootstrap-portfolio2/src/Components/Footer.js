import React from "react";

function Footer() {
  return (
    <nav
      class="navbar fixed-bottom"
      style={footerStyle}
    >
    </nav>
  );
}

const footerStyle = {
  backgroundColor: "#203562",
  height: "70px",
  borderTop: '8px solid',
  borderColor: '#c0c5cd'
}

export default Footer;
