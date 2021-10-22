import React, { Component } from 'react'
import News from './Components/News'
import NewsBar from './Components/NewsBar'
export default class App extends Component {
  render() {
    return (
      <div>
        <NewsBar title="News App" home="Home" about="About Us" />
        <News />
      </div>
    )
  }
}
