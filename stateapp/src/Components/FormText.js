import React , {useState} from 'react'

export default function FormText(props) {


    const onChange =(event) =>{
        console.log("On Change");
        settext(event.target.value);
    }

    const upperCase = () =>{
        let upperText = text.toUpperCase();
        settext(upperText);
    }
    const lowerCase = () => {
        let lowerText = text.toLowerCase();
        settext(lowerText);
    }

    const clearText= ()=>{
      
            settext("");
    }
    const [text, settext] = useState("");

    return (
        <div className="container my-3" >
            <div class="mb-3">
  <textarea class="form-control" value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn-dark mx-3 my-2" onClick={upperCase} > Convert To UpperCase </button>
<button className="btn-primary mx-3 my-2" onClick={lowerCase} >Convert To LowerCase</button>
<button className="btn-danger mx-3 my-2" onClick={clearText}>Clear Text</button>

<h3>Your Text Summary</h3>

<p>Your Text Contain {text.split(" ").length-1} and {text.length} Characters</p>
<p> {0.0008 * text.split(" ").length} Minutes To Read </p>

 <h3>Preview</h3>   
 <p> {text} </p>        
        </div>
    )
}
