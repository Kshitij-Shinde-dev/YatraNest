import React from 'react';
import './Informationpage.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


function Informationpage() {
  return (
    <div className='information-main mt-3'>
      <Container>
        <Row>
          <Col md={3}>
            <h5 className='info-head'>Company</h5>
            <ul className='list-unstyled'>
              <li><Link to={'/Aboutuspage'} className='text-decoration-none text-black'>About Us</Link></li>
              <li>Bus Hire</li>
              <li > <Link to={'/Gallerypage'} className='text-decoration-none text-black'>Gallery</Link></li>
              <li> <Link to={'/Routepage'} className='text-decoration-none text-black'>Routes</Link></li>
            </ul>
          </Col>
          <Col  md={3}>
            <h5 className='info-head'>Info</h5>
            <ul  className='list-unstyled'>
              <li><Link to={'/Termpage'} className='text-decoration-none text-black'>Terms and Conditions</Link></li>
              <li><Link to={'/Policypage'} className='text-decoration-none text-black'>Privacy Policy</Link></li>
              <li><Link to={'/Contactuspage'} className='text-decoration-none text-black'>Contact us</Link></li>
          
              
            </ul>
          </Col>
          <Col  md={4}>
            <h5 className='info-head'>YatraNest</h5>
           <p>YatraNest is a Pune-based travel business located in Shivajinagar, established in 2025 with the mission to provide fast, reliable, and...<Link to='/Aboutuspage' className='text-warning no-underline'>More</Link></p>
          </Col>
          <Col  md={2}>
            <h5 className='info-head'>Corporate Office</h5>
            <ul  className='list-unstyled'>
              <li>Pune</li>
              <li>Shivajinagar</li>
              <li>Pincode-411003</li>
            </ul>
          </Col>
        </Row>
        <Row>
          
          <Col className=''>
          <a href="https://www.vtechacademy.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook  size={35} color='blue' className="me-3"/>  
          <FaInstagram size={35} color='#E1306C' />
          </a>
          </Col>
        </Row>
      </Container>
      <div className='copyright d-flex justify-content-center mt-3'>
        <>©2025, All Rights Reserved,<Link className='info-copy mx-2 me-2'> YatraNest</Link> | Powered by IRTCM India Private Limited</>
      </div>
    </div>
  );
}

export default Informationpage;
