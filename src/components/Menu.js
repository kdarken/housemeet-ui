import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import withRouter from "react-router-dom";
import menu from "../images/menu.svg";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class Menu extends Component {
    constructor(props) {
        super(props);       
    }

    

    render() {
        return (
            <Router>
                <div style={{ position: "absolute", left: "87%", top: "0%", display: "flex" }}>
                    <div class="btn-group dropleft">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginTop: "16%", backgroundColor: "transparent", color: "black", border: "none", outline: "none"}}>
                        Hi, <span style={{ fontWeight: "bold", flexDirection: "row" }}>{localStorage.getItem('name')}</span>
                        <img
                            src={menu}
                            className="menu"
                            alt="menu"
                            class="rounded mx-auto d-block"
                            style={{
                            width: 25,
                            flexDirection: "row",
                            float: "right",
                            marginTop: "4%",
                            paddingLeft: "8%"
                            }}
                        />
                        </button>

                        <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="/home">Home</a>
                        <Link to="/">
                            <button class="dropdown-item" type="button" onClick={() => {localStorage.clear()}}>
                            Logout
                            </button>
                        </Link>
                        <a class="dropdown-item" href="/profile">Profile</a>
                        <a class="dropdown-item" href="/profile/edit">Edit Profile</a>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Menu />, document.getElementById("root"));

export default Menu;