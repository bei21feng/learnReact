// import React from 'react';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar icon='fab fa-github' />
      </div>
    );

    //不用jsx 用js
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hello React')
    // );
  }
}

export default App;
