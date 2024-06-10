import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { deleteHistory, getAllHistory } from '../Services/allAPI';
import { Button } from 'react-bootstrap';



function WatchHistory() {
  const[history,setHistory]=useState([])
  const handleHistory = async ()=>{
    // make a api call
    const {data} = await getAllHistory()
    // console.log(data);
    setHistory(data);
  }
console.log(history);

  useEffect(()=>{
    handleHistory()
  },[])

    const handleDeleteHistory = async (id)=>{
      // make a api call
      await deleteHistory(id)
      //get remaing history
      handleHistory
    }


  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <h3>Watch-History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px'}}><i class="fa-solid fa-circle-arrow-left me-2"></i>Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>TimeStrap</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        history.length>0?history?.map((item,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td>{item?.embedLink}</td>
          <td>{item?.timeStamp}</td>
          <td><Button className='btn' onClick={()=>handleDeleteHistory(item?.id)} ><i className="fa-solid fa-trash text-white"></i></Button></td>
        </tr>
        ))
        :<p className='fs-5 fw-5 text-danger'>Nothing to Display</p>
     
       }
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory