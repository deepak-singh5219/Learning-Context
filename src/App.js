import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './context/ThemeContext'
import UsersList from './components/UsersList'
import ToggleTheme from './components/ToggleTheme'
import AuthContextProvider from './context/AuthContext'
import { ToggleAuth } from './components/ToggleAuth'


const App = () => {
  return (
    <div className='App'>
    <ThemeContextProvider>
    <AuthContextProvider>
      <ToggleAuth/>
      <ToggleTheme/>
      <Navbar/>
      <BookList/>
      {/* <UsersList/> */}
      </AuthContextProvider>
    </ThemeContextProvider>
    </div>
  )
}

export default App