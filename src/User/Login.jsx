import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import axios from "axios"
// import { Link } from "react-router-dom"
const Login=()=>{
  const dispatch=useDispatch()
  const nav=useNavigate()
  localStorage.clear()
  
  const [user_details,setdetails]=useState([])
  useEffect(()=>{
      localStorage.clear()
     dispatch({type:'RM_USER'})
      // localStorage.clear()
      axios.get('https://travelagency-18630-default-rtdb.firebaseio.com/user.json').then(r1=>{
    setdetails(r1.data)
  })

  },[])
const [login,setlogin]=useState({
  Email:"",
  Password:"",
})
  console.log('user:',user_details)
  // const user_name=localStorage.getItem('user_Name')
  //  const user_mobile= localStorage.getItem('user_mobile')
  const userlogin=(e)=>{
    e.preventDefault()
 
  for(let x of Object.keys(user_details)){
   
console.log(user_details[x])
    if(user_details[x].Email===login.Email){
      console.log('user name')
      if(user_details[x].Password==login.Password){
console.log('Password')
    localStorage.setItem('user_status',true)
     localStorage.setItem('user_Name',user_details[x].Name)
      localStorage.setItem('user_mobile',user_details[x].Mobile)
nav('/trip')
dispatch({type:'USER'})
       dispatch({type:'RM_ADMIN'})
      }
    }
  }
  }
 

    return(
       <div>
         <center><h2><b>User Login </b></h2></center>
     <div className="col-6 offset-3">
        
        <form onSubmit={userlogin}>
           
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email </label>
    <input type="email" name="Email" onChange={(e)=>setlogin({...login,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
            
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label >
    <input type="password" name="Password" onChange={(e)=>setlogin({...login,[e.target.name]:e.target.value})} class="form-control" id="exampleInputPassword1"/>
  </div>
 <div className="text-center"> 
  <button type="submit" class="btn btn-primary">Submit</button></div>
  <center><p>If You Don't Have An acoount? </p><a href="/Registration" >Register Here</a></center>
  <center><a href="/admin">Goto Admin login</a></center>
</form>
</div>
     </div>
    )
  }

export default Login