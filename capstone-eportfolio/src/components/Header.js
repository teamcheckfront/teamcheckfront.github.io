import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

// Header component for the home page
const Header = () => {
  return (
  <header className="App-header">
    <Jumbotron className="jumbo">
      <Container className="Header-text">
        <h1>New Customer Data Importation System</h1>
        <h5>
          Information and Computer System Technology Capstone 2020
        </h5>
      </Container>
      <br></br>
      <Container className="Logos" fluid="md" rounded>
      <a href="https://www.checkfront.com/" target="_blank" rel="noopener noreferrer">
        <img src="/checkfront_logo.jpg" className="Checkfront-logo" alt="checkfront-logo" />
      </a>
      <a href= "http://camosun.ca/" target="_blank" rel="noopener noreferrer">
        <img src="/camosun_logo.png" className="Camosun-logo" alt="camosun-logo" />
      </a>
      </Container>
    </Jumbotron>
  </header>
)};

export default Header;