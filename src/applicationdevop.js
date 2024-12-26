import React from "react";
import applicationdevop from "./ApplicationDevelopment-1.jpg";
import ourdevop from "./application.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Applicationdevop = () => {
  return (
    <div>
      <div className="devop">
        <img
          src={ourdevop}
          alt="Application development banner"
          id="applicationdevopbannerimg"
        />
        <h1 id="applicationdevophead">Application Development</h1>
      </div>
      <div className=" applicationdevopdiv">
        <img
          src={applicationdevop}
          alt="our development services"
          id="devopimg"
        />
        <div id="devopparas">
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
      
      <div className="accordiansdiv" >
        <div className="accordion" id="accordionExample" >
              {/* ---------------------------------------------------------------- */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: 'grey', color:'white' }}
              >
                Java, J2EE, J2ME, JSP & Struts, EJBs Applications
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Java is by far one of the most popular open source languages globally. Java is a platform independent, architecture neutral, multi-threaded, high performance programming language equally suitable for desktop & web applications development.</p>
                <p>Perk Systems, Inc. provides design and development services that can utilize efficiently the services available from Java application servers and the J2EE framework, including Struts, Servlets and Java Server Pages (JSPs), Enterprise JavaBeans (EJBs), Java’s Messaging Services and JDBC.</p>
                <p>Our Java CoE helps provide solutions in variety of industry verticals such as Healthcare, E-Commerce, Retail, Telecom, and Manufacturing. We specialize in:</p>
                <ul>
                    <li>Design & Development of complete end-end web based solutions</li>
                    <li>Design & Development of complete end-end web based solutions</li>
                    <li>Design and Development of Web Services</li>
                    <li>Design and Development of Frameworks/API</li>
                    <li>Providing solutions that integrate with legacy systems</li>
                    <li>Providing solutions for Enterprise Application Integration (EAI)</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------- */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                style={{ backgroundColor: 'grey', color:'white' }}
              >
                .NET and ASP.NET Technologies
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Software development by using Microsoft Technologies(also known as application development, software design, designing software, software application development, enterprise application development, or platform development) is the development of a software product.</p>
                <p>We develop both Desktop and Web application as well as mobile apps. We design and develop the ERP solutions for your business.</p>
              </div>
            </div>
          </div>
            {/* ---------------------------------------------------------------- */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                style={{ backgroundColor: 'grey', color:'white' }}
              >
                PHP, MY SQL, JAVASCRIPT and JQUERY
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>PHP is one of the best platforms to develop customized web applications. The beauty of this server side scripting language lies in the flexibility in terms of design and functionality. Moreover, in collaboration with the MYSQL database, this language offers dynamic solutions.</p>
                <p>Our PHP experts help you with scalable, flexible and improved PHP development services in line with your business needs, work flow management and organizational structure of varied endeavors. We are having expertise in the field of Company sites, E-Commerce websites, CMS development, Social networking sites, Web directories, Puzzles, Ajax, XML and Job sites to name a few.</p>
                <p>Our PHP Developers are well experienced in using all different types of PHP technologies in the market, like;</p>
                <ul>
                    <li><b>PHP / Smarty</b></li>
                    <li><b>CakePHP</b></li>
                    <li><b>Core PHP</b></li>
                    <li><b>Open Source CMS</b></li>
                    <li><b>Zend Development</b></li>
                    <li><b>CodeIgniter</b></li>
                    <li><b>CakePHP</b></li>
                    <li><b>XML</b></li>
                    <li><b>MVC framework</b></li>
                    <li><b>Ajax</b></li>
                </ul>
              </div>
            </div>
          </div>
            {/* ---------------------------------------------------------------- */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
                style={{ backgroundColor: 'grey', color:'white' }}
              >
                ORACLE Database Applications
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Oracle Database 12c is a single integrated platform that supports SQL, XML, and procedural languages (e.g., PL/SQL, Java, C/C++) in a simple fashion with high performance and scalability. These solutions include complex implementations of Oracle Ebusiness suite, Design and Implementation of High Availability Oracle DB architecture, Remote Database Support 24x7x365, Development of Business Intelligence and Development of enterprise custom solutions.</p>
                <p>Perk systems Inc. delivery capabilities with Oracle extend towards the following functional areas:</p>
                <ul>
                    <li>Oracle Applications</li>
                    <li>Oracle E-Business Suite</li>
                    <li>Oracle Forms & Reports</li>
                    <li>Oracle RDBMS</li>
                    <li>Oracle Database Management & Administration</li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Applicationdevop;
