import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class SearchComponent extends Component {
    state={
        value:''
    }
    constructor(props) {
        super(props);
    }
   render() {
      return(
         <div id="SearchComponent">
            <input
                type="text"
                placeholder="Search Movie"
            />
         </div>
    );
    }
}
SearchComponent.propTypes = propTypes;
SearchComponent.defaultProps = defaultProps;
export default SearchComponent;