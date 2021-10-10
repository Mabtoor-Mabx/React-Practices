import React, {useState} from 'react'

export default function FormText(props) {

const handleOnChange = (event) => {
    console.log('ChangeListenerWorked');
    setText(event.target.value);
}
 
const clearText= () =>{
    setText('');
}

const HandleOnUpper = () => {
  
    let upperText = text.toUpperCase();
    setText(upperText);
}

const HandleOnLower= () =>{
    let lowerText = text.toLowerCase();
    setText(lowerText);
}



const [text, setText] = useState("");

    return (
        <div className="container my-4">
    <div className="mb-3 ">
  <textarea className="form-control"  id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}rows="8"></textarea></div> 
  <button className="btn-primary my-4 mx-1" onClick={HandleOnUpper} > Convert To UpperCase</button> 
  <button className="btn-primary my-4 mx-1" onClick={HandleOnLower} > Convert To LowerCase</button> 
  <button className="btn-primary my-4 mx-1" onClick={clearText}> Clear Text</button> 

</div>
    )
}
