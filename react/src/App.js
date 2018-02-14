import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        var i = 5;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hello {this.name}</h1>
                    <span className="test">Test: {i === 5 ? 'True' : 'False'}</span>
                </header>
            </div>
        );
    }
}

export default App

