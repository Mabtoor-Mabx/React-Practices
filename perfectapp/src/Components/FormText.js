import React  ,{useState} from 'react'

export default function FormText(props) {

    const [text, settext] = useState("");

    const handleOnChange= (event)=> {
        console.log('On Change Worked');
        settext(event.target.value);
    }

    const convertToUpper = ()=>{
        let upperCase = text.toUpperCase();
        settext(upperCase);
    }
    const  convertToLower = () =>{
        let lowerText = text.toLowerCase();
        settext(lowerText);
    }
    const clearText = () =>{
        settext("");
    }


    return (
        <div className="container">
            <h2 className='my-2'>Changing The Text</h2>
    <div className="mb-3 my-4"> 
  
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn-primary mx-4 my-3" onClick={convertToUpper} >Convert To UpperCase</button>
<button className="btn-success mx-4 my-3" onClick={convertToLower} >Convert To LowerCase</button>
<button className="btn-danger mx-4 my-3" onClick={clearText} >Clear The Text</button>
            
        </div>
    )
}
