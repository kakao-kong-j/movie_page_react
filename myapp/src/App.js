import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';


const movies=[
  {
    title:"Matrix",
    poster:  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster:  "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"    
  },
  {
    title:"OldBoy",
    poster:  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"    
  },
  {
    title:"Star Wars",
    poster:  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
    
  }
]

//Update componentWillReceiveProps() -> shouldComponentUpdate()->componentWillUpdate()->render()->componentDidUpdate()
//Render componentWillMount() -> render() -> componentDidMount()
class App extends Component {
  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    console.log('did mount')
    
  }
  render() {
    console.log('now mount')
    console.log(movies.index)
    return (
      <div className="App">
        {movies.map(( movie,index)=>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
        </div>
    );
  }
}

export default App;
