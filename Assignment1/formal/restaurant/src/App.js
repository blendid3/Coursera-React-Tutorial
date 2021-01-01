
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
import React, {Component } from 'react';
import { DISHES } from './shared/dishes';
import Main from './Components/MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}




export default App;
