import React from 'react';
import './Contactuspage.css';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';

function Contactuspage() {
  return (
    <Container className="py-4">
      <Card className="mx-auto w-75 p-4 shadow rounded-4">
        <h2 className="head-corporate text-center mb-4">Corporate Head Office - Pune (H.O.)</h2>
        <Row>
          <Col md={6}>
            <ul className="list-unstyled">
              <li><strong>Location:</strong></li>
              <li>Balajinagar</li>
              <li>Yatranest Travels, Near Sawant Park</li>
              <li>Maharashtra</li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/Sawant+Park/@18.4616755,73.8552173,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bfcf6aaaaaab:0xe1f90a45eb6919df!8m2!3d18.4616704!4d73.8577922!16s%2Fg%2F11bw2g_dm3?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <Button  variant="outline-primary" className="enquiry-direction-button mt-2">
                    📍 Get Directions</Button>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled">
              <li><strong>Phone:</strong> 02345698712</li>
              <li><strong>Helpline:</strong> 02136547852</li>
              <li><strong>Working Hours:</strong> 10:00 AM – 11:00 PM</li>
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Contactuspage;
