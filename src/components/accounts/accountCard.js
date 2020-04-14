
import React, { Component } from 'react';
import './accounts.css';

class AccountCard extends Component {
  constructor() {
    super();
    this.state = {
      updateAmountInput: "",
      updatedBalance: ""
    }
  }

  handleInputChange2 = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDeposit = () => {
    this.props.account.deposit(Number(this.state.updateAmountInput));
    this.setState({
      updateAmountInput: "",
      updatedBalance: this.props.account.balance
    })
    this.props.calculate();
  }

  handleWithdrawal = () => {
    this.props.account.withdrawal(Number(this.state.updateAmountInput));
    this.setState({
      updateAmountInput: "",
      updatedBalance: this.props.account.balance
    })
    this.props.calculate();
  }

  render() {
    return (
          <div id ="card" className = "card">{this.props.account.accountName}
          <h3>Amount:{this.props.account.balance }</h3>
            <input id="input1" 
            type="number" 
            placeholder="Please enter amount" 
            name="updateAmountInput"
            value={this.state.updateAmountInput}
            onChange={this.handleInputChange2}/>
            <button className="addBalance" id="idAddBalance" onClick={this.handleDeposit}>Deposit</button>
            <button className="addBalance" id="idAddBalance" onClick={this.handleWithdrawal}>Withdrawal</button>
            <button className="addBalance" id="idAddBalance" onClick = { () =>this.props.removeAccount(this.props.account.accountName)}>Delete Account</button>
          </div> 
    );
  }
}

export default AccountCard;


