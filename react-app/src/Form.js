import React, {Component} from 'react'

export default class Form extends Component {
  render () {
    return (
      <form id="loginForm">
        <h3>Login</h3>
        <label htmlFor="userName">UserName</label>
        <input id="userName" name="userName"></input>

        <label htmlFor="userPassword">Password</label>
        <input id="userPassword" name="userPassword"></input>
        <button>Login</button>
      </form>
    )
  }
}