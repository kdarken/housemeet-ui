import React, { Component } from "react";
import MiniProfile from "../components/MiniProfile";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        matchIds: []
    };
}

  componentDidMount() {
    const url = '/profiles/matches/' + localStorage.getItem('name'); //TODO: change to unique ID
    axios.get(url)
      .then((response) => {
        console.log(response);
        this.setState({ 
            matchIds: response.data
        });      
      }, (error) => {
        console.log(error);
        //alert("Error"); stifling this b/c only seem to be getting error when function called when nobody logged in
      });
  }

  render() {
    return (
      <div class="home">
        <div class="homeInner">
          <div class="row justify-content-center">
            {this.state.matchIds.map(function(id){
              return <div class="column">
                <div class="mr-3">
                  <MiniProfile id={id} />
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
