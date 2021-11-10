import React, { Component } from "react";
import "../css/header.css";
import logo from "../assets/icons/app_logo.svg"

export default class Header extends Component {
  goBack() {
    window.open("https://data4v1.herokuapp.com/", "_self");
  }

  render() {
    return (
      <div id="header">
        <img src={logo} alt="DATA4∀1 Logo" />
        <a href=".">DATA4∀1 | Browse</a>
        <button onClick={this.goBack}>Go Back</button>
      </div>
    );
  }
}
