import React, { Component } from "react";
import MovieCastDetail from "./MovieCastDetail";

class MovieCasting extends Component {
  render() {
    return (
      <span className="Movie__Casting">
        <MovieCastDetail
          url_small_image={"https://image.tmdb.org/t/p/w500"+this.props.casts.profile_path}
          name={this.props.casts.name}
          character_name={this.props.casts.character}
        />
      </span>
    );
  }
}
export default MovieCasting;
