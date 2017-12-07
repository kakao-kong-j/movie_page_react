import React, { Component } from 'react';
import CommentWrite from './CommentWrite';
import CommentElement from './CommentElement'
import {database} from '../script/firebase' 
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id
        }
    }
    componentWillMount(){
        const a= database.ref().child('Comment').child(this.state.id);
        a.on(
            'value',snap=>{
                if(snap.val()){
                    var b=snap.val()
                }
                else{
                    var b=""
                }
                this.setState(
                    {
                    datas:b,
                    test:Object.values(b)
                })
            }
        )
    }
    render() {
        return (
            <div id="comment">
                <CommentWrite 
                    id={this.props.id}
                    poster={this.props.poster}
                    title={this.props.title}
                />
                {
                    this.state.test&&this.state.test.map((test1,index)=> 
                        {
                            return(
                                <CommentElement 
                                id={this.state.id}
                                email={test1.email} 
                                time={test1.time} 
                                commentvalue={test1.comment} 
                                rating={test1.rating} 
                                key={index}/>
                            );
                        }
                    )
                }
            </div>
        );
    }
}
export default Comment;