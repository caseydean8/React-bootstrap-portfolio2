import React from "react";
import Link from "react-router-dom"

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#E3F2FD" }}
    >
      <div class="container navbar-content">
        <span class="navbar-brand mb-0 h1">Casey Carroll</span>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" href="#" />Home <span class="sr-only">(current)</span>
      </li>
      <li class="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
    </nav>
  );
}

export default Navbar;
