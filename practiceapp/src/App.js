import './App.css';


let heading = "React A JavaScript library for building user interfaces";
let intro = "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.";
let learn = "People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.If you prefer to learn by doing, start with our practical tutorial. If you prefer to learn concepts step by step, start with our guide to main concepts.Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.";

function App() {
  return (
    <>
   <div className="main-div">
    <ul className="nav justify-content-center">
    
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Privacy Policy</a>
  </li>
  <li className="nav-item">
    <a className="nav-link ">Contact Us</a>
  </li>
</ul>

</div>


<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item"><a href="/">Library</a></li>
    <li className="breadcrumb-item">  <a href="/"> Data </a></li>
  </ol>
</nav>

<h1>{heading}</h1>
<hr />
<p> {intro} </p>
<p> {learn} </p>
<hr />


    </>
  );
}

export default App;
