import React, { Component } from 'react';
import Rate from 'rc-rate';
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
            value:this.props.commentvalue
        }
    }
    componentWillMount(){
        var c=new Date(this.state.time)
        this.setState({
            time:c.toLocaleString()})
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
                                <div className="small comment-meta">
                                    {this.state.title}
                                </div>
                                <div className="row small comment-meta">
                                    <div className="col text-left">
                                        {this.state.email}
                                        <Rate
                                        defaultValue={this.state.rating}
                                        value={this.state.rating}
                                        allowHalf
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