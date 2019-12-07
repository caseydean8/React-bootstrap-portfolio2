import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#c0c5cd" }}
    >
      <div class="container navbar-content">
        <span class="navbar-brand mb-0 h1"><h1 style={{ borderBottom: "none" }}>Casey Carroll</h1></span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <Link class="nav-link" to="/">
          About</Link>
          <Link class="nav-link" to="/portfolio">
          Portfolio</Link>
          <Link class="nav-link" to="/contact">
          Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
