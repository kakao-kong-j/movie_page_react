import React, { Component } from 'react';
import Rate from 'react-stars';
import {database} from '../script/firebase'
import {firebaseAuth} from '../script/firebase' 
const propTypes = {
};
const defaultProps = {
};
class BoardElement extends Component {
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            poster:this.props.poster,
            id:this.props.id,
            email:this.props.email,
            time:this.props.time,
            rating:this.props.rating,
            value:this.props.commentvalue,
            commentid:this.props.commentid
        }
        
        this.deleteComment=this.deleteComment.bind(this);
    }
    componentWillMount(){
        let c=new Date(this.state.time)
        this.setState({
            time:c.toLocaleString()})
    }
    deleteComment(){
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if(user.email==this.state.email){
                let DBref_Comment_id = database.ref().child('Comment').child(this.state.id).child(this.state.commentid);
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
      return(
        <div>
        {
            this.state.value&&
                        <div className="comment mb-2 row bg-light">
                            <div className="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                                <a href={"./MovieDetail/"+this.state.id}>
                                    <img className="mx-auto img-fluid" src={this.state.poster} alt="avatar"/>
                                </a>
                            </div>
                            <div className="comment-content col-md-11 col-sm-10">
                                <div className="row small comment-meta">
                                    <div className="col text-left">
                                        {this.state.title}
                                    </div>
                                    <div className="col text-right">
                                        <button type="button" className="btn btn-danger" onClick={this.deleteComment}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="row small comment-meta">
                                    <div className="col text-left">
                                        {this.state.email}
                                        Rating:
                                        <Rate
                                            count={5}
                                            value={this.state.rating}
                                            color2= '#ff9900'
                                            edit={false}
                                        />
                                    </div>
                                    <div className="col text-right">
                                        {this.state.time}
                                    </div>
                                </div>
                                <div className="comment-body">
                                    <p>
                                        {this.state.value}
                                    </p>
                                </div>
                            </div>
                            </div>
        }
        </div>
    );
    }
}
BoardElement.propTypes = propTypes;
BoardElement.defaultProps = defaultProps;
export default BoardElement;