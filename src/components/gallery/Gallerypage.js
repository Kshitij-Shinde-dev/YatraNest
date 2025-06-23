import React from 'react';
import './Gallerypage.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';

function Gallerypage() {
  return (
    <div className="gallery-page">
    {/* <Card className='gallery-card'> */}
      <Container>
        <h2 className=' head-gallery my-3 d-flex justify-content-center'>Gallery</h2>
        {/* Row 1 */}
        <Row className="mb-4">
          <Col><img src= "./Images/Gone.jpg"alt="Gallery 1" className="gallery-img" /></Col>
          <Col><img src="./Images/Gtwo.jpg "alt="Gallery 2" className="gallery-img" /></Col>
          <Col><img src="./Images/Gthree.jpg"alt="Gallery 3" className="gallery-img" /></Col>
        </Row>

        {/* Row 2 */}
        <Row className="mb-4">
          <Col><img src="./Images/Gfour.jpg"alt="Gallery 4" className="gallery-img" /></Col>
          <Col><img src="./Images/Gfive.jpeg" alt="Gallery 5" className="gallery-img" /></Col>
          <Col><img src="./Images/Gsix.jpg" alt="Gallery 6" className="gallery-img" /></Col>
        </Row>

        {/* Row 3 */}
        <Row className="mb-4">
          <Col><img src="./Images/Gseven.jpg" alt="Gallery 7" className="gallery-img" /></Col>
          <Col><img src="./Images/Geight1.jpeg" alt="Gallery 8" className="gallery-img" /></Col>
          <Col><img src="./Images/Gnine.jpeg" alt="Gallery 9" className="gallery-img" /></Col>
        </Row>

        {/* Row 4 */}
        <Row className="mb-4">
          <Col><img src="./Images/Gten.jpg" alt="Gallery 10" className="gallery-img" /></Col>
          <Col><img src="./Images/Gele.jpg" alt="Gallery 11" className="gallery-img" /></Col>
          <Col><img src="./Images/Gtwe.jpg" alt="Gallery 12" className="gallery-img" /></Col>
        </Row>
      </Container>
      {/* </Card> */}
    </div>
  );
}

export default Gallerypage;
