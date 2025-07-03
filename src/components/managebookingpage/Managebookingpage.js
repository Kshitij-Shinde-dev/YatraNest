import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Form, Badge } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const [search, setSearch] = useState('');

  const filteredBookings = sampleBookings.filter(b =>
    b.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownloadPDF = (booking) => {
  const doc = new jsPDF('p', 'mm', 'a4');

  // Header
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('E-Reservation Ticket', 105, 15, { align: 'center' });

  // Ticket Info
  let y = 25;
  const details = [
    [`Transaction Date & Time:`, new Date().toLocaleString()],
    [`Bus Service No.:`, booking.id],
    [`Passenger Boarding Point:`, booking.from],
    [`Date of Journey:`, booking.date],
    [`Approx. Boarding Time:`, booking.time],
    [`Booking Mode:`, 'Online'],
    [`Transaction ID:`, `TXN${booking.id}`],
    [`Bus Service Name:`, 'YatraNest Bus'],
    [`Bus Service Type:`, 'EXPRESS'],
    [`Passenger Alighting Point:`, booking.to],
    [`Departure Time from Origin:`, booking.time],
    [`No. of Seats:`, '1'],
    [`Depot Name:`, 'Pune']
  ];

  doc.setFontSize(10);
  details.forEach(([label, value]) => {
    doc.text(`${label}`, 15, y);
    doc.text(`${value}`, 90, y);
    y += 6;
  });

  // Route section
  y += 4;
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text(`${booking.from} TO ${booking.to}`.toUpperCase(), 105, y, { align: 'center' });
  doc.setFont(undefined, 'normal');
  y += 10;

  // Passenger Table
  doc.autoTable({
    startY: y,
    head: [['Name', 'Age', 'Type', 'Sex', 'Seat No', 'Seat Status']],
    body: [[booking.name, '21', 'Adult', 'M', '25', 'Confirmed']],
    styles: { fontSize: 10 },
    theme: 'grid',
    headStyles: { fillColor: [200, 200, 200] }
  });

  y = doc.lastAutoTable.finalY + 10;

  // Fare Breakdown Table
  doc.autoTable({
    startY: y,
    head: [['Fare Component', 'Amount (₹)']],
    body: [
      ['Basic Fare', '321.60'],
      ['ASN', '1.00'],
      ['Reservation', '5.00'],
      ['Rounding', '0.40'],
      [{ content: 'Total Ticket Amount', styles: { fontStyle: 'bold' } }, '328.00']
    ],
    styles: { fontSize: 10 },
    theme: 'grid',
    headStyles: { fillColor: [220, 220, 220] }
  });

  y = doc.lastAutoTable.finalY + 10;

  // Important Notes
  doc.setFontSize(9);
  doc.text('Important:', 15, y);
  y += 5;
  const instructions = [
    '1) This E-Ticket is not transferable. Carry photo ID (Aadhaar, PAN, etc).',
    '2) Senior Citizens must carry valid age proof.',
    '3) Without valid ID, concessional ticket becomes invalid.',
    '4) Corporation may change/cancel the bus service mentioned.',
    '5) Fare difference is applicable on fare revision.',
    '6) E-Ticket cancellations allowed before 4 hours of departure:',
    '   • 10% deduction if cancelled ≥ 24 hrs before departure.',
    '   • 25% deduction if cancelled ≥ 12 hrs before departure.',
    '   • 50% deduction if cancelled ≥ 4 hrs before departure.',
    '   * Reservation & convenience charges non-refundable.'
  ];
  instructions.forEach((line, i) => {
    doc.text(line, 15, y + i * 5);
  });

  y += instructions.length * 5 + 5;
  doc.setFontSize(9);
  doc.text('Wish You Happy Journey', 105, y, { align: 'center' });
  y += 5;
  doc.text('Visit us @ www.YatraNest.com | Support: support@yatranest.com', 105, y, { align: 'center' });

  // Save file
  doc.save(`Ticket_${booking.id}.pdf`);
};


  return (
    <div className="manage-container">
    <Container className="py-5">
      <Card>
      <h2 className="head-manage text-center">Manage Your Bookings</h2>

      <Form.Control
        type="text"
        placeholder="Search by Booking ID..."
        className="mb-4 mx-auto search-ticket"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        {filteredBookings.map((booking) => (
          <Col xs={12} sm={12} md={6} lg={4} key={booking.id}>
            <Card className="mb-4 shadow-sm ticket-card">
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
      </Card>
    </Container>
    </div>
  );
}

export default Managebookingpage;
