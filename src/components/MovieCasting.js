import React, { Component } from 'react';
import MovieCastDetail from'./MovieCastDetail'

class MovieCasting extends Component{
        render(){
            return(
                <span className="Movie__Casting">  
                    <MovieCastDetail 
                    url_small_image={this.props.casts.url_small_image}
                    name={this.props.casts.name} 
                    character_name={this.props.casts.character_name} 
                    />
                </span>
            )
        }
    }
export default MovieCasting;