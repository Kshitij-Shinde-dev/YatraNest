import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigationheader.css'

function Navigationheader() {
  return (
    <div>
      <Navbar expand="lg" className='shadow color1 sticky'>
        <Container>
          <Navbar.Brand href='/'><img src='./Images/YatraNest.png' alt='logo' className='img ms-3'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Aboutuspage" className='spacing navbg'>About&nbsp;us</Nav.Link>
            <Nav.Link href="/Cancellationpage" className='spacing navbg'>Cancellation</Nav.Link>
            <Nav.Link href='/Bookingenquirypage' className='spacing navbg'>Booking&nbsp;Enquiry</Nav.Link>
            <Nav.Link href='/Managebookingpage' className='spacing navbg'>Manage&nbsp;Booking</Nav.Link>
            <Nav.Link href='/Loginpage' className='spacing navbg'>Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationheader