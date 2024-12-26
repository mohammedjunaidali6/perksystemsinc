import React from "react";
import consultingbanner from "./staffingandconsulting1.jpg";
import conservice from "./mainpic-300x145.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Consultingservices = () => {
  return (
    <div>
      <div className="consulting">
        <img
          src={consultingbanner}
          alt="Consulting banner"
          id="consultingbannerimg"
        />
        <h1 id="consultinghead">CUSTOM CONSULTING SERVICES</h1>
      </div>
      <div className=" consultingdiv">
        <img
          src={conservice}
          alt="our services"
          id="consultingimg"
        />
        <div id="consultingparas">
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
          <p>
            We work across a range of technologies and our team has significant
            experience in web based application development, database-driven
            systems, mobile application development. We believe that the company
            asset is in its efficient team. Our Professional and qualified team
            are highly skilled in a number of key technologies. They are capable
            of producing practically any feature you may desire in application
            development.
          </p>
        </div>
      </div>
        
          </div>
  );
};

export default Consultingservices;
