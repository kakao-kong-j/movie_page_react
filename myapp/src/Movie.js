import React, { Component } from 'react';
import './movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
            <MoviePoster/>
        <h1>hello this is a Movie</h1>
            </div>
    )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://cdn-images-1.medium.com/max/510/1*ghsS6XcszTfl9UTYGdYsSg.jpeg"/>
        )
    }
}
export default Movie;