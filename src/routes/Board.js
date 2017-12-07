import React, { Component } from 'react';
import BoardList from '../components/BoardList'
import {database} from '../script/firebase' 
const propTypes = {
};
const defaultProps = {
};
class Board extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
        }
    }
    componentWillMount() {
        var this_temp=this
        database.ref('Comment').once("value").then(function(snapshot){
            snapshot.forEach((childSnapshot) => {
               this_temp.setState(prevState=>({
                    id:[...prevState.id,childSnapshot.key]
                })
            )
            })
        });
    }
   render() {
      return(
        <div>
            {
                this.state.id&&this.state.id.map((id_element,index)=>{
                return (
                    <
                        BoardList 
                        id={id_element}
                        key={index}
                    />
                )
                }
            )
            }
        </div>
    );
    }
}
Board.propTypes = propTypes;
Board.defaultProps = defaultProps;
export default Board;