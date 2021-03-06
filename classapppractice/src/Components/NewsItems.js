import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description , info, ImageUrl, newsUrl} = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{width: "18rem"}}>
  <img src={ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}... </h5>
    <p className="card-text"> {description}... </p>
    <a href={newsUrl} target='_blank' className="btn btn-primary"> {info} </a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItems
