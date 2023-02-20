import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';



class BookList extends Component {
  render() { 
    
    return ( 

      <AuthContext.Consumer>{
        (authContext) => {
          return (
          <ThemeContext.Consumer>
        {(themeContext) => {
    const {isAuth} = authContext;
    const {isLightTheme, light, dark} = themeContext;
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
        }
      </ThemeContext.Consumer>)

        }
        }
      </AuthContext.Consumer>
      
    );
  }
}
 
export default BookList;



