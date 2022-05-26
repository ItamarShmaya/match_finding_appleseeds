import React from "react";

export default class Counter extends React.Component {
  render() {
    const { count, icon } = this.props;
    return (
      <div className="counter">
        <div className="icon">{icon}</div>
        <div className="count">{count}</div>
      </div>
    );
  }
}
