import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User_queries = () => {
    const [query,setquery]=useState([])
    useEffect(()=>{
        axios.get('https://travelagency-18630-default-rtdb.firebaseio.com/help.json').then(r1=>{
            // console.log(r1.data)
           setquery(r1.data)
        })   
     },[])
     let All_queries=[]
     for( let x of Object.keys(query)){
        All_queries.push({
            'Name':query[x].Name,
            'Mobile':query[x].Mobile,
            'Query':query[x].Query,
        })
     }
  return (
    <div className='container mt-2'>
      <center><u><b><h5>Query Details</h5></b></u></center>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      
       <th scope="col"> Name</th>
      <th scope="col">  Mobile</th>
      <th scope="col">  Query</th>
      {/* <th scope="col">Traveller Name</th>
      <th scope="col"> Traveller Mobile</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
    <th scope="col">Date|Time</th>
      <th scope="col">Ticket Price</th> */}
    </tr>
  </thead>
  <tbody>
    {

        All_queries.map((x,index)=>{
       <tr>
        <td>{index+1}</td>
        <td>{x.Name}</td>
         <td>{x.Mobile}</td>
          <td>{x.Query}</td>
      </tr>     
        })
    }
    {/* {
      All_booking.map((x,index)=>{
        <tr>
      <th scope="row">{index+1}</th>
      <td>{x.Travelling_Name}</td>
      <td>{x.user_name}</td>
      <td>{x.user_mobile}</td> 
      <td>{x.Person_name}</td>
       <td>{x.Person_mobile}</td> 
      <td>{x.From}</td>
      <td>{x.To}</td>
       <td>{x.From_Date_Timings}</td>
      <td>{x.Ticket_Price}</td>
    </tr>

      })
    } */}
    
    
  </tbody>
</table>
    </div>
  )
}

export default User_queries
