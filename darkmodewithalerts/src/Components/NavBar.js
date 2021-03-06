import React from 'react'

export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> {props.head} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"> {props.head2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head3}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head4}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">{props.head5}</a>
        </li>
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='dark'? 'white' : 'dark'}`}>
  <input className="form-check-input" onClick={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
        </div>
    )
}
