import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Album from "../../Assets/Projects/Album.png";
import awesometodos from "../../Assets/Projects/awesometodos.png";
import PromiseRing from "../../Assets/Projects/PromiseRing.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PromiseRing}
              isBlog={false}
              title="Promise Ring"
              description="A simple and meaningful app that helps users create, share, and track personal promises with friends, family, or partners. It encourages trust and consistency through reminders and progress tracking, making it easier to stay accountable and strengthen relationships."
              ghLink="https://github.com/Labordoronvier/Promise-Ring"
              demoLink="https://labordoronvier.github.io/Promise-Ring/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awesometodos}
              isBlog={false}
              title="AwesomeTodosApp"
              description="A clean and simple task management app that helps users organize their daily activities efficiently. It allows users to add, update, and complete tasks easily, helping improve productivity and time management through a smooth and user-friendly interface."
              ghLink="https://github.com/Labordoronvier/AwesomeTodos"
              demoLink="https://awesometodos-n9p1.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Album}
              isBlog={false}
              title="Journey of Us"
              description="A personal album project that showcases a collection of meaningful moments and memories through a visually engaging interface. It allows users to explore, organize, and relive special experiences in a structured and interactive way, combining storytelling with clean and modern UI design."
              ghLink="https://github.com/Labordoronvier/Our_Journey"
              demoLink="https://labordoronvier.github.io/Our_Journey/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
