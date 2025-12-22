import React from 'react'
import { createStore } from 'redux'



const Store_details={
    user_login:false,
    admin_login:false,
    Travelling_Name:'',
 Contact:'',
 From:'',
 To:'',
 Available_Seats:0,
 Ticket_Price:'',
 From_Date_Timings:'',
 To_Date_Timings:'',
Bus_Type:'',
Trip_id:'',

}

const Redux_store = (state=Store_details,action) => {
  switch(action.type){
    case 'USER':
    return{...state,user_login:true,admin_login:false}
    case 'ADMIN':
     return{...state,user_login:false,admin_login:true}
      case 'RM_USER':
    return{...state,user_login:false}
    case 'RM_ADMIN':
     return{...state,admin_login:false}
      case 'Travelling_Name':
     return{...state,Travelling_Name:action.Travelling_Name}
      case 'From':
     return{...state,From:action.From}
      case 'To:':
     return{...state,To:action.To}
      case ' Available_Seats':
     return{...state, Available_Seats:action.Available_Seats}
     case ' From_Date_Timings':
     return{...state, From_Date_Timings:action.From_Date_Timings}
     case 'To_Date_Timings':
     return{...state,  To_Date_Timings:action. To_Date_Timings}
       case 'Ticket_Price':
     return{...state, Ticket_Price:action. Ticket_Price}
      case 'Trip_id':
     return{...state, Trip_id:action.Trip_id}
     default:
        return{...state}
}
}
const Store=createStore(Redux_store)
export default Store