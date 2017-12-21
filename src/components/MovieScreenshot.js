import React, { Component } from "react";

class MovieScreenshot extends Component {
  render() {
    return (
      <div>
        <h1>MovieScreenshot:</h1>
        <div className="Movie__ScreenShot_Each">
          <img src={this.props.img1} alt={this.props.img1} />
        </div>
        <div className="Movie__ScreenShot_Each">
          <img src={this.props.img2} alt={this.props.img2} />
        </div>
        <div className="Movie__ScreenShot_Each">
          <img src={this.props.img3} alt={this.props.img3} />
        </div>
      </div>
    );
  }
}

export default MovieScreenshot;
