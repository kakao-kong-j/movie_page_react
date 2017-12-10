import React, { Component } from 'react';
import '../css/CommentWrite.css'
import {firebaseAuth} from '../script/firebase' 
import {database} from '../script/firebase' 
import Rate from 'rc-rate';

const propTypes = {
};
const defaultProps = {
};

class CommentWrite extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            CommentValue:'',
            id:this.props.id,
            authed:false,
            rating:5,
            title: this.props.title,
            poster: this.props.poster
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.writeCommentData = this.writeCommentData.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }
    writeCommentData(movieid, email,comment,time,rating,title,poster) {
        database.ref('Comment/'+movieid).update({
            title: title,
            poster: poster
        });
        database.ref('Comment/' + movieid).push({
          email: email,
          comment:comment,
          rating:rating,
          time:time
        });
      }
    handleChange(event) {
        this.setState(
            {
                CommentValue: event.target.value,
            }
        );
      }
      handleSubmit(){
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user||this.state.CommentValue) {
              this.setState({
                authed: true,
                User_email:user.email,
                Create_time:Date.now()
              })
              this.writeCommentData(
                  this.state.id,
                  this.state.User_email,
                  this.state.CommentValue,
                  this.state.Create_time,
                  this.state.rating,
                  this.state.title,
                  this.state.poster
                );
            } else {
              this.setState({
                authed: false,
              })
            }
          })
         
      }
      onChange(starRating){
        console.log('star:',starRating)
        this.setState({
            rating:starRating
        })
      }
   render() {
      return(
        <div id="CommentWrite">
        <input
            id="commentwriteinput"
            type="text"
            value={this.state.CommentValue}
            onChange={this.handleChange}
        />
        <div style={{ margin: 100 }}>
        <Rate
          defaultValue={5}
          onChange={this.onChange}
          allowHalf
        />
        </div>
        <button 
            className="comment-submit-button"
            onClick={this.handleSubmit}
        >

            Submit
        </button>
        </div>
    );
    }
}
CommentWrite.propTypes = propTypes;
CommentWrite.defaultProps = defaultProps;
export default CommentWrite;