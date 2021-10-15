import React , {useState} from 'react'

export default function FormText(props) {

const handelOnchange =(event) =>{
settext(event.target.value);
}

const convertToUpper = () =>{
    let newText = text.toUpperCase();
    settext(newText);
}

const convertToLower = () =>{
    let newText = text.toLowerCase();
    settext(newText);
}

const clearText = () =>{
    settext("");
}

    const [text, settext] = useState("");
    return (
        <div className="container">
    <div className="mb-3 my-5">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode=='light'? 'white': 'grey',
    color: props.mode=='light'? 'black': 'white'}}  onChange={handelOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className="btn-primary mx-4 my-3" onClick={convertToUpper} >Convert To UpperCase</button>
<button className="btn-success mx-4 my-3" onClick={convertToLower} >Convert To LowerCase</button>
<button className="btn-danger mx-4 my-3" onClick={clearText} >Clear Text</button>

<div className="container" style={{backgroundColor: props.mode=='light'? 'white': 'grey',
    color: props.mode=='light'? 'black': 'white'}}>

<h2>Your Text Summary</h2>
<p>Your text have {text.split(" ").length-1} Words And {text.length} Characters </p>
<p> { 0.008 * text.split("").length} Minutes To Read </p>
<h2>Preview</h2>
<p> {text} </p>

</div>

</div>
    )
}
