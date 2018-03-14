import React, { Component } from "react";
import "../css/MovieList.css";
import Movie from "./Movie";
import SearchComponent from "../components/SearchComponent";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 1,
      searchValue: ""
    };
    this.handler = this.handler.bind(this);
    this.pagehandler = this.pagehandler.bind(this);
  }
  componentDidMount() {
    this._getMovies();
  }
  _getMovies = async () => {
    if (this.state.searchValue) {
      const movies = await this._callAPI_search();
      this.setState({
        movies
      });
    } else {
      const movies = await this._callAPI();
      console.log(movies)
      this.setState({
        movies
      });
    }
  };
  _callAPI = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0dcfe644f06f6d2555dd2e8f96508646&language=en-US&page=" +
        this.state.pages
    )
      .then(temp => temp.json())
      .then(json => json.results)
      .catch(err => console.log(err));
  };
  _callAPI_search = () => {
    return fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=0dcfe644f06f6d2555dd2e8f96508646&language=en-US&page=1&include_adult=false&query=" +
        this.state.searchValue
    )
      .then(temp => temp.json())
      .then(json => json.results)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    if(this.state.movies){
      console.log(this.state.movies)
      const movies = this.state.movies.map(movie => {
        return (
          <Movie
            id={movie.id}
            language={"English"}
            rt_rating={movie.vote_average}
            rating={movie.vote_average}
            title={movie.title}
            poster={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
            key={movie.id}
            genres={['']}
            synopsis={movie.overview}
            year={movie.release_date}
          />
        );
      });
      return movies;
    }
    return null;
  };
  nextPage() {
    this.setState((prevState, props) => {
      return { pages: prevState.pages + 1 };
    });
  }
  prevPage() {
    this.setState((prevState, props) => {
      return { pages: prevState.pages - 1 };
    });
  }
  reRenderingPrevPage= async()=> {
      await this.prevPage();
      await this._getMovies();
  }
  reRenderingNextPage= async()=> {
    await this.nextPage();
    await this._getMovies();
  }
  handler(text) {
    this.setState({
      searchValue: text
    });
  }
  pagehandler() {
    if (this.state.pages === 1) {
      return (
        <nav aria-label="...">
          <ul className="pagination pagination-lg justify-content-center">
            <li
              className="page-item disabled"
              onClick={() => this.reRenderingPrevPage()}
            >
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item active">
              <a className="page-link">
                {this.state.pages} <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() => this.reRenderingNextPage()}
            >
              <a className="page-link">{this.state.pages + 1}</a>
            </li>
            <li
              className="page-item"
              onClick={() => this.reRenderingNextPage()}
            >
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav aria-label="...">
          <ul className="pagination pagination-lg justify-content-center">
            <li
              className="page-item"
              onClick={() => this.reRenderingPrevPage()}
            >
              <a className="page-link">Previous</a>
            </li>
            <li
              className="page-item"
              onClick={() => this.reRenderingPrevPage()}
            >
              <a className="page-link">{this.state.pages - 1}</a>
            </li>
            <li className="page-item active">
              <a className="page-link">
                {this.state.pages} <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() => this.reRenderingNextPage()}
            >
              <a className="page-link">{this.state.pages + 1}</a>
            </li>
            <li
              className="page-item"
              onClick={() => this.reRenderingNextPage()}
            >
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
  render() {
    return (
      <div>
        <SearchComponent handler={this.handler} getmovie={this._getMovies} />
        <div className={this.state.movies ? "App" : "App-loading"}>
          {this.state.movies ? this._renderMovies() : "Loading"}
        </div>
        <div>{this.state.movies ? this.pagehandler() : "Loading"}</div>
      </div>
    );
  }
}

export default MovieList;
