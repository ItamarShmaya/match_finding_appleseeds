import React from "react";
import Header from "../Header/Header.jsx";
import MainContent from "../Body/MainContent.jsx";
import BottomMenu from "../BottomMenu/BottomMenu.jsx";
import images from "../../../../data/data.js";
import Message from "../Message/Message.jsx";
import "./Page.css";

export default class Page extends React.Component {
  state = { dislike: 0, like: 0, imageToDisplay: images[0] };

  onClick = ({ target: { name } }) => {
    if (this.state.imageToDisplay) {
      this.setState((prev) => {
        const index = images.indexOf(prev.imageToDisplay);
        return { [name]: prev[name] + 1, imageToDisplay: images[index + 1] };
      });
    }
  };

  render() {
    const { dislike, like, imageToDisplay } = this.state;
    return (
      <div className="main">
        <Header dislike={dislike} like={like} />
        {imageToDisplay ? (
          <MainContent image={imageToDisplay} />
        ) : (
          <Message like={like} dislike={dislike} />
        )}
        <BottomMenu onClick={this.onClick} />
      </div>
    );
  }
}
