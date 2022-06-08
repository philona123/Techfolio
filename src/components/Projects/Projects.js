import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/rest.jpg";
import emotion from "../../Assets/Projects/munnar.png";
import editor from "../../Assets/Projects/chat.png";
import chatify from "../../Assets/Projects/job.png";
import suicide from "../../Assets/Projects/qnet.png";
import bitsOfCode from "../../Assets/Projects/mul.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Open Jobs Analyzer and Recommendation System"
              description="Final Year Major Project. A ML based web application that comes with an Analyzer that provides analysis of jobs on various metrics and a  job recommendation engine that recommends best suited jobs for an individual based on his interests and skills. "
              link="https://github.com/philona123/Major-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Alien Shooter Game"
              description="Multimedia Project. Alien Shooter is a 2D android game in which the user has to shoot down the enemy alien's spaceship before his/her lives gets exhausted"
              link="https://github.com/philona123/AlienShooterAndroidGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BoltChat Application"
              description="Android Based Mini Project. BoltChat is a group chat application in which users can interact with others in a chat group. This Application is developed using Flutter and Google Firebase."
              link="https://github.com/philona123/FlashChat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restaurant Order Tracking System"
              description="An RDBMS based Mini Project. This web application can be used by restaurant waiters to track the orders placed by customers so that they won't miss any customer's order and manage efficiently."
              link="https://github.com/philona123/Restaurant-Order-Tracking-Software"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="QNET"
              description="An Android Application that helps teachers to schedule online classes and helps students to track their academic activities efficiently. This app also come with a lot of other exciting features."
              link="https://github.com/philona123/DefHack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Hello Munnar"
              description="Hello Munnar is a Progressive Web Application developed for Munnar Tourism in order to help the tourist to visit the various tourist destinations at Munnar which is divided into seven routes (VIBGYOR) in a more planned manner"
              link="https://github.com/philona123/hello-munnar-backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
