import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Movie from './Movie.js';



//Update componentWillReceiveProps() -> shouldComponentUpdate()->componentWillUpdate()->render()->componentDidUpdate()
//Render componentWillMount() -> render() -> componentDidMount()
class App extends Component {
  state={}
=======
import './css/App.css';
import Movie from './routes/Movie.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Introduce from './routes/Introduce';
import MovieDetail from './routes/MovieDetail';
//Update componentWillReceiveProps() -> shouldComponentUpdate()->componentWillUpdate()->render()->componentDidUpdate()
//Render componentWillMount() -> render() -> componentDidMount()
class App extends Component {
  state={pages:1}
>>>>>>> 61afe9638f8d355dbaa2dc759667b98060f9772c
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
<<<<<<< HEAD
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
=======
    return fetch("https://yts.ag/api/v2/list_movies.json?sort_by=rating&with_rt_ratings=true&page="+this.state.pages)
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
>>>>>>> 61afe9638f8d355dbaa2dc759667b98060f9772c
    />
  })
  return movies
}
<<<<<<< HEAD
  render() {
    return (
      <div className={ this.state.movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies():'Loding'}
      </div>
=======
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
render() {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
            <Route exact path="/" name='home'>
              <div>
                <div className={ this.state.movies ? "App" : "App-loading"}>
                  {this.state.movies ? this._renderMovies():'Loading'}
                </div>
                <button id='leftButton' onClick={() => this.reRenderingPrevPage()}>
                  <img src={require('./img/left-arrow.png')} alt={'Prev Page'}/>
                </button>
                <button id='rightButton' onClick={() => this.reRenderingNextPage()}>
                  <img src={require('./img/right-arrow.png')} alt={'Next Page'}/>
                </button>
              </div>
            </Route>
            <Route path="/Introduce" name='Introduce'/>
            <Route path="/board" name='board'/>
            <Route path="/login" name='login'/>
            <Route path="/MovieDetail/:id" name='MovieDetail' component={MovieDetail}/>
          </Switch>
        </div>
      </Router>
>>>>>>> 61afe9638f8d355dbaa2dc759667b98060f9772c
    );
  }
}

export default App;
