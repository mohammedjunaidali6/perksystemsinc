import React from "react";
import trainingbanner from "./training1.jpg";
import trainingservice from "./ApplicationDevelopment-300x161.jpg";


const Training = () => {

  return (
    <div>
      <div className="training">
        <img
          src={trainingbanner}
          alt="Training banner"
          id="trainingbannerimg"
        />
        <h1 id="traininghead">Training</h1>
      </div>
      <div className="trainingdiv">
        <img
          src={trainingservice}
          alt="our Trainings"
          id="trainingimg"
        />
        <div id="trainingparas">
          <p>
            Perk Systems, Inc. serving wide variety of areas related to
            application design and development to meet client’s expectations by
            providing cost effective quality solutions. Our innovative, flexible
            and cost effective solutions that help clients align their IT
            strategy with business goals within their budgetary parameters.
            Quality and customer satisfaction is our primary motto. We offer web
            and software application development, mobile application
            development, web design that help small and medium-scale businesses
            to focus on what they do best, leaving the technology to us.
          </p>
          <p>
            As a technology company, we aim to impart to all our client
            engagements high business value, notable cost optimization and
            reduced time to market. Our proven methodology acquires your
            business needs, and translates them into design, architecture,
            development, deployment of the end application and provides the
            necessary support.
          </p>
        </div>
      </div>
      <div className="training2">
        <h4>Our training methodology:</h4>
        <ul>
            <li>Train in a comfortable, ready-to-learn environment</li>
            <li>Interact face-to-face with peers and expert instructors</li>
            <li>Study topical, results-oriented course content</li>
            <li>Use state-of-the-art equipment</li>
            <li>Get hands-on labs practice</li>
        </ul>
        <h4>We provide regular trainings on below Technologies:</h4>
        <ul>
            <li>Java/J2EE</li>
            <li>NET</li>
            <li>QA testing</li>
            <li>Business analysis</li>
            <li>SQL server development</li>
            <li> UI developers</li>
            <li>Datapower and hadoop technologies</li>
        </ul>
      </div>
        
    </div>
  );
};

export default Training;
