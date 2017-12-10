import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {firebaseAuth} from './script/firebase' 
import Signup from './components/Signup'
import Header from './components/Header';
import Introduce from './routes/Introduce';
import MovieDetail from './routes/MovieDetail';
import LoginModal from './components/LoginModal';
import Board from './routes/Board'
import MovieList from'./routes/MovieList'
import Propile from './components/Propile'
import NoMatch from './routes/NoMatch'
class App extends Component {
constructor(props){
  super(props)
  this.state={authed:false}
  this.authCheck = this.authCheck.bind(this);
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
  componentWillUnmount () {
    this.removeListener()
  }
  authCheck(islogin){
    if(this.state.authed)
    {
      return  <Propile/>
    }
    else{
      if(islogin){
      return <LoginModal/>}
      else{
        <Signup/>
      }
        }
  }
  render() {
    return (
      <Router>
      <div>
      <Header/>
      <Switch>
      <Route  path="/MovieList" name='MovieList' component={MovieList}/>
      <Route exact path="/" name='Introduce' component={Introduce}/>
      <Route path="/board" name='board' component={Board}/>
      <Route component={NoMatch}/>
      <Route path="/login" name='login' >
      {this.authCheck(true)}
      </Route>
      <Route path="/Signup" name='Signup'>
      {this.authCheck(false)}
            </Route>
            <Route path="/MovieDetail/:id" name='MovieDetail' component={MovieDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
