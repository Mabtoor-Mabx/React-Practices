import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div>
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> {props.head} </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about"> {props.head2} </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head3}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head4}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.head5}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/">{props.head6}</a></li>
            <li><a className="dropdown-item" href="/">{props.head7}</a></li>
            <li><a className="dropdown-item" href="/">{props.head8}</a></li>
          </ul>
        </li>
      </ul>
    
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'black': 'white'}`}  >
  <input className="form-check-input" type="checkbox"  onClick={props.changeMode}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
        </div>
    )
}
