import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';


class Navbar extends Component {
  static contextType = ThemeContext;
  render() { 
    console.log(this.context);
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme? light: dark;
    return ( 
      <nav style={{'background':theme.bg}}>
        <h1>Context App</h1>
        <button onClick=''>Change Theme</button>
        <ul style={{'background':theme.ui, 'color':theme.syntax}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;