import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Background from "./Components/Background"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio"
import "./Components/content.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Background> */}
        <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Footer />
        {/* </Background> */}
      </div>
    </Router>
  );
}

export default App;
