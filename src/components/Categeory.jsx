import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button,  Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getAllCategory,deleteCategory, getAvideo, updateCategory } from "../Services/allAPI";
import VideoCard from './VideoCard';

function Categeory() {

const [allCategories,setAllCategories]=useState([])

  const [categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{
    if(categoryName){
      let body={
      categoryName,allVideos:[]
      }
      //make a api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset stste
        setCategoryName("")
        // get categories
        getCategories()
      }else{
        toast.error("something went wrong")
      }

    }else{
      toast.warning("please provide category Name")

    }
  }
   
  const getCategories = async ()=>{
    //make a api call
    const {data}=await getAllCategory()
    // console.log(data);
    setAllCategories(data)
  }
  console.log(allCategories);
  useEffect(()=>{
getCategories()
  },[])


  const handleDelete = async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e)=>{
    console.log("vedio drag over category");
    e.preventDefault()
   }



  const videoDrop = async (e,categorId)=>{
    console.log("vedio dropped inside the category:"+categorId );
   const videoId = e.dataTransfer.getData("videoId")
   console.log("video card id:",videoId);
   //get video details
   const {data} = await getAvideo(videoId)
   console.log(data);
   // get category details 
   const selectedCategory = allCategories?.find(item=>item.id==categorId)
   selectedCategory.allVideos.push(data)
   console.log(selectedCategory);
   // make api call
   await updateCategory(categorId,selectedCategory)
   getCategories()
  }

 



  return (
    <>
      <div className="d-grid ms-3">
        <Button onClick={handleShow} className="btn btn-info">
          Add New Category
        </Button>
      </div>

      {
        allCategories?.length>0?allCategories?.map(item=>(
          <div className="m-5 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item.categoryName}</h6>
              <Button onClick={()=>handleDelete(item?.id)} className="btn"><i className="fa-solid fa-trash text-white"></i></Button>
            </div>

            <Row>
              {
                item?.allVideos && item?.allVideos.map(
                  card=>(
                   <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true}/>
                   </Col>
                  )
                )
              }
            </Row>

          </div>

         

        )):<p className='fs-5 fw-5 ms-3 mt-4 text-danger'>No   Categories Added</p>
      }


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
          
          <Form className="border border-secondary rounded p-3">
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Category Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Category Name "onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      theme="colored"
      autoClose={2000}/>
    </>
  );
}

export default Categeory;
