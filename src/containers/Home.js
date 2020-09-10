import React, { Component } from "react";
import MiniProfile from "../components/MiniProfile";
import Profile from "../components/Profile";
import "./ProfilePage.css";
import ProfilePage from "../containers/ProfilePage";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        matchIds: [],
        miniProfileClicked: false, 
        clickedProfileId: ""
    };
    this.handleMiniProfileClick = this.handleMiniProfileClick.bind(this);
}

  componentDidMount() {
    const url = '/profiles/matches/' + localStorage.getItem("userId");
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

  handleMiniProfileClick = (clickedProfileId) => {
    this.setState({miniProfileClicked: !this.state.miniProfileClicked})
    this.setState({clickedProfileId: clickedProfileId})
    console.log("hi" + this.state.clickedProfileId)
  }

  render() {
    return (
      <div class="home">
        <div class="homeInner">
            <RenderComponent miniProfileClicked={this.state.miniProfileClicked} clickedProfileId={this.state.clickedProfileId} matchIds={this.state.matchIds} handleMiniProfileClick={this.handleMiniProfileClick} />
        </div>
      </div>
    );
  }
}

function MiniProfiles(props) {
  return (
    <div class="row justify-content-center">
    {props.matchIds.map(function(id){
      return <div class="column">
        <div class="mr-3">
          <MiniProfile id={id} handleMiniProfileClick={props.handleMiniProfileClick} />
        </div>
      </div>;
    })}
    </div>
  );
}

function RenderComponent(props) {
  return (
    <div>
    {props.miniProfileClicked 
    ? <div className="profileContainer">
          <div className="profileInner">
              <Profile userId={props.clickedProfileId} />
          </div>
      </div>
    : <MiniProfiles matchIds={props.matchIds} handleMiniProfileClick={props.handleMiniProfileClick} />}
    </div>

  );
}

export default Home;
