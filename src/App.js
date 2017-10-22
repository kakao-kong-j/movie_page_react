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
  state={}
  componentDidMount(){
    this._getMovies();
  }
   _getMovies=async()=>{
      const movies=await this._callAPI()
      console.log(movies);
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
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Introduce" component={Introduce}/>
            <Route path="/movielist">
              <div className={ this.state.movies ? "App" : "App-loading"}>
                {this.state.movies ? this._renderMovies():'Loding'}
              </div>
            </Route>
            <Route path="/login"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
