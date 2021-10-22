import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        return (
            <div>
                  <div className='container my-3'>
            <h2>News Monkey - Latest Headlines</h2>
            <div className="row">

            <div className="col-md-4">   <NewsItems title='My Title' description = 'My Description'  submit='submit' /> </div>
            <div className="col-md-4">   <NewsItems title='My Title' description = 'My Description'  submit='submit'/> </div>
            <div className="col-md-4">   <NewsItems title='My Title' description = 'My Description' submit='submit' /> </div>          
            </div>
 
            </div>
            </div>
        )
    }
}

export default News
