import React, { Component } from 'react';
import '../css/MovieDetail.css';
import MovieScreenshot from '../components/MovieScreenshot';
import MoviePoster from '../components/MoviePoster';
import MovieGenres from '../components/MovieGenres';
import MovieCasting from'../components/MovieCasting';
class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
      this._getMoviesDetail();
    }
     _getMoviesDetail=async()=>{
        const movieinfo=await this._callDetailAPI()
        this.setState({
            movieinfo
        })    
    }
    _callDetailAPI=()=>{
      return fetch("https://yts.ag/api/v2/movie_details.json?with_images=true&with_cast=true&movie_id="+this.props.match.params.id)
      .then(temp=>temp.json())
      .then(json=> json.data.movie)
      .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                <div>
                {this.state.movieinfo ? 
                    <div className="MovieDetail">
                        <div className="MovieDetail__Column">
                            <MoviePoster poster={this.state.movieinfo.large_cover_image} alt={this.state.movieinfo.title}/>
                        </div>
                        <div className="MovieDetail__Column">
                            <h1>
                                {this.state.movieinfo.title}
                            </h1>
                            <div className="MovieDetail__Genres">
                                Genre : {this.state.movieinfo.genres.map((genre,index)=><MovieGenres genre={genre} key={index}/>)}
                            </div>
                            <div className="MovieDetail__rating">
                                Rating : {this.state.movieinfo.rating}
                            </div>
                            <br/>
                            <div className="MovieDetail__language">
                                Language : {this.state.movieinfo.language}
                            </div>
                            <br/>
                            <div className="MovieDetail__runtime">
                                Runtime : {this.state.movieinfo.runtime} min
                            </div>
                            <br/>
                            <div className="MovieDetail__years">
                                Year : {this.state.movieinfo.year}
                            </div>
                            <div className="MovieDetail__Casting">
                                <h1>
                                    Casting
                                </h1>
                                {this.state.movieinfo.cast.map((casts,index)=><MovieCasting casts={casts} key={index}/>)}
                            </div>
                            <h1>Description</h1>
                            <div className="MovieDetail__description">
                                
                                {this.state.movieinfo.description_full}
                            </div>
                        </div>
                        <div className="MovieDetail__Column">
                            <div className="MovieDetail__ScreenShot">
                                <MovieScreenshot 
                                img1={this.state.movieinfo.large_screenshot_image1} 
                                img2={this.state.movieinfo.large_screenshot_image2} 
                                img3={this.state.movieinfo.large_screenshot_image3}/>
                            </div>
                        </div>
                    </div>
                    :'Loading'}
              </div>
            </div>
        );
    }
}

export default MovieDetail;

// <Movie
// id={this.state.movieinfo.id}
// language={this.state.movieinfo.language}
// rt_rating={this.state.movieinfo.with_rt_ratings}
// rating={this.state.movieinfo.rating}
// title={this.state.movieinfo.title_english} 
// poster={this.state.movieinfo.large_cover_image} 
// key={this.state.movieinfo.id} 
// genres={this.state.movieinfo.genres}
// synopsis={this.state.movieinfo.synopsis}
// year={this.state.movieinfo.year}/>