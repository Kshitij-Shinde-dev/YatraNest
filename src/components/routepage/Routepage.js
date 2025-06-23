import React from 'react';
import './Routepage.css';
import { Card, Button, Container } from 'react-bootstrap';

// Base routes: Pune to other cities
const baseRoutes = [
  {
    from: 'Pune',
    to: 'Shrirampur',
    startTime: '6:00 AM',
    endTime: '10:00 AM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Shrirampur,+Maharashtra'
  },
  {
    from: 'Pune',
    to: 'Solapur',
    startTime: '7:00 AM',
    endTime: '12:30 PM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Solapur,+Maharashtra'
  },
  {
    from: 'Pune',
    to: 'Mumbai',
    startTime: '8:00 AM',
    endTime: '1:00 PM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Mumbai,+Maharashtra'
  },
  {
    from: 'Pune',
    to: 'Shirdi',
    startTime: '5:30 AM',
    endTime: '10:30 AM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Shirdi,+Maharashtra'
  },
  {
    from: 'Pune',
    to: 'Nashik',
    startTime: '6:30 AM',
    endTime: '12:00 PM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Nashik,+Maharashtra'
  }
];

// Generate return routes by reversing from and to
const returnRoutes = baseRoutes.map(route => ({
  from: route.to,
  to: route.from,
  startTime: '5:00 PM', // Example default return time
  endTime: '9:00 PM',
  mapLink: route.mapLink.replace(
    /\/dir\/([^/]+)\/([^/]+)/,
    `/dir/${route.to.replace(/ /g, '+')},+Maharashtra/${route.from.replace(/ /g, '+')},+Maharashtra`
  )
}));

// Final route list: original + return
const routes = [...baseRoutes, ...returnRoutes];

function Routepage() {
  return (
    <div className='bg-route'>
      <Container className="py-4">
        <h2 className="head-route text-center mb-4">Available Bus Routes</h2>

        {routes.map((route, index) => (
          <Card
            key={index}
            className="route-card shadow rounded-4 p-3 mx-auto mb-4"
            style={{ maxWidth: '900px' }}
          >
            <Card.Body>
              <Card.Title className="route-se">{route.from} → {route.to}</Card.Title>
              <Card.Text>
                <strong>Start Time:</strong> {route.startTime}<br />
                <strong>End Time:</strong> {route.endTime}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <a
                  href={route.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Map from ${route.from} to ${route.to}`}
                  className="text-decoration-none"
                >
                 <Button variant=" outline-info text-dark" className='view-button' size="">View Route</Button>
              </a>
              <Button variant=" primary"  className='book-button' size="">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Routepage;
