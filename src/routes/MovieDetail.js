import React, { Component } from 'react';
import '../css/MovieDetail.css';
import MovieScreenshot from '../components/MovieScreenshot';
import MoviePoster from '../components/MoviePoster';
import MovieGenres from '../components/MovieGenres';
import MovieCasting from '../components/MovieCasting';
import Comment from '../components/Comment';
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this._getMoviesDetail();
    this._getMoviesCasting();
  }
  _getMoviesDetail = async () => {
    const movieinfo = await this._callDetailAPI();
    this.setState({
      movieinfo
    });
  };
  _getMoviesCasting = async () => {
    const movieCasting = await this._callCastingAPI();
    console.log(movieCasting)
    const movieCast = movieCasting.cast.filter((cast,index)=>{
      return index<5
    }
  
  )
    this.setState({
      movieCasting:movieCast
    });
  };
  _callDetailAPI = () => {
    return fetch(
      'https://api.themoviedb.org/3/movie/' +
        this.props.match.params.id +
        '?api_key=0dcfe644f06f6d2555dd2e8f96508646&language=en-US'
    )
      .then((temp) => temp.json())
      .catch((err) => console.log(err));
  };
  _callCastingAPI = () => {
    return fetch(
      'https://api.themoviedb.org/3/movie/' +
        this.props.match.params.id +
        '/credits?api_key=0dcfe644f06f6d2555dd2e8f96508646&language=en-US'
    )
      .then((temp) => temp.json())
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div>
          {this.state.movieinfo&&this.state.movieCasting? (
            <div className="MovieDetail">
              <div className="MovieDetail__Column" id="Movie_Poster_Column">
                <MoviePoster
                  poster={"https://image.tmdb.org/t/p/w500"+this.state.movieinfo.poster_path}
                  alt={this.state.movieinfo.title}
                />
              </div>
              <div className="MovieDetail__Column" id="Movie_Details_Column">
                <h1 style={{color:"black"}}>{this.state.movieinfo.title}</h1>
                <div className="MovieDetail__Genres">
                  Genre :
                  {this.state.movieinfo.genres.map((genre, index) => (
                    <MovieGenres genre={genre.name} key={index} />
                  ))}
                </div>
                <div className="MovieDetail__rating">
                  Rating : {this.state.movieinfo.vote_average}
                </div>
                <br />
                <div className="MovieDetail__language">
                  Language : {this.state.movieinfo.original_language}
                </div>
                <br />
                <div className="MovieDetail__runtime">
                  Runtime : {this.state.movieinfo.runtime} min
                </div>
                <br />
                <div className="MovieDetail__release_date">
                  Date : {this.state.movieinfo.release_date}
                </div>
                <div className="MovieDetail__Casting">
                  <h1>Casting</h1>
                  {console.log(this.state.movieCasting)}
                   {
                     this.state.movieCasting.map((casts, index) => (
                        <MovieCasting casts={casts} key={index} />
                   ))
                   
                  }
                </div>
                <h1>Description</h1>
                <div className="MovieDetail__description">
                  {this.state.movieinfo.overview}
                </div>
              </div>
              <div className="MovieDetail__Column">
                <div className="MovieDetail__ScreenShot">
                  <MovieScreenshot
                    img1={this.state.movieinfo.large_screenshot_image1}
                    img2={this.state.movieinfo.large_screenshot_image2}
                    img3={this.state.movieinfo.large_screenshot_image3}
                  />
                </div>
              </div>
              <div className="Comment">
                <Comment
                  title={this.state.movieinfo.title}
                  poster={"https://image.tmdb.org/t/p/w500"+this.state.movieinfo.poster_path}
                  id={this.state.movieinfo.id}
                />
              </div>
            </div>
          ) : (
            'Loading'
          )}
        </div>
      </div>
    );
  }
}

export default MovieDetail;
