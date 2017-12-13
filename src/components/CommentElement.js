import React, { Component } from 'react';
import Rate from 'react-stars';
import img from "../img/man.png";
import {database} from '../script/firebase' 
import {firebaseAuth}from '../script/firebase'
import '../css/CommentElement.css'
class CommentElemnet extends Component {
    constructor(props){
        super(props)
        let time_unix=new Date(this.props.time)
        this.state={
            time:time_unix.toLocaleString()
        }
        this.deleteComment=this.deleteComment.bind(this)
    }
    
    deleteComment(){
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if(user.email===this.props.email){
                let DBref_Comment_id = database.ref().child('Comment').child(this.props.id).child(this.props.commentid);
                DBref_Comment_id.remove()
                .then(function() {
                    console.log("Remove succeeded.")
                })
                .catch(function(error) {
                    console.log("Remove failed: " + error.message)
                });
                this.setState({
                    value:''
                })
            }
        })  
    }
    render() {
        return (
            <div>
            {this.props.commentvalue&&
                <div id="commentElement" className="comment col-lg-11mb-2 row bg-light border border-info w-100">
                    <div className="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                        <img className="mx-auto img-fluid" src={img} alt="Profile img"/>
                    </div>
                    <div className="comment-content col-md-11 col-sm-10">
                        <div className="row small comment-meta">
                            <div className="col text-left align-self-center">
                                {this.props.email}
                            </div>
                            <div className="col text-right align-self-center">
                                {this.state.time}
                            </div>
                            <div className="col text-right">
                            <button type="button" className="btn btn-danger" onClick={this.deleteComment}>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="align-self-center p-1 small">
                            Rating:
                        </div>
                        <div className="p-2">
                            <Rate
                                size={15}
                                count={5}
                                value={this.props.rating}
                                color2= '#ff9900'
                                edit={false}
                            />
                        </div>
                    </div>
                        <div className="comment-body">
                            <p>
                                {this.props.commentvalue}
                            </p>
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default CommentElemnet;