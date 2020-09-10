import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import twitterLogo from "../images/twitter.svg";
import facebookLogo from "../images/facebook.svg";
import instagramLogo from "../images/instagram2.svg";
import spotifyLogo from "../images/spotify.svg";
import face from "../images/face.svg";
import dollar from "../images/dollar.svg";
import clock from "../images/clock.svg";
import house from "../images/house.svg";
import beer from "../images/beer.svg";
import broom from "../images/broom.svg";
import guests from "../images/guests.svg";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      profilePic:
        "https://avatars1.githubusercontent.com/u/21094532?s=460&u=cb7710ccbc3991cc0c4ce628c39b51811fa12480&v=4",
      firstName: "Karen",
      age: "21",
      personalTitle: "Professional",
      bio:
        "Hey, I'm Karen! I just graduated from UC Berkeley and I'm currently moving to Boston to work as a software engineer. I'd love to find somebody to find an apartment there with.",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      spotifyLink: "",
      neighborhoods: ["Fenway", "Brighton"],
      numHousemates: "1 housemate",
      maxBudget: "$1000 per month",
      movingDate: "June 2020",
      cleanScore: "",
      guestScore: "",
      alcoholScore: "",
    };
  }

  componentDidMount() {
    if (!this.state.userId) {
      return
    }
    const url = "/profiles/" + this.state.userId; 
    axios.get(url).then(
      (response) => {
        console.log(response);
        const habitsProfile = response.data[0];
        const basicProfile = response.data[1];

        if (basicProfile) {
          this.setState({
            firstName: basicProfile.firstName,
            bio: basicProfile.bio,
          });
        }

        if (habitsProfile) {
          this.setState({
            cleanScore: habitsProfile.cleanScore,
            guestScore: habitsProfile.guestScore,
            alcoholScore: habitsProfile.alcoholScore,
          });
        }
      },
      (error) => {
        console.log(error);
        //alert("Error"); stifling this b/c only seem to be getting error when function called when nobody logged in
      }
    );
  }

  render() {
    return (
      <div>
        <div class="row" style={{ margin: "0 auto" }}>
          <div class="col-md">
            <div class="row">
              <img
                class="rounded-circle"
                src={this.state.profilePic}
                data-holder-rendered="true"
                style={{
                  width: 200,
                  border: "3px solid white",
                  marginLeft: 70,
                }}
              />
            </div>
            <div class="row">
              <div class="socials" style={{ display: "flex" }}>
                <Social link={this.state.facebookLink} logo={facebookLogo} />
                <Social link={this.state.instagramLink} logo={instagramLogo} />
                <Social link={this.state.twitterLink} logo={twitterLogo} />
                <Social link={this.state.spotifyLink} logo={spotifyLogo} />
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row" style={{ marginTop: 30 }}>
              <div class="userName">
                {this.state.firstName}, {this.state.age} <br />
              </div>
            </div>
            <div class="row">
              <div class="personalTitle">{this.state.personalTitle}</div>
            </div>
            <div class="row">
              <div class="bioContainer">
                <p id="bio">{this.state.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="row"
          style={{
            margin: "0 auto",
            marginTop: 60,
            backgroundColor: "white",
            padding: 10,
            maxWidth: "89%",
          }}
        >
          <div class="sectionTitle">
            {this.state.firstName}'s Housing Preferences
          </div>
        </div>

        <div
          class="row"
          style={{
            margin: "0 auto",
            backgroundColor: "white",
            padding: 10,
            maxWidth: "89%",
          }}
        >
          <div
            class="housingPreferences"
            style={{ display: "flex", margin: "0 auto" }}
          >
            <IconInfo
              icon={house}
              caption="Prefers living in"
              options={this.state.neighborhoods}
              type="neighborhoodPref"
            />
            <IconInfo
              icon={face}
              caption="Looking for"
              options={this.state.numHousemates}
              type="pref"
            />
            <IconInfo
              icon={dollar}
              caption="Can spend up to"
              options={this.state.maxBudget}
              type="pref"
            />
            <IconInfo
              icon={clock}
              caption="Moving in"
              options={this.state.movingDate}
              type="pref"
            />
          </div>
        </div>

        <div
          class="row"
          style={{
            margin: "0 auto",
            marginTop: 60,
            backgroundColor: "white",
            padding: 10,
            maxWidth: "89%",
          }}
        >
          <div class="sectionTitle">{this.state.firstName}'s Lifestyle</div>
        </div>
        <div
          class="row"
          style={{
            margin: "0 auto",
            backgroundColor: "white",
            padding: 10,
            maxWidth: "89%",
          }}
        >
          <div class="housingPreferences" style={{ display: "flex" }}>
            <IconInfo
              icon={broom}
              caption="clean"
              options={this.state.cleanScore}
              type="habit"
            />
            <IconInfo
              icon={guests}
              caption="has guests over"
              options={this.state.guestScore}
              type="habit"
            />
            <IconInfo
              icon={beer}
              caption="drinks"
              options={this.state.alcoholScore}
              type="habit"
            />
          </div>
        </div>
      </div>
    );
  }
}

function Social(props) {
  return (
    <div class="col-sm">
      <a href={props.link}>
        <img src={props.logo} class="icon" alt="logo" />
      </a>
    </div>
  );
}

function IconInfo(props) {
  if (props.type === "neighborhoodPref") {
    var fullCaption = props.caption + "\xa0" + props.options.join(", ");
  } else if (props.type === "pref") {
    var fullCaption = props.caption + "\xa0" + props.options;
  } else {
    var freq = "Sometimes";
    if (parseInt(props.options) === 100) {
      freq = "Frequently";
    }
    if (parseInt(props.options) === 0) {
      freq = "Never";
    }
    var fullCaption = freq + "\xa0" + props.caption;
  }
  return (
    <div class="col">
      <img src={props.icon} class="rounded mx-auto d-block icon" alt="icon" />
      <p class="iconCaption">{fullCaption}</p>
    </div>
  );
}

ReactDOM.render(<Profile />, document.getElementById("root"));

export default Profile;
