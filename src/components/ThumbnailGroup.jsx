import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import { Redirect } from "react-router-dom";

class ThumbnailGroup extends Component {
  state = {
    thumbnailIndex: 0,
    currThumbnails: this.props.data.filter(
      (details, idx) => Math.floor(idx / 4) === Math.floor(0 / 4)
    ),
  };
  onPreviousClicked = () => {
    this.state.thumbnailIndex--;
    const newThumbnails = this.props.data.filter(
      (details, idx) =>
        Math.floor(idx / 4) === Math.floor(this.state.thumbnailIndex)
    );
    this.setState({ currThumbnails: newThumbnails });
  };
  onNextClicked = () => {
    this.state.thumbnailIndex++;
    const newThumbnails = this.props.data.filter(
      (details, idx) =>
        Math.floor(idx / 4) === Math.floor(this.state.thumbnailIndex)
    );
    this.setState({ currThumbnails: newThumbnails });
  };
  render() {
    var onNext = this.onNextClicked;
    var onPrevious = this.onPreviousClicked;
    return (
      <div className="thumbnails">
        <Redirect to={this.props.data[0].id} />
        <div className="group">
          {this.state.currThumbnails.map((thumbnail) => (
            <Thumbnail key={thumbnail.id} data={thumbnail} id={thumbnail.id} />
          ))}
          <input
            type="image"
            onClick={onPrevious}
            className="previous"
            title="Previous"
            disabled={this.state.thumbnailIndex === 0}
            src={require("../icons/previous.png")}
          />

          <input
            type="image"
            onClick={onNext}
            className="next"
            title="Next"
            disabled={
              this.state.thumbnailIndex ===
              Math.floor(this.props.data.length / 4)
            }
            src={require("../icons/next.png")}
          />
        </div>
      </div>
    );
  }
}

export default ThumbnailGroup;
