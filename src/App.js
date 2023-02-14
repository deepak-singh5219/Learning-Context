import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './context/ThemeContext'
import UsersList from './components/UsersList'


const App = () => {
  return (
    <div className='App'>
    <ThemeContextProvider>
      <Navbar/>
      <BookList/>
      <UsersList/>
    </ThemeContextProvider>
    </div>
  )
}

export default App