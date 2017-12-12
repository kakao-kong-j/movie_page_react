import React, { Component } from 'react';
import BoardElement from'./BoardElement';
import {database} from '../script/firebase' 
const propTypes = {
};
const defaultProps = {
};
class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id
        }
    }
    componentWillMount(){
        const DBref_Comment_id= database.ref().child('Comment').child(this.state.id);
        DBref_Comment_id.on(
            'value',snap=>{
                let snapshotValue =""
                if(snap.val()){
                    snapshotValue=snap.val()
                }
                this.setState(
                    {
                    movie_datas:snapshotValue,
                    comment_datas:Object.values(snapshotValue),
                    comment_key:Object.keys(snapshotValue)
                })

            }
        )
    }
   render() {
      return(
         <div>
            {
                this.state.comment_datas&&this.state.comment_datas.map((datas,index)=> 
                    {
                        return(
                            <BoardElement 
                            title={this.state.movie_datas.title}
                            poster={this.state.movie_datas.poster}
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
BoardList.propTypes = propTypes;
BoardList.defaultProps = defaultProps;
export default BoardList;