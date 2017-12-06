import React, { Component } from 'react';
import '../css/MovieList.css';
import Movie from './Movie';
import {firebaseAuth} from '../script/firebase' 
import SearchComponent from'../components/SearchComponent';

class MovieList extends Component {
constructor(props){
  super(props)
  this.state={
    pages:1,
    searchValue:''
  }
  this.handler = this.handler.bind(this);
}
  componentDidMount(){
    this._getMovies();
  }
  _getMovies=async()=>{
    if(this.state.searchValue){
      const movies=await this._callAPI_search()
      this.setState({
        movies
      })    
    }
    else{
      const movies=await this._callAPI()
      this.setState({
        movies
      })    
    }
  }
  _callAPI=()=>{
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count&page="+this.state.pages)
    .then(temp=>temp.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }
  _callAPI_search=()=>{
    return fetch("https://yts.am/api/v2/list_movies.json?query_term="+this.state.searchValue)
    .then(temp=>temp.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }
  
  _renderMovies=()=>{
    const movies=this.state.movies.map(movie=>{
      return <Movie 
    id={movie.id}
    language={movie.language}
    rt_rating={movie.with_rt_ratings}
    rating={movie.rating}
    title={movie.title_english} 
    poster={movie.medium_cover_image} 
    key={movie.id} 
    genres={movie.genres}
    synopsis={movie.synopsis}
    year={movie.year}
    />
  })
  return movies
}
nextPage() {
  this.setState((prevState, props) => {
    return { pages: prevState.pages+1}
  });
}
prevPage() {
  this.setState((prevState, props) => {
    return { pages: prevState.pages-1}
  });
}
reRenderingPrevPage(){
  const a=this
  setTimeout(function () {
    a.prevPage();
    a._getMovies();
  }, 0);
  
}
reRenderingNextPage(){
  const a=this
  setTimeout(function () {
    a.nextPage();
    a._getMovies();
  }, 0);
}
handler(text){
  this.setState({
    searchValue:text
});
}
render() {
    return (
          <div>
          <SearchComponent handler = {this.handler} getmovie={this._getMovies}/>
          <div className={ this.state.movies ? "App" : "App-loading"}>
          {this.state.movies ? this._renderMovies():'Loading'}
          </div>
            <button className="arrowbutton" id='leftButton' onClick={() => this.reRenderingPrevPage()}>
              <img src={require('../img/left-arrow.png')} alt={'Prev Page'}/>
            </button>
            <button className="arrowbutton" id='rightButton' onClick={() => this.reRenderingNextPage()}>
              <img src={require('../img/right-arrow.png')} alt={'Next Page'}/>
            </button>
          </div>
    );
  }
}

export default MovieList;
