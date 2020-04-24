import React, { Component } from "react";

class ImageDetails extends Component {
  state = {};
  getFromProps() {
    if (this.props.match.params === undefined) return this.props.data[0];
    return this.props.data.filter(
      (detail) => detail.id === "" + this.props.match.params.id
    )[0];
  }
  render() {
    console.log(this.props);
    const data = this.getFromProps();
    return (
      <div id="large">
        <div className="group">
          <img
            src={"/images/large/" + data.image}
            alt="Large Image"
            width="430"
            height="360"
          />
          <div className="details">
            <p>
              <strong>Title</strong> {data.title}}
            </p>
            <p>
              <strong>Description</strong> {data.description}
            </p>
            <p>
              <strong>Cost</strong> {data.cost}
            </p>
            <p>
              <strong>ID #</strong> {data.id}
            </p>
            <p>
              <strong>Thumbnail File</strong>
              {data.thumbnail}
            </p>
            <p>
              <strong>Large Image File</strong> {data.image}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageDetails;
