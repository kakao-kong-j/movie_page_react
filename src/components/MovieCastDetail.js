import React, { Component } from 'react';
import img from "../img/man.png";
class MovieCastDetail extends Component {
    render() {
        return (
            <div>
                <span className="Movie__CastingDetail">  
                    <div className="Casting_Img">
                        <img 
                            src={ (this.props.url_small_image) ? this.props.url_small_image : img}
                            title={this.props.name} alt={this.props.name} className="Casting__Img"/>
                    </div>
                    <div className="Casting_Name">
                        Name: {this.props.name}
                    </div>
                    <div className="Casting_CharacterName">
                    Character Name: {this.props.character_name}
                    </div>
                </span>
            </div>
        );
    }
}

export default MovieCastDetail;