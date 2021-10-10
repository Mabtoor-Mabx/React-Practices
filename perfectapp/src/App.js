
import './App.css';
import Accordian from './Components/Accordian';
import FormText from './Components/FormText';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>

<NavBar Head="Home" Head2="About Us" Head3="Contact us" Head4="Features" Head5="Men" Head6="Women" Head7="Children" Head8="For Any Query" />
<FormText />
<Accordian />
    </>
  );
}

export default App;
