import React from "react";
import Button from "../../../utils/Button";
import "./BottomMenu.css";

export default class BottomMenu extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="bottom-menu">
        <Button name="dislike" value="Dislike" onClick={onClick} />
        <Button name="like" value="Like" onClick={onClick} />
      </div>
    );
  }
}
