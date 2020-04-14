/** This is where you instatiate the Accounts Class */
import React, { Component } from "react";
import "./accounts.css";
import AccountController from "./accountPSC.js";
import AccountCard from "./accountCard.js";

/** Create a Stateful Component Class called Accounts */
class Accounts extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      startingBalanceInput: "",
      totalDisplay: "",
      highestDisplay: "",
      lowestDisplay: ""
    };
    this.accountManager = new AccountController();
  }
  //This is inside the Class - a Method
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCreateNewAccount = () => {
    //minor validition
    //get values from inputs
    //call pojo create handler
    this.accountManager.createAccount(
      this.state.nameInput,
      this.state.startingBalanceInput
    );
    this.calculate();
    //Set(Reset) the State of this Class - Accounts
    this.setState({
      nameInput: "",
      startingBalanceInput: ""
    });
    // console.log(this.accountManager.highestAccount().balance);
    // console.log(this.accountManager.accountList);
  };

  handleDelete = accountName => {
    this.accountManager.removeAccount(accountName);
    this.calculate();
    this.setState({
      nameInput: ""
    });
  };

  calculate = () => {
    this.setState({
      totalDisplay: this.accountManager.totalAccounts(),
      highestDisplay: this.accountManager.highestAccount().balance,
      lowestDisplay: this.accountManager.lowestAccount().balance
    });
  };

  renderCards = () => {
    return this.accountManager.accountList.map(accountEach => {
      return (
        <AccountCard
          key={accountEach.accountName}
          account={accountEach}
          calculate={this.calculate}
          removeAccount={this.handleDelete}
        />
      );
    });
  };

  render() {
    return (
      <section>
        <h2> My Accounts </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" className="leftPanel">
            Account Manager
            <input
              id="input1"
              type="text"
              placeholder="Add an Account Name"
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.handleInputChange}
            />
            <input
              id="input2"
              type="number"
              placeholder="Enter initial balance"
              name="startingBalanceInput"
              value={this.state.startingBalanceInput}
              onChange={this.handleInputChange}
            />
            <button
              className="addBalance"
              id="idAddBalance"
              onClick={this.handleCreateNewAccount}
            >
              Create New Account
            </button>
            {/* <h2> Account List </h2> */}
            {this.renderCards()}
          </div>

          <div id="idRightPanel" className="rightPanel">
            {" "}
            My Current Balances
            <h3 id="display">
              Total Balance of Accounts: {this.state.totalDisplay}
            </h3>
            <h3 id="display">Highest Account: {this.state.highestDisplay}</h3>
            <h3 id="display">Lowest Account: {this.state.lowestDisplay}</h3>
          </div>
        </div>
      </section>
    );
  }                                                                               //Close Render
}                                                                                 //Close Object

export default Accounts;
