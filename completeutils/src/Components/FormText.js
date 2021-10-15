import React , {useState} from 'react'

export default function FormText(props) {

    const handelOnChange = (event)=>{
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
    const clearTheText = () =>{
        settext("");
    }   
    const [text, settext] = useState("")
    return (
        <div className="container my-3"   >
            <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}}  value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn-primary my-3 mx-2" disabled={text.length===0} onClick={convertToUpper} > Convert To Uppercase </button>
  <button className="btn-success  my-3 mx-2" disabled={text.length===0} onClick={convertToLower} >Convert To Lowercase</button>
  <button className="btn-danger  my-3 mx-2" disabled={text.length===0} onClick={clearTheText} >Clear The Text</button>
</div>
<div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white': 'black'  }} >
<h2>Your Text Summary</h2>
<p> Your Text Have {text.split(" ").length-1} Words and {text.length} Characters </p>
<p> {0.008 * text.split("").length} Minutes To Read </p>
<h2>Preview</h2>
<p> {text} </p>
</div>
 </div>
    )
}
