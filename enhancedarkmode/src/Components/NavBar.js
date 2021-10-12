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
          <a className="nav-link active" aria-current="page" href="/">{props.head2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.head3}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"> {props.head4} </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/   ">{props.head5}</a>
        </li>
      </ul>
    </div>
    <div class={`form-check form-switch text-${props.mode=='light'? 'dark' : 'white'}`}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
        </div>
    )
}
