import React from "react";
import "./MainContent.css";

export default class MainContent extends React.Component {
  render() {
    const {
      image: { url, description },
    } = this.props;
    return (
      <div className="displayed-image">
        <img alt={description} src={url} />
        <div className="desc">{description}</div>
      </div>
    );
  }
}
