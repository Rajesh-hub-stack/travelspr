import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'

const Adminlogin = () => {
  
  const dispatch=useDispatch()
  const nav=useNavigate()
  const[Admin,setadmin]=useState({
    Admin_user:'',
    Admin_password:"",
  })
  const Adminlogin=(e)=>{
    e.preventDefault()
  if(String(Admin.Admin_user)==='ADMIN' && String(Admin.Admin_password)==='ADMIN' ){
    nav('/add_trips')
    localStorage.setItem('Admin_status',true)
    dispatch({type:'ADMIN'})
       dispatch({type:'RM_USER'})
  }
    
  }
  useEffect(()=>{
  localStorage.clear()
     dispatch({type:'RM_ADMIN'})

  },[])

    return(
      <div>
         <center><h2><b>Admin Login </b></h2></center>
     <div className="col-6 offset-3">
        
        <form onSubmit={Adminlogin}>
           
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" name='Admin_user' onChange={(e)=>setadmin({...Admin,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
            
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label >
    <input type="password" name='Admin_user' onChange={(e)=>setadmin({...Admin,[e.target.name]:e.target.value})} class="form-control" id="exampleInputPassword1"/>
  </div>
 <div className="text-center"> 
  <button type="submit" class="btn btn-primary">Submit</button></div>
  {/* <center><p>If You Don't Have An acoount Register</p><a href="/Registration">Here</a></center> */}
  <center><a href='/'>Goto User login</a></center>
</form>
</div>
       </div>
    )
}
  
    

export default Adminlogin
