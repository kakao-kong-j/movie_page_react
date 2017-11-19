import React, { Component } from 'react';
import CommentElement from './CommentElement'
class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.id}
                댓글댓글
                </div>
            );
        }
    }
    
    // {this.props.something.map((movie_id,index)=><CommentElement movie_id={movie_id} key={index}/>)}
export default Comment;