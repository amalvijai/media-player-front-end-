import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const  navigateByurl = useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h3>
            Welcome to <span className="text-warning">Media Player</span>{" "}
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            doloribus, architecto eveniet sed sunt dolorem nihil molestias quas
            harum dolor voluptatibus, ratione iure, cumque velit ipsam laborum
            aspernatur vel et.
          </p>
          <Button onClick={()=>navigateByurl('/home')} className="mt-4 btn-warning">Get Started</Button>
        </Col>
        <Col lg={5}>
          <img
            className="img-fluid"
            src="https://gifyard.com/wp-content/uploads/2023/03/GIF-Player.gif"
            alt="player"
          />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: "22rem" }}>
            <Card.Img
              width={"300px"}
              height={"300px"}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqs7FqPljneTnyU7KJAT7Mc_OWLZL5bt8FQQ&s"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "22rem" }}>
            <Card.Img
              width={"300px"}
              height={"300px"}
              variant="top"
              src="https://y.yarn.co/57564c7a-32a7-4bd0-b423-6c16468e8956_text.gif"
            />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "22rem" }}>
            <Card.Img
              width={"300px"}
              height={"300px"}
              variant="top"
              src="https://i.gifer.com/NQqY.gif"
            />
            <Card.Body>
              <Card.Title>WatchHistory</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container b-5 border rounded p-5 border-info d-flex align-items-center justify-content-between w-100">

        <div className="col-lg-5">
          <h3 className="mb-5 text-warning">Simple,Powerfull & Fast</h3>
          <h6 className="mb-3">
            <span className="fs-5 fw-bolder text-warning">Play Everything</span>
            : Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sequi id,
            doloremque est mollitia quia natus earum odio beatae eius ullam
            consectetur, quidem distinctio doloribus aspernatur voluptates
            expedita, ad dolor quisquam!
          </h6>

          <h6 className="mb-3">
            <span className="fs-5 fw-bolder text-warning">
              Categorize Videos
            </span>
            : Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sequi id,
            doloremque est mollitia quia natus earum odio beatae eius ullam
            consectetur, quidem distinctio doloribus aspernatur voluptates
            expedita, ad dolor quisquam!
          </h6>

          <h6 className="mb-3">
            <span className="fs-5 fw-bolder text-warning">
              Managing History
            </span>
            : Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sequi id,
            doloremque est mollitia quia natus earum odio beatae eius ullam
            consectetur, quidem distinctio doloribus aspernatur voluptates
            expedita, ad dolor quisquam!
          </h6>

        </div>
        <div className="video col-lg-5">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/L0yEMl8PXnw?si=N8jw4if4MFh1ahuX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
