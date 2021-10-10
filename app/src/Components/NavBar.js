import React from 'react'

export default function NavBar(props) {
    return (
        <div>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1"> {props.Home} </span>
    <span className="navbar-brand mb-0 h1">{props.Home2} </span>
    <span className="navbar-brand mb-0 h1">{props.Home3} </span>
    
  </div>

</nav>
        </div>
    )
}
