import React, { Component } from 'react'
import News from './News';

export class NewsItems extends Component {
    render() {
        let {title, description, submit} = this.props;
        return (
            <div className='container my-4'>
              
                <div class="card" style={{width: '18rem;'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> {title} </h5>
    <p class="card-text"> {description} </p>
    <a href="#" class="btn btn-primary">{submit}</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItems
