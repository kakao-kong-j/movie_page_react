import {firebaseAuth} from '../script/firebase'
import React, { Component} from 'react';
const propTypes = {
};
const defaultProps = {
};
class Logout extends Component {
    constructor(props) {
        super(props);
        this.logout=this.logout.bind(this)
    }
    logout(){
        firebaseAuth().signOut()
        this.props.history.push('/movie_page_react')
    }
   render() {
      return(
         <div>
            {this.logout()}
            
         </div>
      )
    }
}
Logout.propTypes = propTypes;
Logout.defaultProps = defaultProps;
export default Logout;