import './App.css';
import AboutUs from './Components/AboutUs';
import FormText from './Components/FormText';
import NavBar from './Components/NavBar';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  const [mode, setmode] = useState("light")

  const changeMode= () =>{
      if (mode==='light') {
        setmode('dark');
        document.body.style.backgroundColor="grey";
      }
      else
      {
        setmode('light');
        document.body.style.backgroundColor="white";
      }
  }
  return (
  <>
  <Router>
   <div>
   
   <NavBar  mode={mode} changeMode={changeMode} head="Home" head2="About Us"  head3="Contact Us" head4="Privacy Policy" head5="For Any Query" />
   <Switch>
          <Route path="/about">
          <AboutUs mode={mode} />
          </Route>

          <Route path="/">
          <FormText mode={mode} />
          </Route>
        </Switch>
        
   </div>
   </Router>
  
   </>
  );
}

export default App;
