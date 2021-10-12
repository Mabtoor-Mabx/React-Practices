import './App.css';
import NavBar from './Components/NavBar';
import FormText from './Components/FormText';
import React, { useState } from 'react'
import Alerts from './Components/Alerts';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert =(message, type) =>{
    setalert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1400);
  
  }






const toggleMode = () =>{
  if(mode==='light')
  {
    setmode('dark');
    document.body.style.backgroundColor = "grey";
    showAlert("Dark Mode has Been Enabled", 'success');
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = "white";
    showAlert("light Mode has Been Enabled", 'success');
  }
}

  return (
   <>
<NavBar toggleMode={toggleMode} mode={mode} head="Home" head2="About Us" head3="Contact Us" head4="Privacy Policy" head5="For Any Query" />
<Alerts alert={alert}   />
<FormText showAlert={showAlert} mode={mode} />


   </>
  );
}

export default App;
