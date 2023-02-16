import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';


class BookList extends Component {
  static contextType = ThemeContext;
  render() { 
    
    return ( 
      <ThemeContext.Consumer>
        {
          (context) => {
    const {isLightTheme, light, dark} = context;
    const theme = isLightTheme? light: dark;
            return (
              <div className="book-list" style={{'background':theme.bg}}>
              <ul style={{'background':theme.ui, 'color':theme.syntax}}>
                <li>the way of kings</li>
                <li>the name of the wind</li>
                <li>the final empire</li>
              </ul>
            </div>
            )
          }
        }
      </ThemeContext.Consumer>
      
    );
  }
}
 
export default BookList;



