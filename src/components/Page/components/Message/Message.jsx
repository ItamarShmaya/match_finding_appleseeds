import React from "react";
import "./Message.css";

export default class Message extends React.Component {
  displayMessage = (dislike, like) => {
    if (like > dislike) return "You like cute animals";
    else if (like < dislike) return "You dislike cute animals";
    else return "You like and dislike cute animals at the same time";
  };
  render() {
    const { dislike, like } = this.props;
    return <div className="message">{this.displayMessage(dislike, like)}</div>;
  }
}
