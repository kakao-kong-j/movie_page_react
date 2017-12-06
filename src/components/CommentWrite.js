import React, { Component, PropTypes } from 'react';
import '../css/CommentWrite.css'
const propTypes = {
};
const defaultProps = {
};
class CommentWrite extends Component {
    constructor(props) {
        super(props);
        this.state={
            CommentValue:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({CommentValue: event.target.value});
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
        <button 
            className="submit-button"
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