import './App.css';
import NavBar from './Components/NavBar';
import FormText from './Components/FormText';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light')

const toggleMode = () =>{
  if(mode==='light')
  {
    setmode('dark');
    document.body.style.backgroundColor = "grey";
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = "white";
  }
}

  return (
   <>
<NavBar toggleMode={toggleMode} mode={mode} head="Home" head2="About Us" head3="Contact Us" head4="Privacy Policy" head5="For Any Query" />
<FormText mode={mode} />

   </>
  );
}

export default App;
