import React, {  useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme? light: dark;
  return (
    <nav style={{'background':theme.bg}}>
    <h1 style={{'color':theme.syntax}}>Context App</h1>
    <ul style={{'background':theme.ui, 'color':theme.syntax}}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  )
}

 
export default Navbar;