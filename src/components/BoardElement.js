import React, { Component } from 'react';
const propTypes = {
};
const defaultProps = {
};
class BoardElement extends Component {
   render() {
      return(
        <div>
        <br/>
        title:{this.props.title}
        <br/>
        poster:{this.props.poster}
        <br/>
        id:{this.props.id}
        <br/>
        email:{this.props.email}
        <br/>
        time:{this.props.time}
        <br/>
        rating:{this.props.rating}
        <br/>
        value:{this.props.commentvalue}
        <br/>
        <br/>
        </div>
    );
    }
}
BoardElement.propTypes = propTypes;
BoardElement.defaultProps = defaultProps;
export default BoardElement;