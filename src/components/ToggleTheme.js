import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ToggleTheme = () => {
  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
  const theme = isLightTheme?light:dark;

  return (
    <div>
    <button onClick={toggleTheme} style={{'background':theme.ui, 'border':'none', 'color':theme.syntax, 'padding':'15px', 'margin':'15px'}}>Change Theme</button>
    </div>
  )
}

export default ToggleTheme;
