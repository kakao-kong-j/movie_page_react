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
                var snapshotValue =""
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
    }
   render() {
      return(
         <div>
            {
                this.state.test&&this.state.test.map((test1,index)=> 
                    {
                        return(
                            <BoardElement 
                            title={this.state.datas.title}
                            poster={this.state.datas.poster}
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
BoardList.propTypes = propTypes;
BoardList.defaultProps = defaultProps;
export default BoardList;