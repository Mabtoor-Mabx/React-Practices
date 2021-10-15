import React from 'react'

export default function AboutUs(props) {
    return (
        <div className='container my-3'>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Text Utils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}}>
          TextUtils is simply a set of utility functions to do operations on String objects.
I usually have gone through many projects & I have seen many times in the code there is no use of TextUtils, I am not saying that it’s necessary to use it but if we can reduce some extra work so then why not?
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Whay it is so important
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}}>
       I was wondering - "why do others use TextUtils in many purposes?" - but I am not clear about this. The Developer site says that it is a simple string splitter. I understand this but I don't know how to use this in a practical manner or what purposes I can use it? Can anyone provide me some practical example with a code snippet? 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Set of Utility Function
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'black'}}>
      
It is simply a set of utility functions to do operations on String objects. In fact, the whole class doesn't have any instance fields or methods. Everything is static. Consider it like a container to group functions with a text-based semantic. Many of them could have been methods of a String inherited class or CharSequence inherited class.
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
