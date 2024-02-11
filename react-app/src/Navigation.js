import React, {Component} from 'react'

export default class Navigation extends Component {
  render() {
    return (
    <nav id="navbar">
      <ul>
        <li><a href="./Home">Home</a></li>
        <li><a href="./About">About</a></li>
        <li><a href="./Contact">Contact</a></li>
      </ul>
    </nav>
    )
  }
}