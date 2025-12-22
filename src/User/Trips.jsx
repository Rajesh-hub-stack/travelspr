import { useState } from "react"
import { useEffect } from "react"
import { useSelector,useDispatch } from 'react-redux'
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Trips=()=>{

    const Trips=[{'Travels':'Sri krishna Travels','Semi_info':'A/c 2+1 Sleeper','Bus_no':'AP04A5523','Price':100,'Start_time':'09:00pm','End_time':' 8:30am','Available_Seats':54},{'Travels':'Sri krishna Travels','Semi_info':'A/c 2+1 Sleeper','Bus_no':'AP04A5523','Price':100,'Start_time':'09:00pm','End_time':' 8:30am','Available_Seats':54},{'Travels':'Sri krishna Travels','Semi_info':'A/c 2+1 Sleeper','Bus_no':'AP04A5523','Price':100,'Start_time':'09:00pm','End_time':' 8:30am','Available_Seats':54}]
    let nav=useNavigate()
    let dispatch=useDispatch()
    const[trips,Addtrips]=useState([])


  useEffect(()=>{
    axios.get('https://travelagency-18630-default-rtdb.firebaseio.com/trips.json').then(r1=>{
    // console.log(r1.data)
    Addtrips(r1.data)
  })

  },[])

 
    
 let Available_trips=[]
  console.log('trips:',trips)
  for(let  x of Object.keys(trips)){
    Available_trips.push ({
       "Available_Seats":trips[x].Available_Seats,
     "Bus_Type":trips[x].Bus_Type,
    "Contact":trips[x].Contct,
      "From":trips[x].From,
   "From_Date_Timings":trips[x].From_Date_Timings,
    "Ticket_Price":trips[x].Ticket_Price,
      "To":trips[x].To,
"To_Date_Timings":trips[x].To_Date_Timings,
"Travelling_Name":trips[x].Travelling_Name

    })
}
console.log('available trips:',Available_trips)

// let [filter,addfilter]=useState({
//   'From':'',
//  'To':'',
// })
var[final_data,setfinal]=useState([])

const changing=(e)=>{
  // addfilter({...filter,[e.target.name]:e.target.value})
let From_value=document.querySelector('From').value
let To_value=document.querySelector('To').value
console.log(From_value,To_value)
if(From_value!==''& From_value!==''){
  console.log('filterdata:')
  let filter_trips=[]
  Available_trips.filter((x)=>{
    if(String(x.From)===String(From_value)& String(x.To)===String(To_value)){
      console.log('From value:',x)
      filter_trips.push(x)
    }
  })
  console.log('status:',filter_trips)
  setfinal(filter_trips)
}
}

console.log('final:',final_data)
const trips_avl=(index)=>{
  console.log('select:',Available_trips[index])
  //  dispatch({type:'Trip_id','Trip_id':Number(index)+1})
  dispatch({type:'Available_Seats','Available_Seats': Available_trips[index].Available_Seats})
  dispatch({type:'Bus_Type','Bus_Type': Available_trips[index].Bus_Type})
  dispatch({type:'From','From': Available_trips[index].From})
  dispatch({type:'To','To': Available_trips[index].To})
  dispatch({type:' Travelling_Name',' Travelling_Name': Available_trips[index]. Travelling_Name})
  dispatch({type:' Ticket_Price',' Ticket_Price': Available_trips[index].Available_Seats})
  dispatch({type:'From_Date_Timings','From_Date_Timings': Available_trips[index].From_Date_Timings})
    dispatch({type:'To_Date_Timingss','To_Date_Timings': Available_trips[index].To_Date_Timings})
    
    nav('/booking')
}
const filter_index=(index)=>{

  console.log('select:' ,final_data[index])

  dispatch({type:'Available_Seats','Available_Seats': final_data[index].Available_Seats})
  dispatch({type:'Bus_Type','Bus_Type': final_data[index].Bus_Type})
  dispatch({type:'From','From': final_data[index].From})
  dispatch({type:'To','To': final_data[index].To})
  dispatch({type:' Travelling_Name',' Travelling_Name': final_data[index]. Travelling_Name})
  dispatch({type:' Ticket_Price',' Ticket_Price': final_data[index].Available_Seats})
  dispatch({type:'From_Date_Timings','From_Date_Timings': final_data[index].From_Date_Timings})
    dispatch({type:'To_Date_Timingss','To_Date_Timings': final_data[index].To_Date_Timings})
  nav('/booking')

}
    return(
        <>
        <div className='container mt-3'>
            <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Filter Here</span>
<select name='From' id="From" onChange={changing} class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>From</option>
  <option value="HYD">HYD</option>
  <option value="BNG">BNG</option>
  <option value="TPT">TPT</option>
</select>
 <select name='To' id="To" onChange={changing} class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>To</option>
  <option value="HYD">HYD</option>
  <option value="BNG">BNG</option>
  <option value="TPT">TPT</option>
  </select>
</div>

        <div className='row'>
            { final_data.length==0? Available_trips.map((x,index)=> <div onClick={()=>trips_avl(index)} className='col-lg-4 col-md-4 col-sm-6'>
            <div className='border border-1 rounded rounded-3 p-3 m-1 clabg-light'>
        <div className='d-flex justify-content-between'>
            <span className='h4'><b>{x.Travelling_Name}</b><br /> <span className='h6'>{x.Bus_Type}</span></span>
            <span>{x.Ticket_Price}</span>
           


        </div>
<div className='d-flex justify-content-between'>
    <span>{x.From_Date_Timings.split('T')[1]} -{x.To_Date_Timings.split('T')[1]}</span>
    <span><b>{x.Available_Seats}seats</b></span>
</div>
    </div>
    </div>)
   : final_data.map((x,index)=> <div  onClick={()=>filter_index(index)} className='col-lg-4 col-md-4 col-sm-6'>
            <div className='border border-1 rounded rounded-3 p-3 m-1 clabg-light'>
        <div className='d-flex justify-content-between'>
            <span className='h4'><b>{x.Travelling_Name}</b><br /> <span className='h6'>{x.Bus_Type}</span></span>
            <span>{x.Ticket_Price}</span>
           


        </div>
<div className='d-flex justify-content-between'>
    <span>{x.From_Date_Timings.split('T')[1]} -{x.To_Date_Timings.split('T')[1]}</span>
    <span><b>{x.Available_Seats}seats</b></span>
</div>
    </div>
    </div> )
    }

    </div>

    </div>
        
         
        </>
    )
}

export default Trips
