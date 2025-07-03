import React, { useEffect } from 'react';
import './Routepage.css';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";


const routes = [
  {
    from: 'Pune',
    to: 'Shrirampur',
    startTime: '6:00 AM',
    endTime: '10:00 AM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Shrirampur,+Maharashtra/@19.0434047,73.6388866,9z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bdc8a4c0551c1f3:0x5cbde337360f776!2m2!1d74.6567407!2d19.6194767!5i2?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    from: 'Pune',
    to: 'Solapur',
    startTime: '7:00 AM',
    endTime: '12:30 PM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Solapur,+Maharashtra/@18.1003116,73.5678476,8z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bc5d082b54ac5d5:0x3c719de6c83710d0!2m2!1d75.9010467!2d17.6700736!5i2?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    from: 'Pune',
    to: 'Mumbai',
    startTime: '8:00 AM',
    endTime: '1:00 PM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Mumbai,+Maharashtra/@18.7627878,73.0256829,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!2m2!1d72.8320729!2d18.9581934!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    from: 'Pune',
    to: 'Shirdi',
    startTime: '5:30 AM',
    endTime: '10:30 AM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Shirdi,+Maharashtra/@19.1440946,73.6006444,9z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bdc5ba7461768af:0xd802d2c2943c99c!2m2!1d74.4762124!2d19.7645364!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    from: 'Pune',
    to: 'Nashik',
    startTime: '6:30 AM',
    endTime: '12:00 PM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Nashik,+Maharashtra/@19.3152524,73.6625918,8.97z/data=!4m13!4m12!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bddd290b09914b3:0xcb07845d9d28215c!2m2!1d73.7900188!2d19.9993217?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    from: 'Pune',
    to: 'Nagpur',
    startTime: '5:00 PM',
    endTime: '8:00 AM',
    mapLink: 'https://www.google.com/maps/dir/Pune,+Maharashtra/Nagpur,+Maharashtra/@19.8209399,73.8129178,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bd4c0a5a31faf13:0x19b37d06d0bb3e2b!2m2!1d79.0881546!2d21.1458004!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
];

function Routepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-route'>
    <Container className="py-4">
      <h2 className="head-route text-center mb-4">Available Bus Routes</h2>

      {routes.map((route, index) => (
        <Card key={index} className="route-card shadow rounded-4 p-3 mx-auto mb-4" style={{ maxWidth: '900px' }}>
          <Card.Body>
            <Card.Title className="route-se">{route.from} → {route.to}</Card.Title>
        
            <div className="d-flex justify-content-between">
              <a
                href={route.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Button variant=" outline-info text-dark" className='view-button' size=""><CiLocationArrow1  size={35} /> View Route On Map</Button>
              </a>

                 {/* ⬇️ Down Arrow Button */}
          <Button variant=" " className="down-arrow-button">
            <MdKeyboardArrowDown className="down-arrow-button-icon" color='' size={25} />
          </Button>
              <Link to={'/Booknow'} state={{ from: route.from, to: route.to }} className='text-decoration-none'>
              <Button variant=" primary"  className='book-button text-decoration-none' size="">Book Now</Button></Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
    </div>
  );
}

export default Routepage;  