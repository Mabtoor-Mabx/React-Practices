import React , {useState} from 'react'

export default function  (props) {


    const ConvertToUpper= () =>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Uppercase Successfully", 'success');
    }
    const handelOnChange = (event) =>{
        settext(event.target.value);
     
    }
    const ConvertToLower =  () =>{
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Lowercase Successfully", 'success');
    }

    const clearTheText = () =>{
        settext("");
        props.showAlert("Text Clear Successfully", 'success');
    }


    const [text, settext] = useState("");
    return (
        <div className="container">
    <div className="mb-3 my-4">
  <textarea className="form-control" style={{backgroundColor: props.mode==="dark"? 'grey' : 'white' ,color: props.mode==="dark"?'white': 'grey'}
 } value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn-primary my-2 mx-3" onClick={ConvertToUpper}>Convert To UpperCase</button>
<button className="btn-secondary my-2 mx-3" onClick={ConvertToLower} > Convert To  LowerCase </button>
<button className="btn-danger my-2 mx-3" onClick={clearTheText} >Clear The Text</button>
<div className="container" style={{color: props.mode==='light'? 'black': 'white'}} >
<h2>Your Text Summary</h2>
<p>Your Text have {text.split(" ").length-1} Words  and {text.length} Characters  </p>
<p> {0.008  * text.split("") .length} Minutes To Read </p>

<h2>Preview</h2>
<p> {text} </p>

</div>
        </div>
    )
}
