import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import {firebaseAuth} from '../script/firebase'
class Header extends Component {
    constructor(props) {
        super(props);
        this.authCheck=this.authCheck.bind(this)
        this.state={
            authed:false
        }
    }
    componentWillMount()
    {
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
    logout(){
        firebaseAuth().signOut()
    }
    authCheck()
    {
    if(this.state.authed)
    {
        return   (
            <NavLink to="/Logout" className="flex-sm-fill text-sm-center nav-link px-8 float-right align-self-center" activeClassName="nav-link active">Logout</NavLink>
        )
    }
        else{
            return(
            <NavLink to="/login" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">Login</NavLink>
            )
    }
}
   render() {
    return (
        <div>
            <div className="nav nav-pills flex-column lg flex-sm-row bg-dark">
                <NavLink exact to="/" className="px-5 mr-auto"id="logo">  </NavLink>
                <NavLink exact to="/" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">Introduce</NavLink>
                <NavLink to="/MovieList" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">MovieList</NavLink>
                <NavLink to="/board" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">Board</NavLink>
                {this.authCheck()}

            </div>
        </div>
    );
    }
}
export default Header;