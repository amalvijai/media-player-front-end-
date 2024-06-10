import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import View from "../components/View";
import Categeory from "../components/Categeory";
function Home() {
  const [uplodVideoServerResponse,setUploadServerResponse]=useState({})
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadServerResponse={setUploadServerResponse} />
        </div>
        <Link
          to={"/watchhistory"}
          style={{ textDecoration: "none", color: "blue" }}
        >
          Watch History
        </Link>
      </div>

      <div className="container-fluid w-100 mt-5 d-flex justify-content-between align-items-center">
        <div className="all-videos col-lg-9">
          <h3>All-Videos</h3>
          <View uplodVideoServerResponse={uplodVideoServerResponse} />
        </div>
        <div className="category col-lg-3">
          <Categeory />
        </div>
      </div>
    </>
  );
}

export default Home;
