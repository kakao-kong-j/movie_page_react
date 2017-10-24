import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MoviePoster extends Component {
    static PropTypes={
        poster:PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} title={this.props.alt} alt={this.props.alt} className="Movie__Poster"/>
        )
    }
}
MoviePoster.propTypes={
    alt:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
export default MoviePoster;