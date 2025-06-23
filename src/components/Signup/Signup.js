import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './signup.css'

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Store in sessionStorage
    sessionStorage.setItem('userData', JSON.stringify({
      name: formData.name,
      gender: formData.gender,
      mobile: formData.mobile,
      email: formData.email,
    }));

    setError('');
    // Redirect to homepage (e.g., "/")
    navigate('/');
  };

  return (
    <Container className="mt-5 bg">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="mb-4 text-center head-color">Sign Up</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4}>Full Name</Form.Label>
              <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4}>Gender</Form.Label>
              <Col sm={8}>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4}>Mobile Number</Form.Label>
              <Col sm={8}>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4}>Email Address</Form.Label>
              <Col sm={8}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4} >Password</Form.Label>
              <Col sm={8}>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4}>Confirm Password</Form.Label>
              <Col sm={8}>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              </Col>
            </Form.Group>
            <Button type="submit" className="signup-button">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
