import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Propile extends Component {
    constructor(props) {
        super(props);
    }
   render() {
      return(
         <div>Propile</div>
    );
    }
}
Propile.propTypes = propTypes;
Propile.defaultProps = defaultProps;
export default Propile;