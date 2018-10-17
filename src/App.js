import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pusher from 'pusher-js'



Pusher.logToConsole = true;

var pusher = new Pusher('e7389adba64c9a92510d', {
    cluster: 'eu',
    forceTLS: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    alert(JSON.stringify(data));
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

            </div>
        );


    }
}

export default App;
