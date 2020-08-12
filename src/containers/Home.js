import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniProfile from "../components/MiniProfile";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import "./Home.css";


class Home extends Component {

  render() {
    return (
      <div className="home">
          <MiniProfile />
      </div>
    );
  }
}

export default Home;
