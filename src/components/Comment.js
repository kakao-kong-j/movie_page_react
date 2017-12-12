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
                    datas:snapshotValue,
                    test:Object.values(snapshotValue)
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