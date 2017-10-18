import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';
import InfiniteScroll from 'react-infinite-scroller';


//Update componentWillReceiveProps() -> shouldComponentUpdate()->componentWillUpdate()->render()->componentDidUpdate()
//Render componentWillMount() -> render() -> componentDidMount()
class App extends Component {
  state={}
  componentDidMount(){
    this._getMovies();
  }
   _getMovies=async()=>{
      const movies=await this._callAPI()
      this.setState({
        movies
      })    
  }
  _callAPI=()=>{
    return fetch("https://yts.ag/api/v2/list_movies.json?sort_by=download_count")
    .then(potato=>potato.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }
_renderMovies=()=>{
  const movies=this.state.movies.map(movie=>{
    return <Movie 
    title={movie.title_english} 
    poster={movie.large_cover_image} 
    key={movie.id} 
    genres={movie.genres}
    synopsis={movie.synopsis}
    />
  })
  return movies
}
  render() {
    return (
      <div className={ this.state.movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies():'Loding'}
      </div>
    );
  }
}

export default App;
