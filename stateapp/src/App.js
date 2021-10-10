
import './App.css';
import AccordiansBar from './Components/AccordiansBar';
import FormText from './Components/FormText';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
   <>

    <NavigationBar Home="Home" Home2="About Us" Home3="Contact Us" Home4="Features"  Home5="Men" Home6="Woman" Home7="Childern" Home8="For Any Query" />    
    <AccordiansBar />
     <FormText /> 
   </>
  );
}

export default App;
