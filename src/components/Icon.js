/** Renders Icons on Main Screen then Exports the Icon Class ?????? */

import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <img
        name={this.props.name}
        src={this.props.image}
        className="icon"
        style={this.props.style}
        onClick={this.props.onClick}
        alt="iconName"
      />
    );
  }
}

export default Icon;
