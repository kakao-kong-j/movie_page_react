import React, { Component, PropTypes } from 'react';
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