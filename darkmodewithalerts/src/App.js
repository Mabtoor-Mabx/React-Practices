import './App.css';
import NavBar from './Components/NavBar';
import FormText from './Components/FormText';
import React, { useState } from 'react'
import Alerts from './Components/Alerts';
function App() {


  const [alert, setalert] = useState(null)


const showAlert = (message, type) =>{

  setalert({
    message : message,
    type :  type
  })
  setTimeout(() => {
    setalert(null);
  }, 3500);
}

  const [mode, setmode] = useState("light");

  const changemode = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled Successfully", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled Successfully" , "success");
    }
  }


  return (
   
    <>
<NavBar  changemode={changemode} head="Home" mode={mode} head2="About Us" head3="Contact Us" head4="Privacy Policy" head5="For Any Query" />
<Alerts alert={alert} />
<FormText showAlert={showAlert} mode={mode} />

    </>
      );
}

export default App;
