import React , {useState} from 'react'

export default function FormText(props) {


const convertToUpperCase = ()=>{
    let newtext = text.toUpperCase();
    settext(newtext);
}

const convertToLowerCase = ()=>{
    let newtext = text.toLowerCase();
    settext(newtext);
}

const clearText = ()=>{
    settext("");
}


    const [text, settext] = useState("");

    const handelOnChange= (event) =>{
        settext(event.target.value);
    }

    return (
        <div className="container my-4"  >
            <div className="mb-3">
  <textarea className="form-control" onChange={handelOnChange}   value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn-primary mx-4 my-2 "onClick={convertToUpperCase}>Convert To Uppercase</button>
<button className="btn-success mx-4 my-2" onClick={convertToLowerCase} >Convert To Lowercase</button>
<button className="btn-danger mx-4 my-2" onClick={clearText}>Clear The Text</button>

<div className="container">

<h2> Your Text Summary </h2>
<p>  Your Text Have {text.split(" ").length-1} Words and {text.length} Characters </p>
<p> {0.008 * text.split("").length} Minutes To Read </p>

<h2> Preview </h2>
<p> {text} </p>

</div>

        </div>
         
    )
}
