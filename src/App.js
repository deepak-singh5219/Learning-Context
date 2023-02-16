import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './context/ThemeContext'
import UsersList from './components/UsersList'
import ToggleTheme from './components/ToggleTheme'


const App = () => {
  return (
    <div className='App'>
    <ThemeContextProvider>
      <ToggleTheme/>
      <Navbar/>
      <BookList/>
      {/* <UsersList/> */}
    </ThemeContextProvider>
    </div>
  )
}

export default App