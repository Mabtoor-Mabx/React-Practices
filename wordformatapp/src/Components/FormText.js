import React , {useState} from 'react'

export default function FormText(props) {
    const [text, settext] = useState("");

    const  handelOnChange = (event) =>{
        settext(event.target.value);
    }
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        settext(newText);
    }
    const convertToLower = () =>{
        let newText = text.toLowerCase();
        settext(newText);
    }
    const clearText = ()=>{
        settext("");
    }
    return (
        <div className="container my-5" >
    <div class="mb-3">
  <textarea class="form-control"  onChange={handelOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}  value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div className="container my-3">
    <button className="btn-primary my-3 mx-2" disabled={text.length===0} onClick={convertToUpper} >Convert To Uppercase</button>
    <button className="btn-success my-3 mx-2" disabled={text.length===0} onClick={convertToLower} >Convert To Lowercase</button>
    <button className="btn-danger my-3 mx-2"  disabled={text.length===0} onClick={clearText} >Clear The Text</button>
</div>
<div className="container" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>Your Text Contain {text.split(' ').length-1} Words and {text.length} Characters </p>
    <p> {0.008 * text.split('').length} Minutes To Read </p>
    <h2>Preview</h2>
    <p> {text} </p>
</div>
        </div>
    )
}
