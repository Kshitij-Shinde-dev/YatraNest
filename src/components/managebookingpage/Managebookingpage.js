import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form, Badge } from 'react-bootstrap';
import jsPDF from 'jspdf';
import './Managebookingpage.css';

const sampleBookings = [
  {
    id: 'YN123456',
    name: 'Saurabh Nirmal',
    from: 'Pune',
    to: 'Solapur',
    date: '2025-07-01',
    time: '7:00 AM',
    status: 'Confirmed'
  },
  {
    id: 'YN654321',
    name: 'Ravi Mehta',
    from: 'Mumbai',
    to: 'Shrirampur',
    date: '2025-06-20',
    time: '9:00 PM',
    status: 'Cancelled'
  }
];

function Managebookingpage() {
  const [search, setSearch] = useState('');

  const filteredBookings = sampleBookings.filter(b =>
    b.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownloadPDF = (booking) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("YatraNest Bus Ticket", 20, 20);

    doc.setFontSize(12);
    doc.text(`Booking ID: ${booking.id}`, 20, 40);
    doc.text(`Name: ${booking.name}`, 20, 50);
    doc.text(`From: ${booking.from}`, 20, 60);
    doc.text(`To: ${booking.to}`, 20, 70);
    doc.text(`Date: ${booking.date}`, 20, 80);
    doc.text(`Time: ${booking.time}`, 20, 90);
    doc.text(`Status: ${booking.status}`, 20, 100);

    doc.save(`Ticket_${booking.id}.pdf`);
  };

  return (
    <Container className="py-5">
      <h2 className="head-manage text-center mb-4">Manage Your Bookings</h2>

      <Form.Control
        type="text"
        placeholder="Search by Booking ID..."
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        {filteredBookings.map((booking) => (
          <Col xs={12} sm={12} md={6} lg={4} key={booking.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>
                  Booking ID: <strong>{booking.id}</strong>
                </Card.Title>
                <Card.Text>
                  <strong>Name:</strong> {booking.name}<br />
                  <strong>From:</strong> {booking.from}<br />
                  <strong>To:</strong> {booking.to}<br />
                  <strong>Date:</strong> {new Date(booking.date).toLocaleDateString('en-IN', {
                    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                  })}<br />
                  <strong>Time:</strong> {booking.time}<br />
                  <strong>Status:</strong>{' '}
                  <Badge bg={
                    booking.status === 'Confirmed' ? 'success' :
                    booking.status === 'Cancelled' ? 'danger' :
                    'warning'
                  }>
                    {booking.status}
                  </Badge>
                </Card.Text>

                {booking.status !== 'Cancelled' && (
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleDownloadPDF(booking)}
                    >
                      Download Ticket
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to cancel this booking?')) {
                          alert(`Booking ${booking.id} cancelled (demo only)`);
                        }
                      }}
                    >
                      Cancel Booking
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredBookings.length === 0 && (
        <p className="text-center text-muted">No bookings found.</p>
      )}
    </Container>
  );
}

export default Managebookingpage;
