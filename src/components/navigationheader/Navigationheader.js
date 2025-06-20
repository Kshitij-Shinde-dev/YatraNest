import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationheader.css';

function Navigationheader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem('userData');
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
  }, []);

  return (
    <Navbar expand="lg" className="shadow navhead" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="./Images/YatraNest-2.png" alt="YatraNest Logo" className="img spacing" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/' className='navbg spacing'>Home</Nav.Link>
            <Nav.Link href="/Bookingenquirypage" className="navbg spacing">Booking&nbsp;Enquiry</Nav.Link>
            <Nav.Link href="/Managebookingpage" className="navbg spacing">Manage&nbsp;Booking</Nav.Link>
            <Nav.Link href="/Cancellationpage" className="navbg spacing">Cancellation</Nav.Link>
            <Nav.Link href="/Aboutuspage" className="navbg spacing">About&nbsp;Us</Nav.Link>

            {/* 🔁 Conditional Login/Profile tab */}
            {user ? (
              <Nav.Link href="/Profilepage" className="navbg spacing">Profile</Nav.Link>
            ) : (
              <Nav.Link href="/Loginpage" className="navbg spacing">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationheader;
