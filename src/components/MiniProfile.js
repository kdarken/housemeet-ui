import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import clock from "../images/clock.svg";
import house from "../images/house.svg";
import heart from "../images/heart.svg";
import close from "../images/x.svg";

class MiniProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePic: "https://avatars1.githubusercontent.com/u/21094532?s=460&u=cb7710ccbc3991cc0c4ce628c39b51811fa12480&v=4",
            firstName: "",
            age: "21",
            personalTitle: "Professional",
            housingStatus: "Looking for a home",
            bio: "Hey, I'm Karen! I just graduated from UC Berkeley and I'm currently moving to Boston to work as a software engineer. I'd love to find somebody to find an apartment there with.",
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
            id: this.props.id

        };
    }

    componentDidMount() {
        if (!this.state.id) {
            return
        }
        let emailName = this.state.id.split('@')[0]; //TODO: this is not gonna work for emails other than gmail!!! temporary fix
        console.log(emailName)
        const url = '/profiles/email/' + emailName; //TODO: change to unique ID
        axios.get(url)
        .then((response) => {
            console.log(response);
            this.setState({ 
                firstName: response.data.firstName
            });      
        }, (error) => {
            console.log(error);
            //alert("Error"); stifling this b/c only seem to be getting error when function called when nobody logged in
        });
    }

    render() {
        return (
            <div class="card" style={{width: "18rem"}}>
                <div class="closeContainer">
                    <img class="topButton" 
                        src={close}
                        data-holder-rendered="true" 
                        
                    />
                </div>
                <div class="heartContainer">
                    <img class="topButton" 
                        src={heart}
                        data-holder-rendered="true" 
                        
                    />
                </div>
                <div class="card-body">
                    <div class="profilePicContainer">
                        <img class="rounded-circle profilePic" 
                                src={this.state.profilePic}
                                data-holder-rendered="true" 
                                style={ { border: "3px solid white"} }
                        />  
                    </div> 
                    <h5 class="card-title text-center">{this.state.firstName}, {this.state.age}</h5>
                    <h6 class="card-subtitle mb-2 text-muted text-center">{this.state.personalTitle}</h6>
                    <div style={{float: "left", width: "80%", marginLeft: "8%"}}>
                        <img
                            src={house}
                            class="rounded mx-auto d-block icon"
                            alt="icon"  
                            style={{float: "left", width: "25px"}}              
                        />
                        <p class="card-text">&nbsp; {this.state.housingStatus}</p>
                    </div>
                    <div style={{float: "left", width: "80%", marginLeft: "8%", marginBottom: "15%"}}>
                        <img
                            src={clock}
                            class="rounded mx-auto d-block icon"
                            alt="icon"  
                            style={{float: "left", width: "25px"}}              
                        />
                        <p class="card-text">&nbsp; Moving in {this.state.movingDate}</p>
                    </div>
                 
                </div>
            </div>
            
        );
    }
}

ReactDOM.render(<MiniProfile />, document.getElementById("root"));

export default MiniProfile;