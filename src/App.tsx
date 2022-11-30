import React from 'react';
import './App.css';
import Searchbar from "./components/searchbar"
import Tiles from "./components/tiles"

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Tiles />
    </div>
  );
}

export default App;
