import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ToggleAuth = () => {
  const {isAuth, toggleAuth} = useContext(AuthContext);
  return (
    <button onClick={toggleAuth}>{!isAuth?'Login':'Logout'}</button>
  )
}

export default ToggleAuth;
