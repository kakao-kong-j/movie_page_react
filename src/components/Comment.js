import React, { Component } from 'react';
import CommentWrite from './CommentWrite';
import CommentElement from './CommentElement'
import {database} from '../script/firebase' 
import {firebaseAuth}from '../script/firebase'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            authed:true
        }
        this.authCheck=this.authCheck.bind(this)
        
    }
    componentWillMount(){
        const DBref_Comment_id= database.ref().child('Comment').child(this.state.id);
        DBref_Comment_id.on(
            'value',snap=>{
                let snapshotValue=""
                if(snap.val()){
                    snapshotValue=snap.val()
                }
                this.setState(
                    {
                        comment_datas:Object.values(snapshotValue),
                        comment_key:Object.keys(snapshotValue)
                    })
    
                }
            )
        
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({
                authed: true,
                loading: false,
              })
            } else {
              this.setState({
                authed: false,
                loading: false
              })
            }
          })
    }


    authCheck(){
    if(this.state.authed)
    {
        return   (
            <CommentWrite 
                id={this.props.id}
                poster={this.props.poster}
                title={this.props.title}
            />
        )
    }
    }
    render() {
        return (
            <div id="comment">
            {
               this.authCheck()
            }
                {
                    this.state.comment_datas&&this.state.comment_datas.map((datas,index)=> 
                        {
                            return(
                                <CommentElement 
                                id={this.state.id}
                                email={datas.email} 
                                time={datas.time} 
                                commentvalue={datas.comment} 
                                rating={datas.rating} 
                                key={index}
                                commentid={this.state.comment_key[index]}
                                />
                            );
                        }
                    )
                }
            </div>
        );
    }
}
export default Comment;