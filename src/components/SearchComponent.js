import React, { Component } from 'react';
import '../css/SearchComponent.css'
const propTypes = {
};
const defaultProps = {
};
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchValue:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(event) {
        this.setState({searchValue: event.target.value});
      }
    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleSearch();
        }
    }
    handleSearch(){
       
            setTimeout(() => {
                this.props.handler(this.state.searchValue)
                this.props.getmovie()  
            }, 0);
    }
    onSearch
    clearSearch() {
        this.setState({
            searchValue: ''
        });
    }
   render() {
       const{handleKeyPress}=this;
      return(
         <div className="input-group input-group-lg" id="SearchComponent">
            <input
                onKeyPress={this.handleKeyPress}
                className="form-control form-control-lg"
                type="text"
                size='50'
                placeholder="Search Movie"
                value={this.state.searchValue}
                onChange={this.handleChange}
            />
            <button 
                className="input-group-addon"
                id="Clear-button"
                onClick={this.clearSearch}
            >
                Clear
            </button>
            <button 
                className="input-group-addon"
                id="Submit-button"
                onClick={this.handleSearch}
            >
                Search
            </button>

         </div>
    );
    }
}
SearchComponent.propTypes = propTypes;
SearchComponent.defaultProps = defaultProps;
export default SearchComponent;