import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Thumbnail extends Component {
  state = {};
  render() {
    return (
      <NavLink to={this.props.data.id} title={this.props.data.id}>
        <img
          src={"images/thumbnails/" + this.props.data.thumbnail}
          alt={this.props.data.thumbnail}
          width="145"
          height="121"
        />
        <span>{this.props.data.id}</span>
      </NavLink>
    );
  }
}

export default Thumbnail;
