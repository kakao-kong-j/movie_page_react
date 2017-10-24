import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/movie.css';
import LinesEllipsis from'react-lines-ellipsis'

class Movie extends Component{


    render(){
        return(
            <div className="Movie">
                <div className="Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/>
                </div>
                <div className="Movie__Column">
                    <a href={"./moviedetail?id="+this.props.id}>{this.props.title}</a>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre,index)=><MovieGenres genre={genre} key={index}/>)}
                    </div>
                    <div className="Movie__Synopsis">
                    <LinesEllipsis
                    text={this.props.synopsis}
                    maxLine='3'
                    ellipsis='....'
                    trimRight
                    baseOn='letters'
                    />
                    </div>
                </div>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static PropTypes={
        poster:PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} title={this.props.alt} className="Movie__Poster"/>
        )
    }
}
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
    title:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
    
}
MoviePoster.propTypes={
    alt:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
MovieGenres.propTypes={
    genre:PropTypes.string.isRequired
}
export default Movie;