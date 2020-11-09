import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/home/home";
import OurServices from "./components/ourservices/ourservices";
import Equipment from "./components/equipment/equipment";
import Contact from "./components/contact/contact";



class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="" target="_blank">
              {/* <img src={} width="30" height="30" alt="LFL" /> */}
            </a>
            <Link to="/" className="navbar-brand">Luke Fox Logging</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/ourservices" className="nav-link">Our Services</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/equipment" className="nav-link">Equipment</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
      <Route path="/" exact component={Home} />
      <Route path="/ourservices" component={OurServices} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/contact" component={Contact} />
      </div>
    </Router>
      
    );
  }
}

export default App;
