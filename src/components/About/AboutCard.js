import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <ImPointRight /> BTech in IT - Cochin University of Science and Technology
              <br/>Studied core subjects like DBMS, Computer Networks, Data Structures and Algorithms, Operating Systems, etc.
              <br/>CGPA : 9.45
            </li>
            <li className="about-activity">
              <br/>
              <ImPointRight /> AISSCE (Class 12 CBSE) - Mary Rani Public School
              <br/>Studied Computer Science with Mathematics Major.
              <br/>Percentage : 90%
            </li>
            <li className="about-activity">
              <br/>
              <ImPointRight /> AISSE (Class 10 CBSE) - Mary Rani Public School
              <br/>Studied Maths, Science, Social Science and Languages
              <br/>CGPA : 10
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never stop learning and never stop building!"{" "}
          </p>
          <footer className="blockquote-footer">Philona</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
