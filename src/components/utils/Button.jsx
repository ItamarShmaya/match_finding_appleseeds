import React from "react";

export default class Button extends React.Component {
  render() {
    const { name, value, onClick } = this.props;
    return (
      <button className="btn" name={name} onClick={onClick}>
        {value}
      </button>
    );
  }
}
