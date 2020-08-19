import React, { Component } from 'react'
import SearchArea from "./components/SearchArea/SearchArea"
import MainArea from "./components/MainArea/MainArea"

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchArea />
        <MainArea/>
      </div>
    )
  }
}
