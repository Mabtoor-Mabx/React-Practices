import React from 'react'

export default function NavBar(props) {
    return (
        <div>
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault" />

</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode2} role="switch" id="flexSwitchCheckDefault" />
 
</div>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode3} role="switch" id="flexSwitchCheckDefault" />
</div>


<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode4} role="switch" id="flexSwitchCheckDefault" />
</div>


<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode5} role="switch" id="flexSwitchCheckDefault" />
</div>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode6} role="switch" id="flexSwitchCheckDefault" />
</div>

  </div>
</nav>

</div>
    )
}
