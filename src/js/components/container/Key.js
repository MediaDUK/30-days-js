import React, { Component } from "react";
class Key extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-key={this.props.keyCode} className="key">
        <kbd>{this.props.keyLetter}</kbd>
        <span className="sound">{this.props.name}</span>
      </div>
    );
  }
}
export default Key;
