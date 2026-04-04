import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="blue">Ronvier Labordo</span>{" "}
            from <span className="blue">Bito-on, Jaro, Iloilo City</span>.
            <br />
            <br />
            I’m currently studying an{" "}
            <span className="blue">Information Technology</span> course{" "}
            <br />focusing on developing my skills in{" "}
            <span className="blue">programming</span> and{" "}
            <span className="blue">software development</span>.
            <br />
            <br />
            I am working towards becoming a professional 
            in the tech industry by gaining knowledge and 
            hands-on experience in modern technologies.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drone Flying Enthusiast 🚁
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Labordo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
