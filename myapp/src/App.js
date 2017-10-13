import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const MovieTitle=[
  "Matrix",
  "Full Metal Jacket",
  "OldBoy",
  "Star Wars"
]
const MovieImg=[
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={MovieTitle[0]} poster={MovieImg[0]}/>
        <Movie title={MovieTitle[1]} poster={MovieImg[1]}/>
        <Movie title={MovieTitle[2]} poster={MovieImg[2]}/>
        <Movie title={MovieTitle[3]} poster={MovieImg[3]}/>
        </div>
    );
  }
}

export default App;
