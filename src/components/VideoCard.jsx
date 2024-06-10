import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { addToHistory, deleteVideo } from "../Services/allAPI";


function Video({displayData,setDeleteVedioStatus,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>  {setShow(true);
    //make api call http://localhost:4000/history
    const{caption,embedLink}=displayData
    let today = new Date()
    // console.log(today)
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',
      hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
      let videoDetails ={
        caption,embedLink,timeStamp
      }
      await addToHistory(videoDetails)
  }


  // delete video
  const removeVideo =async (id) =>{
    //make a api call
     await deleteVideo(id)
    setDeleteVedioStatus(true)
  }
  const dragStarted = (e,id) =>{
    console.log("Drag started...video id:"+id);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={displayData?.url}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
           <h6>{displayData?.caption}</h6>
            {insideCategory?"":<Button onClick={()=>removeVideo(displayData.id)} className="btn">
              <i className="fa-solid fa-trash-can-arrow-up"></i>
            </Button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Video Caption
            {/* <h6>{displayData?.caption}</h6> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="526"
            src={`${displayData?.embedLink}?autoplay=1`}
            title={displayData?.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFllscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Video;




