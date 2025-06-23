import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import "./Bushirepage.css";

function Bushirepage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    hireDate: '',
    passengers: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bus hire request submitted!");
    console.log(formData); // You can send this to a backend later
  };

  return (
    <div className='main-hire'>
    <Container className="py-5">
      <Card className="shadow-lg p-4">
        <h2 className="head-hire text-center mb-4">Bus Hire Request Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter contact number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Hire</Form.Label>
                <Form.Control
                  type="date"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="text"
                  name="from"
                  placeholder="Pickup location"
                  value={formData.from}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  name="to"
                  placeholder="Destination"
                  value={formData.to}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Number of Passengers</Form.Label>
            <Form.Control
              type="number"
              name="passengers"
              placeholder="Enter number of passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Additional Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Add special requests or comments"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className='hire-button'>
              Submit Request
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
    </div>
  );
}

export default Bushirepage;
