import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniProfile from "../components/MiniProfile";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import "./Home.css";


class Home extends Component {

  render() {
    return (
      <div class="home">
        <div class="homeInner">
          <div class="row justify-content-center">
            <div class="column">
              <div class="mr-3"><MiniProfile /></div>
            </div>
            <div class="column">
              <div class="mr-3"><MiniProfile /></div>
            </div>
            <div class="column">
              <div class="mr-3"><MiniProfile /></div>
            </div>
            <div class="column">
              <MiniProfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
