import React, { Component } from 'react';
import MovieCastDetail from'./MovieCastDetail'

class MovieCasting extends Component{
    
        // static PropTypes={
        //     casts:PropTypes.array.isRequired,
        // //     // character_name:PropTypes.string.isRequired,
        // //     // name:PropTypes.string.isRequired,
        // //     // url_small_image:PropTypes.string.isRequired
        // }
            
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
    // MovieCasting.propTypes={
    //     casts:PropTypes.array.isRequired,
    // //     character_name:PropTypes.string.isRequired,
    // //     name:PropTypes.string.isRequired,
    // //     url_small_image:PropTypes.string.isRequired
    // }
export default MovieCasting;