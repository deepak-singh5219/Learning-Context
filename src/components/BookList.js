import React, {  useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const BookList = () => {
const {isLightTheme, light, dark} = useContext(ThemeContext);
const {isAuth} = useContext(AuthContext);
const theme = isLightTheme? light: dark;

  return (
    <>
    { 
        !isAuth?(
          <div>
            You are not Logged In!!!
          </div>
        ):(
          <div className="book-list" style={{'background':theme.bg}}>
        <ul style={{'background':theme.ui, 'color':theme.syntax}}>
          <li>the way of kings</li>
          <li>the name of the wind</li>
          <li>the final empire</li>
        </ul>
      </div>
        )
      }
    </>
  )
}

 
export default BookList;



