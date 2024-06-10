import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { UploadVideo } from "../Services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadServerResponse}) {

  const [video, setVideo] = useState({
    id: "", caption: "", url: "", embedLink: ""
  })


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e)=>{
    const { value } = e.target
   if ( value ){
    const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({ ...video, embedLink:link })
   }else{
       setVideo({...video, embedLink:""})
   }
  }
  console.log(video);
  
  const handleuplod =async ()=>{
    const {id,caption,url,embedLink}=video 
    if(!id ||!caption ||!url ||!embedLink)
      {
        toast.warning("please fill missing fields")
      }else{
    // make a api call
   const response = await UploadVideo(video)
  //  console.log(response);
   if(response.status>=200 && response.status<300){
    //set server response
    setUploadServerResponse(response.data)
    toast.success(`${response.data.caption} video sucessfully uploaded`)

     // reset the video
     setVideo({
      id:"",caption:"",url:"",embedLink:""
     })


    // hide modal
    handleClose()
   }else{
    // console.log(response);
    toast.error('cannot perform the action rightnow ')
   }

  }
  }

 

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload videos</h5>
        <Button onClick={handleShow} className="btn">
          <i className="fa-solid fa-plus fa-beat "></i>
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Upload a video </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
        <Form className="border border-secondary rounded p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter video id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter video Tittle" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter video Image URl " onChange={(e)=>setVideo({...video,url:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter video Link" onChange={getEmbedLink} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleuplod}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      theme="colored"
      autoClose={2000}/>
    </>
  );
}

export default Add;

