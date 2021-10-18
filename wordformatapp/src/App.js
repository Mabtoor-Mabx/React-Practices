import './App.css';
import AboutUs from './Components/AboutUs';
import FormText from './Components/FormText';
import NavBar from './Components/NavBar';
import Query from './Components/Query';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alerts from './Components/Alerts';

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) =>{

    setalert({
      message : message,
      type :  type
    })
    setTimeout(() => {
      setalert(null);
    }, 3500);
  }

  const [mode, setmode] = useState('light');
  
  const changeMode = () => {
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('dark Mode Has Been Enabled Successfully' , 'success')
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has Been Enabled Successfully' , 'success')
    }
  }

 


  return (
    <Router>
    <>
<div>
    <NavBar head='Home' mode={mode} changeMode={changeMode}  head2='About Us' head4='For Any Query' />
    <Alerts alert={alert} />
    <Switch>
          <Route path="/about">
            <AboutUs mode={mode} />
          </Route>
          <Route path="/query">
          <Query submit='Submit' mode={mode} />
          </Route>
          <Route path="/">
            <FormText   showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>
   
        </div>

    </>
    </Router>
  );
}

export default App;
