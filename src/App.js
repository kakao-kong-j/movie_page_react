import React, { Component } from 'react';
import './css/App.css';
import Movie from './Movie.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Introduce from './routes/Introduce';
import Home from './routes/Home';
//Update componentWillReceiveProps() -> shouldComponentUpdate()->componentWillUpdate()->render()->componentDidUpdate()
//Render componentWillMount() -> render() -> componentDidMount()
class App extends Component {
  state={pages:1}
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
    return fetch("https://yts.ag/api/v2/list_movies.json?sort_by=rating&page="+this.state.pages)
    .then(potato=>potato.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }
  _renderMovies=()=>{
    const movies=this.state.movies.map(movie=>{
      return <Movie 
    language={movie.language}
    rating={movie.rating}
    title={movie.title_english} 
    poster={movie.large_cover_image} 
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
  this.prevPage();
  this._getMovies();
  console.log(this.state.pages)
}
reRenderingNextPage(){
  this.nextPage();
  this._getMovies();
  console.log(this.state.pages)
}
render() {
    return (
      <Router>
      <div>
      <Header/>
      <Switch>
            <Route exact path="/"/>
            <Route path="/Introduce"/>
            <Route path="/movielist">
            <div>
              <div className={ this.state.movies ? "App" : "App-loading"}>
                {this.state.movies ? this._renderMovies():'Loading'}
              </div>
              <button id='leftButton' onClick={() => this.reRenderingPrevPage()}>
                <img src={require('./img/left-arrow.png')}/>
              </button>
              <button id='rightButton' onClick={() => this.reRenderingNextPage()}>
                <img src={require('./img/right-arrow.png')}/>
              </button>
              </div>
            </Route>
            <Route path="/board"/>
            <Route path="/login"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
