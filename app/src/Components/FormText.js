import React, {useState} from 'react'

export default function FormText() {



    const handelOnChange = (event)=>{
        console.log('On Change');
        setText(event.target.value);
    }

    const upperCase = ()=>{
        let upperText = Text.toUpperCase();
        setText(upperText);
    }

    const clearText = ()=> {
        setText("");
    }

    const  lowerCase = () =>{
        let lowerText = Text.toLowerCase();
        setText(lowerText);
    }


    const [Text, setText] = useState("");
    return (
        <div className="container">
    <div class="mb-3">
  <textarea class="form-control my-4" onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8" value={Text}></textarea>
<button className="btn-primary mx-3 my-2" onClick={upperCase} >Convert To UpperCase</button>
<button className="btn-primary mx-3 my-2" onClick={lowerCase}  >Convert To LowerCase</button>
<button className="btn-primary mx-3 my-2" onClick={clearText} >Clear Text</button>
</div>
<h3> Your Text Summary </h3>
<p>Your Text Contain {Text.split(" ").length-1} words and {Text.length} Characters</p>
<p> {0.008 * Text.split(' ').length} Words Read </p>
<h3>Preview</h3>
<p> {Text} </p>
</div>
    )
}
