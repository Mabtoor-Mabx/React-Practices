import React from 'react'

export default function Query(props) {
    return (
        <div className='container my-3'  >
            <form class="row g-3" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}>
  <div class="col-md-6"   >
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control "  style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} required='required'  id="inputEmail4" placeholder="Enter Your Email" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" required='required' style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}  placeholder="Enter Your Password" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" required='required'  style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}  placeholder="Enter Your Address"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2 (Optional)</label>
    <input type="text" class="form-control" id="inputAddress2" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}  placeholder="Enter Your Address"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" required='required' id="inputCity" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} placeholder="Enter City Name"/>
  </div>
 
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" required='required' id="inputZip" style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} placeholder="Enter Zip Code"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" required='required' for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">{props.submit}</button>
  </div>
</form>
        </div>
    )
}
