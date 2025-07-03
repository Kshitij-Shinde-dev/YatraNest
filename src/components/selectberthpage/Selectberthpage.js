import React, { useState } from 'react';
import './Selectberthpage.css';
import { Card, Col, Row } from 'react-bootstrap';

function Selectberthpage() {
  const [seats, setSeats] = useState([
    { id: 1, type: 'available', selected: false },
    { id: 2, type: 'available', selected: false },
    { id: 3, type: 'available', selected: false },
    { id: 4, type: 'booked', selected: false },
    { id: 5, type: 'male', selected: false },
    { id: 6, type: 'male', selected: false },
    { id: 7, type: 'female', selected: false },
    { id: 8, type: 'booked', selected: false },
    { id: 9, type: 'male', selected: false },
    { id: 10, type: 'male', selected: false },
    { id: 11, type: 'female', selected: false },
    { id: 12, type: 'female', selected: false },
    { id: 13, type: 'booked', selected: false },
    { id: 14, type: 'male', selected: false },
    { id: 15, type: 'booked', selected: false },
    { id: 16, type: 'female', selected: false },
    { id: 17, type: 'available', selected: false },
    { id: 18, type: 'booked', selected: false },
    { id: 19, type: 'available', selected: false },
    { id: 20, type: 'available', selected: false },
    { id: 21, type: 'available', selected: false },
    { id: 22, type: 'booked', selected: false },
    { id: 23, type: 'available', selected: false },
    { id: 24, type: 'available', selected: false },
    { id: 25, type: 'available', selected: false },
    { id: 26, type: 'booked', selected: false },
    { id: 27, type: 'available', selected: false },
    { id: 28, type: 'available', selected: false },
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

  // Group seats into rows of 4
  const seatGroups = [];
  for (let i = 0; i < seats.length; i += 4) {
    seatGroups.push(seats.slice(i, i + 4));
  }

  return (
    <div>
      <Card className='seat-card'>
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
      </Card>
    </div>
  );
}

export default Selectberthpage;
