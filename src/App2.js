/** */

import React, { Component } from "react"; //Import the React Library
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import logo from "./logo.svg"; //Import the React Logo
import Icon1 from "./icons/Sunny-Day-Osd-sun.ico"; //Import the Icons
import Icon2 from "./icons/tic-tac-toe_39453.ico"; //Import the Icons
import Icon3 from "./icons/Flat-Finance-Bank.ico"; //Import the Icons
import Icon4 from "./icons/Home.ico"; //Import the Icons
import Icon5 from "./icons/link.ico"; //Import the Icons
import "./App.css"; //Import the CSS file
import Starter from "./components/Starter.js";
import Icon from "./components/Icon.js";
import Game from "./components/tictactoe/Game.js";
import Accounts from "./components/accounts/accounts.js"; //Import the accounts file (Object)
import Cities from "./components/cities/cities.js"; //Import the cities file (Class)?
// import LinkedList from "./components/linkedlist/LinkedList.js"; //Import the linked list file (Class)?

/** Create a Stateful Component Class called App */
class App extends Component {
  constructor() {
    super();
    this.state = {
      //Sets the default Icon
      selected: Icon1 //Setting the State of selected to the First Icon = xmas1
    };
    this.style = { backgroundColor: "#d4bea7" };
    this.icons = [Icon1, Icon2, Icon3, Icon4, Icon5];
  }

  onSelect = event => {
    //Reset the State of selected to the Icon Clicked (i.e. xmas1)
    this.setState({
      //Re-useable
      selected: event.target.name
    });
  };

  showPage = () => {
    if (this.state.selected === Icon1) return <Starter logo={logo} />;
    if (this.state.selected === Icon2) return <Game />;
    if (this.state.selected === Icon3) return <Accounts />;
    if (this.state.selected === Icon4) return <Cities />;
    // if (this.state.selected === Icon5) return <LinkedList />;
  };

  renderIcons = () => {
    return this.icons.map(icon => {
      return (
        <Icon
          key={icon}
          name={icon}
          image={icon}
          style={this.state.selected === icon ? this.style : null}
          onClick={this.onSelect}
        />
      );
    });
  };
  /** The render method from React) */
  render() {
    return (
      <div className="App">
        <div>
          <nav className="Nav">{this.renderIcons()}</nav>
          {this.showPage()}
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    );
  }
}

export default App; //export is used to export a SINGLE Class, function or primitive
