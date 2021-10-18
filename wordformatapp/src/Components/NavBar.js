import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.head}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/about">{props.head2}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/query">{props.head4}</Link>
        </li>
      </ul>
    
    </div>
    <div class={`form-check form-switch text-${props.mode==='light'?'black' : 'white' }`}>
  <input class="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
        </div>
    )
}
