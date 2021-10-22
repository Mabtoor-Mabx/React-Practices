import React, { Component } from 'react'
import News from './Components/News'
import NewsBar from './Components/NewsBar'
import NewsItems from './Components/NewsItems'

export default class App extends Component {
  render() {
    return (
      <div>
        <NewsBar title="News Monkey"  description = 'Home' about='About Us' />
        <NewsItems />
        <News />
      </div>
    )
  }
}
