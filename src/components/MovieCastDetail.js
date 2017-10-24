import React, { Component } from 'react';

class MovieCastDetail extends Component {
    // static PropTypes={
    //     casts:PropTypes.array.isRequired,
    //     // character_name:PropTypes.string.isRequired,
    //     // name:PropTypes.string.isRequired,
    //     // url_small_image:PropTypes.string.isRequired
    // }
    render() {
        return (
            <div>
                <span className="Movie__CastingDetail">  
                    <div className="Casting_Img">
                    <img src={this.props.url_small_image} title={this.props.name} alt={this.props.name} className="Casting__Img"/>
                    </div>
                    <div className="Casting_Name">
                        name: {this.props.name}
                    </div>
                    <div className="Casting_CharacterName">
                    character name: {this.props.character_name}
                    </div>
                </span>
            </div>
        );
    }
}

export default MovieCastDetail;