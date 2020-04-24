import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data/templates.json";
import ImageDetails from "./components/ImageDetails";
import ThumbnailGroup from "./components/ThumbnailGroup";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    // const currentImageDetail = data.filter(
    //   (detail) => detail.id === "" + this.props.match.params.id
    // )[0];
    // console.log("", data.indexOf(currentImageDetail));
    return (
      <div className="App">
        <div id="container">
          <header>Code Development Project</header>
          <div id="main" role="main">
            <Router>
              <Route
                path="/:id"
                render={(props) => (
                  <ImageDetails {...props} data={data} defaultId={data[0].id} />
                )}
              />
              {/* <ImageDetails
                id={this.props.match.params.id}
                data={currentImageDetail}
              /> */}

              <ThumbnailGroup data={data} />
            </Router>
          </div>
          <footer>
            <a href="instructions.pdf">Download PDF Instructions</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
