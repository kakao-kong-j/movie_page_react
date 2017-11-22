import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Board extends Component {
    constructor(props) {
        super(props);
    }
   render() {
      return(
         <div>Board</div>
    );
    }
}
Board.propTypes = propTypes;
Board.defaultProps = defaultProps;
export default Board;