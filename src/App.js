import React, { Component } from 'react';

import 'normalize.scss/normalize.scss';
import 'font-awesome/css/font-awesome.css';

import './App.scss';


import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <Header />
        <Sidebar />
        <div className="app__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
