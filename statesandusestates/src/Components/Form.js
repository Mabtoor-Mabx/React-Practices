import React , {useState} from 'react'

export default function Form(props) {
    

const handleUpperCase= ()=>{
 let newText =  text.toUpperCase();
 setText(newText);
}

const HandelOnChange = () =>{

    console.log("OnChange");
}

   
const [text, setText] = useState("Enter Text Here");


    return (
        <div className="container ">
<div className="mb-3 my-4">
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="9"  onChange={HandelOnChange}   >
      
  </textarea>
</div>

<button className="btn-primary" onClick={handleUpperCase} > Convert To Uppercase </button>

        </div>
        
    )
}
