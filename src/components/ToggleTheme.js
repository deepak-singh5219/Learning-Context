import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class ToggleTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
        (context) => {
            console.log(context);
            const {isLightTheme, light, dark, toggleTheme} = context;
            const theme = isLightTheme?light:dark;
            
        return (
        <div>
        <button onClick={toggleTheme} style={{'background':theme.ui, 'border':'none', 'color':theme.syntax, 'padding':'15px', 'margin':'15px'}}>Change Theme</button>
        </div>
                )
            }
        }
      </ThemeContext.Consumer>
    )
  }
}
