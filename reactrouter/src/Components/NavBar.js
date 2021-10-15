import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> {props.head} </Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.head2}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head3}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head4}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" >{props.head5}</a>
        </li>
      </ul>
    </div>
    <div class={`form-check form-switch text-${props.mode=='light'?'black' : 'white' }`}>
  <input class="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
   
</nav>
        </div>
    )
}
