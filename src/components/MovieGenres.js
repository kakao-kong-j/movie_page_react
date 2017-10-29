import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MovieGenres extends Component{
    
        static PropTypes={
            genre:PropTypes.array.isRequired
        }
        render(){
            return(
                <span className="Movie__Genre">  {this.props.genre}  </span>
            )
        }
    }
    MovieGenres.propTypes={
        genre:PropTypes.string.isRequired
    }
export default MovieGenres;