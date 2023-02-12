import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './context/ThemeContext'





const App = () => {
  return (
    <div className='App'>
    <ThemeContextProvider>
      <Navbar/>
      <BookList/>
    </ThemeContextProvider>
    </div>
  )
}

export default App