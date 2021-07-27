import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRoom from "./pages/movie-room/movie-room";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieRoom />
      </div>
    );
  }
}

export default App;
