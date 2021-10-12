import React , {useState} from 'react'

export default function FormText(props) {

const handelOnChange =(event)  =>{
settext(event.target.value);
}


const convertToUpper = () => {
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted To Uppercase Successfully", "success");
}


const convertToLower = () =>{
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted To Lowercase Successfully", 'info');
}

const clearText = () => {
    settext("");
    props.showAlert("Text Cleared Successfully", 'danger');
}

    const [text, settext] = useState("")
    return (

        <div className="container" style={{color: props.mode==="dark"? "white": "black"}} >
            <div class="mb-3 my-3">
  <textarea class="form-control" style={{backgroundColor: props.mode==="dark"? "grey" : "white", color: props.mode==="dark"?"white" : "black"}} onChange={handelOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className="btn-primary my-2 mx-3" onClick={convertToUpper}>Convert To Uppercase</button>
<button className="btn-success my-2 mx-3" onClick={convertToLower}>Convert To Lowercase</button>
<button className="btn-danger my-2 mx-3" onClick={clearText} >Clear The Text</button>
        

<div className="container" style={{color: props.mode==="dark" ? "white" : "black"}}  >

<h2> Your Text Summary </h2>
<p>Your Text Has {text.split(" ").length-1} words and {text.length} Characters  </p>
<p> { 0.008 * text.split("").length} minutes to read </p>
</div>

</div>
    )
}
