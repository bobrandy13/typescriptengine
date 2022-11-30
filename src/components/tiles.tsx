import * as React from 'react';
import { Component } from 'react';
import WeatherTile from "./tiles/weatherTile"
import TodoTile from "./tiles/todoTile"
import BookmarksTile from "./tiles/bookmarksTile"
import "./tiles/tiles.css"

function Tiles() {
    return ( 
        <div className="tiles">
            <WeatherTile />
            <TodoTile />
            <BookmarksTile />
        </div>
     );
}

export default Tiles;