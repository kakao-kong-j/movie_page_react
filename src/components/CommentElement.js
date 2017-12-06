import React, { Component } from 'react';
import {database} from '../script/firebase' 
class CommentElemnet extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
        }
        this.test = this.test.bind(this);
    }
    test(){
        const a= database.ref().child('Comment').child(this.state.id);
        a.on(
            'value',snap=>console.log(snap.val())
        )
    }
    render() {
        return (
            <div>
            <button 
            className="comment-submit-button"
            onClick={this.test}
        >
            Submit!!!!!!!!!!!!!!
        </button>
            </div>
        );
    }
}

export default CommentElemnet;