import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Books from "./components/Books";
import * as BookApi from "./api/BookApi";

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
         books: []
      };
  }

  componentDidMount() {
      this.setState({books: BookApi.getAllBooks()});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
