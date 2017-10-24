import React, { Component } from 'react';

class MovieScreenshot extends Component {
    render() {
        return (
            <div>
                MovieScreenshot:
                <img src={this.props.img1} alt={this.props.img1}/>
                <img src={this.props.img2} alt={this.props.img2}/>
                <img src={this.props.img3} alt={this.props.img3}/>
            </div>
        );
    }
}

export default MovieScreenshot;