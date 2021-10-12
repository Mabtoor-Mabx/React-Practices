import './App.css';
import NavBar from './Components/NavBar';
import FormText from './Components/FormText';
import React, { useState } from 'react'
function App(props) {

  const [mode, setmode] = useState('light');

  const  changeMode = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="grey";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      
    }
  }

  const  changeMode2 = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="lightblue";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }

  const  changeMode3 = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="pink";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }


  const  changeMode4 = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="green";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }

  

  const  changeMode5 = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="orange";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }

  const  changeMode6 = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="purple";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }



  return (
  <>
  <NavBar mode={mode} changeMode={changeMode} changeMode2={changeMode2} changeMode3={changeMode3} changeMode4={changeMode4} changeMode5={changeMode5} changeMode6={changeMode6}  />
  <FormText />
  </>

  );
}

export default App;
