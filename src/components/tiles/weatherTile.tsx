import * as React from 'react';
import { Component } from 'react';
import "./tiles.css"

function Weather() {
    return ( <div id="weatherBox">
        <h1>Weather</h1>
        <input id="weatherLocation" type="text"></input> 
        <button id="submit">Submit</button>
    </div> );
}

export default Weather;