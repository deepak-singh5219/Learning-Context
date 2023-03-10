import React, { Component, createContext } from 'react'

export const AuthContext = createContext();
export default class AuthContextProvider extends Component {
  state= {
    isAuth:false
  }
  toggleAuth = () => {
    this.setState({...this.state, isAuth:!this.state.isAuth})
  }
  render() {
    return (
      <AuthContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
