import React, { Component } from 'react';
import './App.css';
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
import MovieList from'./routes/MovieList'
class App extends Component {
constructor(props){
  super(props)
  this.state={authed:false}
}
  componentWillMount(){
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
  // componentWillUnmount () {
  //   this.removeListener()
  // }
render() {
    return (
      <Router>
        <div>
        <Header/>
            <Switch>
            <Route  path="/MovieList" name='MovieList'>
              <MovieList/>
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
