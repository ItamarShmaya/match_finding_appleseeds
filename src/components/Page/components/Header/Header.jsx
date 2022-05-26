import React from "react";
import Counter from "../../../utils/Counter";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    const { dislike, like } = this.props;
    return (
      <div className="header">
        <Counter
          count={dislike}
          icon={<i className="fa-solid fa-thumbs-down fa-3x"></i>}
        />
        <Counter
          count={like}
          icon={<i className="fa-solid fa-thumbs-up fa-3x"></i>}
        />
      </div>
    );
  }
}
