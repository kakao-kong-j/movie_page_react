import React, { Component } from 'react';

class CommentElemnet extends Component {
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