import React from 'react'

export default function AboutUs(props) {
    return (
        <div className='container my-3'>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Word Counter?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}>
      The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Software About Word Count
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}>
      Modern web browsers support word counting via extensions, via a JavaScript bookmarklet, or a script that is hosted in a website. Most word processors can also count words. Unix-like systems include a program, wc, specifically for word counting.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        In Non Fiction
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}>
      The acceptable length of an academic dissertation varies greatly, dependent predominantly on the subject. Numerous American universities limit Ph.D. dissertations to 100,000 words, barring special permission for exceeding this limit
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
