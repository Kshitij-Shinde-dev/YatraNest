import React from 'react';
import './Gallerypage.css';
import { Container, Row, Col } from 'react-bootstrap';

function Gallerypage() {
  return (
    <div className="gallery-page">
      <Container>
        {/* Row 1 */}
        <Row className="mb-4">
          <Col><img src= ""alt="Gallery 1" className="gallery-img" /></Col>
          <Col><img src=" "alt="Gallery 2" className="gallery-img" /></Col>
          <Col><img src=""alt="Gallery 3" className="gallery-img" /></Col>
        </Row>

        {/* Row 2 */}
        <Row className="mb-4">
          <Col><img src=""alt="Gallery 4" className="gallery-img" /></Col>
          <Col><img src="" alt="Gallery 5" className="gallery-img" /></Col>
          <Col><img src="" alt="Gallery 6" className="gallery-img" /></Col>
        </Row>

        {/* Row 3 */}
        <Row className="mb-4">
          <Col><img src="" alt="Gallery 7" className="gallery-img" /></Col>
          <Col><img src="" alt="Gallery 8" className="gallery-img" /></Col>
          <Col><img src="" alt="Gallery 9" className="gallery-img" /></Col>
        </Row>

        {/* Row 4 */}
        <Row className="mb-4">
          <Col><img src="" alt="Gallery 10" className="gallery-img" /></Col>
          <Col><img src="" alt="Gallery 11" className="gallery-img" /></Col>
          <Col><img src="" alt="Gallery 12" className="gallery-img" /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallerypage;
