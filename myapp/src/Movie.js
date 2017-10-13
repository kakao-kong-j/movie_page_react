import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './movie.css';

class Movie extends Component{

    static propType={
        title:PropTypes.string,
        poster:PropTypes.string
    }
    render(){
        return(
            <div>
            <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static PropTypes={
        poster:PropTypes.string.isRequired
    }
    render(){
        console.log(this.props)
        return(
            <img src={this.props.poster}/>
        )
    }
}
// }
// function Movie({title,poster}){
//     return(
//         <div>
//         <MoviePoster poster={poster}/>
//         <h1>{title}</h1>
//         </div>
//     )
// }
// function MoviePoster({poster}){
//     return(
//         <img src={poster} alt="Movie Poster"/>
//     )
// }
Movie.propTypes={
    poster:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
    
}
MoviePoster.propTypes={
    poster:PropTypes.string.isRequired
}
export default Movie;