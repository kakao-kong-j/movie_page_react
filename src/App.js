import React, { Component } from 'react';
import './css/App.css';
import Movie from './routes/Movie.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {firebaseAuth} from './script/firebase' 
import SearchComponent from'./components/SearchComponent';
import Signup from './components/Signup'
import Header from './components/Header';
import Introduce from './routes/Introduce';
import MovieDetail from './routes/MovieDetail';
import LoginModal from './components/LoginModal';
import Board from './routes/Board'

class App extends Component {

  state={
    pages:1,
    authed:false,
    searchValue:''
  }
  componentDidMount(){
    this._getMovies();
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
   _getMovies=async()=>{
      const movies=await this._callAPI()
      this.setState({
        movies
      })    
  }
  _callAPI=()=>{
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count&page="+this.state.pages)
    .then(temp=>temp.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }
  _callAPI1=()=>{
    return fetch("https://yts.am/api/v2/list_movies.json?query_term="+this.state.value)
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
render() {
    return (
      <Router>
        <div>
        <Header/>
            <Switch>
            <Route  path="/MovieList" name='MovieList'>
              <div>
                <SearchComponent searchValue={this.state.searchValue}/>
                <div className={ this.state.movies ? "App" : "App-loading"}>
                  {this.state.movies ? this._renderMovies():'Loading'}
                </div>
                <button className="arrowbutton" id='leftButton' onClick={() => this.reRenderingPrevPage()}>
                  <img src={require('./img/left-arrow.png')} alt={'Prev Page'}/>
                </button>
                <button className="arrowbutton" id='rightButton' onClick={() => this.reRenderingNextPage()}>
                  <img src={require('./img/right-arrow.png')} alt={'Next Page'}/>
                </button>
              </div>
            </Route>
            <Route exact path="/" name='Introduce'>
              <Introduce/>
            </Route>
            <Route path="/board" name='board'>
              <Board/>
            </Route>
            <Route path="/login" name='login'>
              <LoginModal/>
            </Route>
            <Route path="/Signup" name='Signup'>
              <Signup/>
            </Route>
            <Route path="/MovieDetail/:id" name='MovieDetail' component={MovieDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
