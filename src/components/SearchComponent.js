import React, { Component, PropTypes } from 'react';
import '../css/SearchComponent.css'
const propTypes = {
};
const defaultProps = {
};
class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }
    state={
        value:''
    };
    handleSearch(){
        this.props.onClear();
        this.props.onSearch(this.state.value.trim());
    }
    onSearch
    clearSearch() {
        this.setState({
          value: ''
        });
        this.input.focus();
        this.props.onClear();
    }
   render() {
      return(
         <div id="SearchComponent">
            <input
                type="text"
                size='20'
                placeholder="Search Movie"
                value={this.state.value}
            />
            <button 
                className="clear-button"
                onClick={this.clearSearch}
            />
            <button 
            className="submit-button"
            onClick={this.handleSearch}
            />

         </div>
    );
    }
}
SearchComponent.propTypes = propTypes;
SearchComponent.defaultProps = defaultProps;
export default SearchComponent;