import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Books from "./components/Books";
import * as BookApi from "./api/BookApi";
import NavigationBar from "./components/NavigationBar";

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
      <div>
        <NavigationBar />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
