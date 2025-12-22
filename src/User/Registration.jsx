import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

  const Registration=()=>{
  const[reg,setreg]=useState({
    Name:'',
    Mobile:'',
    Email:'',
    Password:'',

  })
  const nav=useNavigate()
const register=(e)=>{
  e.preventDefault()
  axios.post('https://travelagency-18630-default-rtdb.firebaseio.com/user.json',reg).then(r1=>{
    alert('Registration successful')
  })
  nav('/')
}

    return(
        <>
        <div className="col-6 offset-3">
            <center><h2><b>Registration Form</b></h2></center>
        <form onSubmit={register}>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="Name" onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile</label>
    <input type="tel" name="Mobile" onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" name="Email"  onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
            
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label >
    <input type="password" name="Password"  onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className="text-center"> 
  <button type="submit" class="btn btn-primary">Submit</button></div>
 
  <center><a href='/'>Goto Admin login</a></center>

</form>
</div>

        </>
    )
}
export default Registration