import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { getAllvideo } from '../Services/allAPI';

function View({uplodVideoServerResponse}) {
  const [deleteVideoStatus,setDeleteVedioStatus]=useState(false)
  const [allVideos,setAllVideos]=useState([])

  const getUploadedVideos = async ()=> {
    // make an API call
    const { data } = await getAllvideo()
    setAllVideos(data)
  };

  useEffect(()=> {
    getUploadedVideos()
    setDeleteVedioStatus(false)
  }, [uplodVideoServerResponse,deleteVideoStatus])

  console.log(allVideos);

  return (
    <>
      <Row>
       {
        allVideos.length>0?
        allVideos.map(Video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayData={Video} setDeleteVedioStatus={setDeleteVedioStatus}/>
          </Col>
        ))
        :<p className='fs-5 fw-5 text-danger'>Nothing to Display</p>
       }
      </Row>
    </>
  )
}

export default View;
