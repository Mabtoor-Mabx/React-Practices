import React from 'react'

export default function NavBar(props) {
    return (
        <div>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1"> {props.Head} </span>
    <span className="navbar-brand mb-0 h1">{props.About}</span>
    <span className="navbar-brand mb-0 h1">{props.Contact}</span>
  </div>
</nav> </div>



    )
}
