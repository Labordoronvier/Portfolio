import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ron.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m currently studying an Information Technology course, 
              where I’m developing my skills in building reliable and 
              scalable systems. As I continue learning, 
              I’ve explored different technologies and discovered my 
              interest in creating efficient applications and user-friendly 
              experiences.
              <br />
              <br />
              I have experience working with
              <i>
                <b className="blue">
                  {" "}
                  JavaScript, CSS, HTML, Node.js, and Java{" "}
                </b>
              </i>
              and I enjoy exploring both backend and frontend development.
              <br />
              <br />
              My main areas of interest include
              <i>
                <b className="blue">
                  {" "}
                  Web Development, Blockchain Technology,{" "}
                </b>
              </i>
              and learning how to connect on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I like building projects using
              <b className="blue"> Node.js </b> and modern frameworks such as{" "}
              <i>
                <b className="blue">React.js</b> and{" "}
                <b className="blue">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="ron" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
