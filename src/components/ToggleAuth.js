import React from 'react'
import { AuthContext } from '../context/AuthContext'


export const ToggleAuth = () => {
  return (
    <AuthContext.Consumer>
        {
            (authContext) => {
                const {isAuth,toggleAuth} = authContext;
                 return (
                    <button onClick={toggleAuth}>{!isAuth?'Login':'Logout'}</button>
                 )
            }
        }
    </AuthContext.Consumer>
    
  )
}
