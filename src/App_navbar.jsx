import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const App_navbar = () => {
  

  
    const user_login=useSelector(state=>state.user_login)
    console.log(user_login)
    const admin_login=useSelector(state=>state.admin_login)
    console.log(admin_login)
    const[user_status,set_status]=useState(true)
    const[admin_status,set_admin]=useState(true)
    useEffect(()=>{
let user_status= localStorage.getItem('user_status')
    let admin_status=localStorage.getItem('Admin_status')
    console.log('user status:',user_status)
    console.log('Admin status:',admin_status)
    set_admin(admin_status)
    set_status(user_status)
     
  })
    
    // console.log('user status:',user_status)
    // console.log('Admin status:',admin_status)
  return (
    <div>
        {/* user */}
        {user_status || user_login ?
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to={'/trip'}>Travel Agency</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/trip'}>Trips</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/prev_trips'}>Previoius Trips</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/Customer_Support'}>Help</Link>
        </li>
      </ul>
      
        <Link class="btn btn-outline-danger"  to={'/'} type="submit">Logout</Link>
     
    </div>
  </div>
</nav>: admin_status || admin_login? <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to={'/add_trips'}>Admin Pannel</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/add_trips'}> Add Trips</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/trip_details'}> Trip Details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/customer_details'}> customer Details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/booking_details'}> Booking Details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/query_details'}> Query Details</Link>
        </li>
         <li class="nav-item">
        </li>
      </ul>

      
        <Link class="btn btn-outline-danger"  to={'/admin'} type="submit">Logout</Link>
     
    </div>
  </div>
</nav> :null }
    </div>
  )
}

export default App_navbar
