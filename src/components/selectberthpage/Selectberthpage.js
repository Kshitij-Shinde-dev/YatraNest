import React, { useState } from 'react';
import './Selectberthpage.css';
import { Button, Card, Col, Container, Row, ListGroup } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

function Selectberthpage() {
  const navigate=useNavigate();

  const [seats, setSeats] = useState([
    { id: 1, type: 'available', selected: false ,price: '₹1100'},
    { id: 2, type: 'available', selected: false ,price: '₹1100'},
    { id: 3, type: 'available', selected: false ,price: '₹1100'},
    { id: 4, type: 'booked', selected: false ,price: '₹1100'},
    { id: 5, type: 'male', selected: false ,price: '₹1100'},
    { id: 6, type: 'male', selected: false ,price: '₹1100'},
    { id: 7, type: 'female', selected: false ,price: '₹1100'},
    { id: 8, type: 'booked', selected: false ,price: '₹1100'},
    { id: 9, type: 'male', selected: false ,price: '₹1100'},
    { id: 10, type: 'male', selected: false ,price: '₹1100'},
    { id: 11, type: 'female', selected: false ,price: '₹1100'},
    { id: 12, type: 'female', selected: false ,price: '₹1100'},
    { id: 13, type: 'booked', selected: false ,price: '₹1100'},
    { id: 14, type: 'male', selected: false ,price: '₹1100'},
    { id: 15, type: 'booked', selected: false ,price: '₹1100'},
    { id: 16, type: 'female', selected: false ,price: '₹1100'},
    { id: 17, type: 'available', selected: false ,price: '₹1100'},
    { id: 18, type: 'booked', selected: false ,price: '₹1100'},
    { id: 19, type: 'available', selected: false ,price: '₹1100'},
    { id: 20, type: 'available', selected: false ,price: '₹1100'},
    { id: 21, type: 'available', selected: false ,price: '₹1100'},
    { id: 22, type: 'booked', selected: false ,price: '₹1100'},
    { id: 23, type: 'available', selected: false ,price: '₹1100'},
    { id: 24, type: 'available', selected: false ,price: '₹1100'},
    { id: 25, type: 'available', selected: false ,price: '₹1100'},
    { id: 26, type: 'booked', selected: false ,price: '₹1100'},
    { id: 27, type: 'available', selected: false ,price: '₹1100'},
    { id: 28, type: 'available', selected: false ,price: '₹1100'},
  ]);

  const getSeatImage = (type, selected) => {
    if (selected) return '/Images/seats/seater_selected.svg';
    switch (type) {
      case 'male':
        return '/Images/seats/seater_male_available.svg';
      case 'female':
        return '/Images/seats/seater_female_available.svg';
      case 'booked':
        return '/Images/seats/seater_booked.svg';
      default:
        return '/Images/seats/seater_available.svg';
    }
  };

  const toggleSeat = (id) => {
    const updatedSeats = seats.map((seat) => {
    if (seat.id === id) {
      if (seat.type === 'booked') return seat;
      return { ...seat, selected: !seat.selected }; 
    }
    return seat;
  });
    setSeats(updatedSeats);
  };

  const handleCost = () => {
  return seats.reduce((total, seat) => {
    if (seat.selected) {
      const numericPrice = parseInt(seat.price.replace('₹', ''));
      return total + numericPrice;
    }
    return total;
    }, 0);
  };

  const handleBook=()=>{
    if (!pick || !drop) {
      alert("Please fill all fields before proceeding.");
      return;
    }
    navigate('/');
  }

  const selectedSeats = seats
  .filter((seat) => seat.selected)
  .map((seat) => seat.id)
  .join(', ');

  // Group seats into rows of 4
  const seatGroups = [];
  for (let i = 0; i < seats.length; i += 4) {
    seatGroups.push(seats.slice(i, i + 4));
  }

    const [pick, setPickup] = useState(null);
    const [drop, setDropoff] = useState(null);

    const pickupoptions = [
      { value: 'Nashik', label: 'Nashik' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Shirdi', label: 'Shirdi' },
    { value: 'Shrirampur', label: 'Shrirampur' },
    { value: 'Solapur', label: 'Solapur' },
    ];
    const dropoffoptions = [
      { value: 'Nashik', label: 'Nashik' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Shirdi', label: 'Shirdi' },
    { value: 'Shrirampur', label: 'Shrirampur' },
    { value: 'Solapur', label: 'Solapur' },
    ];

  return (
    <div>
      <Row>
      <Col>
      <Row className='mx-4 my-4'>
        <Container>
          <Card className="detail-card shadow border-0">
            <Card.Header as="h5" className="detail-header text-center">
              Bus Details
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Bus Number:</strong> XYZ1234</ListGroup.Item>
              <ListGroup.Item><strong>Driver Name:</strong> ABC</ListGroup.Item>
              <ListGroup.Item><strong>Co-Driver Name:</strong> PQR</ListGroup.Item>
              <ListGroup.Item><strong>Start Point:</strong> first element of pickup-points</ListGroup.Item>
              <ListGroup.Item><strong>End Point:</strong> last  element of dropoff-points</ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
      </Row>
      <Row>
        <Container>
        <Card className='Pick-drop-card shadow mx-4 my-4'>
          <Card.Header as="h5" className='text-center pick-and-drop-header'>Select pickup and dropoff points</Card.Header>
          <Card.Body>
            <div className="form-group2">
              <label>From</label>
              <Select
                options={pickupoptions}
                placeholder="Select Pickup-point"
                value={pick}
                onChange={setPickup}
                required
              />
            </div>
            <div className="form-group2">
              <label>To</label>
              <Select
                options={dropoffoptions}
                placeholder="Select dropoff-point"
                value={drop}
                onChange={setDropoff}
                required
              />
              </div>
          </Card.Body>
        </Card>
        </Container>
        </Row>
        <Row>
          <Row className="justify-content-center my-4">
            <Col xs="auto"><img src="/Images/seats/seater_available.svg" className="legend-icon" /> Available</Col>
            <Col xs="auto"><img src="/Images/seats/seater_male_available.svg" className="legend-icon" /> Reserved Male</Col>
            <Col xs="auto"><img src="/Images/seats/seater_female_available.svg" className="legend-icon" /> Reserved Female</Col>
            <Col xs="auto"><img src="/Images/seats/seater_booked.svg" className="legend-icon" /> Booked</Col>
            <Col xs="auto"><img src="/Images/seats/seater_selected.svg" className="legend-icon" /> Selected</Col>
          </Row>
        </Row>
      </Col>
      <Col md={4}>
      <Card className='seat-card mx-4 my-4'>
        <Card.Body>
          <Card.Img
            src='/Images/seats/Steeringwheel.png'
            className='Steering'
          />
        </Card.Body>

        {seatGroups.map((group, rowIndex) => (
          <Row key={rowIndex} className='align-items-center'>
            <Col xs={1}></Col>
            {/* Left two seats */}
            {group.slice(0, 2).map((seat) => (

              <Col xs={2} key={seat.id} className='text-center'>
                <Card.Img
                  src={getSeatImage(seat.type, seat.selected)}
                  className='St my-2'
                  onClick={() => toggleSeat(seat.id)}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            ))}

            {/* Aisle space */}
            <Col xs={2}></Col>

            {/* Right two seats */}
            {group.slice(2, 4).map((seat) => (
              <Col xs={2} key={seat.id} className='text-center'>
                <Card.Img
                  src={getSeatImage(seat.type, seat.selected)}
                  className='St my-2'
                  onClick={() => toggleSeat(seat.id)}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            ))}
          </Row>
        ))}
        <Row className="justify-content-center m-3">
          <Col xs="auto">
            <span className='fw-bold'>Selected Seats: </span> {selectedSeats || "None"}
          </Col>
          <Col xs="auto">
            <span className='fw-bold'>Total cost: ₹</span>{handleCost()}
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button type='submit' onClick={handleBook} className='Book-selected'>Book Selected</Button>
        </Row>
      </Card>
      </Col>
      </Row>
    </div>
  );
}

export default Selectberthpage;
