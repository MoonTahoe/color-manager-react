import React, { Component } from 'react'
import ColorList from './ColorList'
import AddColor from './AddColor'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Color Manager React</h1>
        </header>
        <p className="App-intro">
          State data saved in <a href="https://www.npmjs.com/package/color-manager-redux" alt="">color manager redux</a> store.
        </p>
        <AddColor />
        <ColorList />
      </div>
    )
  }
}

export default App
