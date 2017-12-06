import React, { Component } from 'react';
import CommentWrite from './CommentWrite';
import CommentElement from './CommentElement'
class Comment extends Component {
    // {this.props.id}
    render() {
        return (
            <div id="comment">
                <CommentWrite id={this.props.id}/>
                <CommentElement id={this.props.id}/>
                </div>
            );
        }
    }
    
    // {this.props.something.map((movie_id,index)=><CommentElement movie_id={movie_id} key={index}/>)}
export default Comment;