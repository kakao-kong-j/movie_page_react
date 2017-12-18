import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {firebaseAuth} from './script/firebase' 
import Signup from './components/Signup'
import Logout from './components/Logout'
import Header from './components/Header';
import Introduce from './routes/Introduce';
import MovieDetail from './routes/MovieDetail';
import LoginModal from './components/LoginModal';
import Board from './routes/Board'
import MovieList from'./routes/MovieList'
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
      if(islogin){
        return LoginModal
      }
      else{
        return Signup
      }
  }
  render() {
    const repositoryName = "movie_page_react";
    const basicPath = "/" + repositoryName;
    return (
      <Router>
      <div>
      <Header/>
      <Switch>
      <Route  path={basicPath+"/MovieList"} name='MovieList' component={MovieList}/>
      <Route exact path={basicPath+"/"} name='Introduce' component={Introduce}/>
      <Route path={basicPath+"/board"} name='board' component={Board}/>
      <Route path={basicPath+"/Logout"} name='Logout' component={Logout}/>
      <Route path={basicPath+"/login"} name='login'component={this.authCheck(true)}/>
      <Route path={basicPath+"/Signup"} name='Signup' component={this.authCheck(false)}/>
      <Route path={basicPath+"/MovieDetail/:id"} name='MovieDetail' component={MovieDetail}/>
      <Route component={NoMatch}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
