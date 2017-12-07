import React, { Component } from 'react';

class CommentElemnet extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
            {this.props.id}
            <br/>
            <br/>
            {this.props.email}
            <br/>
            {this.props.time}
            <br/>
            {this.props.rating}
            <br/>
            {this.props.commentvalue}
            <br/>
            </div>
        );
    }
}

export default CommentElemnet;