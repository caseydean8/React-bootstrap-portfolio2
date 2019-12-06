import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About"
import "./Components/content.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
