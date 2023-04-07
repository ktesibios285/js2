import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import heroImage from '../assets/bootstrap-themes.png';
import Projects from './Projects';

function Home() {
  return (
    <Container>
      <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <Col xs={10} sm={8} lg={6}>
          <Image src={heroImage} className='d-block mx-lg-auto img-fluid' />
        </Col>
        <Col lg={6}>
          <h1 className='display-5 fw-bold lh-1 mb-3'>
            Welcome, take a look around and have fun!
          </h1>
          <p className='lead'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <Button variant='outline-success' onClick={Projects}>My Projects</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;