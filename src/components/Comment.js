import React, { Component } from 'react';
import CommentWrite from './CommentWrite';
import CommentElement from './CommentElement'
import {database} from '../script/firebase' 
class Comment extends Component {
    // {this.props.id}
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id
        }
        this.SetComment = this.SetComment.bind(this);
    }
    componentWillMount(){
        const a= database.ref().child('Comment').child(this.state.id);
        a.on(
            'value',snap=>{
                // console.log(snap.val())
                var b=snap.val()
                this.setState({
                    datas:b,
                    test:Object.values(b)
                })
                this.state.test&&this.state.test.map((test1,index)=>{
                console.log("index"+index)
                console.log("test1[index]"+test1[index])
                console.log("test1"+test1.email)
                return index;
            })
                // console.log(Object.values(b).length)
                // console.log(this.state.datas.values())
            }
        )
        
        var c=database.ref('/Comment/'+this.state.id).once('value').then(function(snapshot){
            var d=snapshot.val();
            // console.log(d)
            // console.log(typeof(d))
            // console.log(Object.values(d))
            
            // d.map((a)=>{
            //     return console.log(a);
            // })
    })
        // email={this.state.data[Object.keys(this.state.data)[0]].email} 
        // time={this.state.data[Object.keys(this.state.data)[0]].time} 
        // rating={this.state.data[Object.keys(this.state.data)[0]].rating} 
        // commentvalue={this.state.data[Object.keys(this.state.data)[0]].comment}
        
    }
            SetComment(){
                
        }
        componentDidMount() {
            
            
        }
    render() {
        // const email=Object.values(this.state.datas)[0].email
        return (
            <div id="comment">
                <CommentWrite id={this.props.id}/>
                {this.SetComment()}
                
                {this.state.test&&this.state.test.map((test1,index)=> {return(
                    <CommentElement 
                    id={this.state.id}
                    email={test1.email} 
                    time={test1.time} 
                    commentvalue={test1.comment} 
                    rating={test1.rating} 
                    key={index}/>);
                }
            )
            }
            </div>
            );
        }
    }
    // {this.props.something.map((movie_id,index)=><CommentElement movie_id={movie_id} key={index}/>)}
export default Comment;