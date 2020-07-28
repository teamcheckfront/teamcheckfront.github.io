import '../Styling/Footer.css';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// footer component
const Footer = () => {
  return (

    /* At this moment the footer sticks to the bottom of the page */
    // LinkedIn profiles
    // Other social networks
    // Copyright year created
    // Privacy Policy?
    // Link to contact page
    // link to sponsors & camosun
    // Navigation

    <MDBFooter className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">NCDI System</h5>
            <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Affiliations</h5>
            <ul className="affiliation-links">
              <li className="affiliation-link">
                <a href="https://www.checkfront.com/" 
                  className="infoText"
                  target="_blank" rel="noopener noreferrer">
                  Checkfront
                </a>
              </li>
              <li className="affiliation-link">
                <a href="http://camosun.ca/learn/calendar/current/web/ics.html" 
                  className="infoText"
                  target="_blank" rel="noopener noreferrer">
                  Camosun ICS 
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">LinkedIn</h5>
            <ul className="affiliation-links">
              <li className="affiliation-link">
                    <a href="https://www.linkedin.com/in/natasha-bains-478831a4/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="infoText">
                      Natasha Bains
                    </a>
                  </li>
                  <li className="affiliation-link">
                    <a href="https://www.linkedin.com/in/romansityayev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="infoText">
                      Roman Sityayev
                    </a>
                  </li>
                  <li className="affiliation-link">
                    <a href="https://www.linkedin.com/in/samreeta-kandola/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="infoText">
                      Samreeta Kandola
                    </a>
                  </li>
                </ul>
          </MDBCol>
          <Col float-right>
            <Button className="top" href="#top" variant='outline-secondary' size="sm" style={{ backgroundColor:"#dfe6f5", color:"#366fc9" }}>TOP</Button>
          </Col>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Team Checkfront
        </MDBContainer>
      </div>
    </MDBFooter>

    
  );
}

export default Footer;