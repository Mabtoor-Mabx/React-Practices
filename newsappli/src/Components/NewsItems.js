import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imgurl, newsUrl} = this.props;
        return (
            <div>
                <div class="card" style={{width: '18rem'}}>
  <img src={imgurl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <p class="card-text"> {description}... </p>
    <a href={newsUrl}  rel="noreferrer" target='_blank' class="btn btn-primary">For More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItems
