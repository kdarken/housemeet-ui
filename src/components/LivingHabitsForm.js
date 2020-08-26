import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class LivingHabitsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cleanScore: "50",
            cleanScore2: "50",
            guestScore: "50",
            guestScore2: "50",
            alcoholScore: "50",
            alcoholScore2: "50"
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    categoryTitleStyle = {
        fontSize: 20,
        fontWeight: "regular",
        fontFamily: "montserrat",
        textAlign: "center",
        paddingTop: 45
      };
    
    sectionTitleStyle = {
        fontSize: 25,
        fontWeight: "regular",
        fontFamily: "montserrat",
        paddingBottom:30,
        textAlign: "center"
      };

    handleChange(event) {
        const value =  event.target.value;
        this.setState({
          ...this.state,
          [event.target.name]: value
        });
      }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/profiles/update/habits', { 
            email: localStorage.getItem("email"),
            cleanScore: this.state.cleanScore,
            cleanScore2: this.state.cleanScore2,
            guestScore: this.state.guestScore,
            guestScore2: this.state.guestScore2,
            alcoholScore: this.state.alcoholScore,
            alcoholScore2: this.state.alcoholScore2
        })
        .then((response) => {
            console.log(response);
            alert("Your living habits have been successfully updated!");
            //this.props.history.push('/home');
        }, (error) => {
            console.log(error);
            alert("Unable to update your living habits.");
        });
    }

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="col-md">
                        <h4 style={this.sectionTitleStyle}>Your Living Habits</h4>
                        <h5>On an average day, how clean are you?</h5>
                        <Slider
                            colOffset="md-9"
                            scoreName="cleanScore"
                            minName="Hardly"
                            maxName="Very"
                            handleChange={this.handleChange}
                         />
                    </div>
                    <div class="col-md offset-md-2">
                        <h4 style={this.sectionTitleStyle}>Your Ideal Housemate's Living Habits</h4>
                        <h5>On an average day, how clean are they?</h5>
                        <Slider
                            colOffset="md-9"
                            scoreName="cleanScore2"
                            minName="Hardly"
                            maxName="Very"
                            handleChange={this.handleChange}
                         />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md">
                        <h5>How often do you have guests over?</h5>
                        <Slider
                            colOffset="md-7"
                            scoreName="guestScore"
                            minName="Never"
                            maxName="Frequently"
                            handleChange={this.handleChange}
                         />
                    </div>
                    <div class="col-md offset-md-2">
                        <h5>How often do they have guests over?</h5>
                        <Slider
                            colOffset="md-7"
                            scoreName="guestScore2"
                            minName="Never"
                            maxName="Frequently"
                            handleChange={this.handleChange}
                         />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md">
                        <h5>How often do you drink?</h5>
                        <Slider
                            colOffset="md-7"
                            scoreName="alcoholScore"
                            minName="Never"
                            maxName="Frequently"
                            handleChange={this.handleChange}
                         />
                    </div>
                    <div class="col-md offset-md-2">
                        <h5>How often do they drink?</h5>
                        <Slider
                            colOffset="md-7"
                            scoreName="alcoholScore2"
                            minName="Never"
                            maxName="Frequently"
                            handleChange={this.handleChange}
                         />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Update Profile 
                </button>
            </form> 
        </div>
    );
    }
}


function Slider(props) {
    var colSize = "col-sm offset-" + props.colOffset;
    return (
        <div class="form-group">
            <div class="row">
                <div class="col-sm">{props.minName}</div>
                <div class={colSize}>{props.maxName}</div>
            </div>
            <input 
                type="range" 
                class="form-control-range" 
                id="formControlRange" 
                name={props.scoreName} 
                min="0" 
                max="100" 
                step="50" 
                list="steplist" 
                onChange={props.handleChange} 
            />
            <datalist id="steplist">
                <option>0</option>
                <option>50</option>
                <option>100</option>
            </datalist>
        </div>
    );
}


ReactDOM.render(<LivingHabitsForm />, document.getElementById("root"));

export default LivingHabitsForm;