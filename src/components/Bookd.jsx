import React, { useEffect, useState } from 'react'
import Update from './Update'
import { deleteCarHistory,getAllHistory,updateDetails } from '../services/allAPI'
function Bookd() {
  
  const[history, setHistory]= useState([])
  const allHistory=async()=>{
    const {data}= await getAllHistory()
    /*console.log(data);*/
    setHistory(data)
  }
  const removeHistory=async(id)=>{
    await deleteCarHistory(id)
    //to get remaining history
    allHistory()
  }
  useEffect(()=>{
    allHistory()
  },[])
  return (
    <div>
           <div className="table-responsive">
   
<table class="table table-hover">
  <thead>
  <tr class="table-dark">
    <th scope="col">#</th>
    <th scope="col">User Name</th>
    <th scope="col">Car Name</th>
    <th scope="col">Time</th>
    <th scope="col">Days</th>
    <th scope="col">Date</th>
    <th scope="col">Total</th>
    <th scope="col">Update</th>
    <th scope="col">Cancel</th>

  </tr>
  </thead><tbody>
  {history?.length>0? 
         history?.map((item, index)=>(
  <tr class="table-danger">

    <td>{index+1}</td>
    <td>{item.username}</td>
    <td>{item.carname}</td>
    <td>{item.time}</td>
    <td>{item.days}</td>
    <td>{item.date}</td>
    <td>{item.rate*item.days}</td>    

    <td>   
    <Update index={index}  history={history}/>
</td>    
    <td><span class="badge rounded-pill bg-danger" style={{cursor:'pointer'}} onClick={()=>removeHistory(item?.id)}>Cancel</span>
</td>

    </tr>)):
    <p className='mt-5 fw-bolder fs-4 text-danger'>No Bookings Yet</p>  
         }
    </tbody>
 </table>
</div>
</div>
  )
}

export default Bookd
