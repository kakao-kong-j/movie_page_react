import React, { Component, PropTypes } from 'react';
import {firebaseAuth} from '../script/firebase'
const propTypes = {
};
const defaultProps = {
};
class Propile extends Component {
    constructor(props) {
        super(props);
        this.logout=this.logout.bind(this)
    }
    logout(){
        firebaseAuth().signOut()
    }
   render() {
      return(
         <div>
            <button onClick={this.logout}>
            test
            </button>

         </div>
    );
    }
}
Propile.propTypes = propTypes;
Propile.defaultProps = defaultProps;
export default Propile;