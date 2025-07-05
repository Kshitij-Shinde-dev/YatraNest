import React, { useEffect,useState } from 'react';
import './Routepage.css';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

const routes = [
  {
    from: "Pune",
    to: "Shrirampur",
    startTime: "6:00 AM",
    endTime: "10:00 AM",
    mapLink:
    "https://www.google.com/maps/dir/Pune,+Maharashtra/Shrirampur,+Maharashtra/@18.8178047,73.9115696,9.64z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bdc8a4c0551c1f3:0x5cbde337360f776!2m2!1d74.6567407!2d19.6194767!5i2?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
    stops: ["Pune", "Wagholi", "Shikrapur", "Shirur", "Ahmadnagar","Rahuri","Shrirampur"],
  },
  {
    from: "Pune",
    to: "Solapur",
    startTime: "7:00 AM",
    endTime: "12:30 PM",
    mapLink:
      "https://www.google.com/maps/dir/Pune,+Maharashtra/Solapur,+Maharashtra/@17.7894138,75.498704,10.74z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bc5d082b54ac5d5:0x3c719de6c83710d0!2m2!1d75.9010467!2d17.6700736!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
    stops: ["Pune", "Uruli Kanchan", "Bhigwan", "Indapur","Tembhurni","Mohal","Solapur"],
  },
  {
    from: "Pune",
    to: "Mumbai",
    startTime: "8:00 AM",
    endTime: "1:00 PM",
    mapLink:
      "https://www.google.com/maps/dir/Pune,+Maharashtra/Mumbai,+Maharashtra/@18.8254174,72.7834171,8.94z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!2m2!1d72.8320729!2d18.9581934!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
   stops: ["Wakad", "Dehu Road", "Lonavala", "Khandala", "Panvel", "Vashi", "Sion", "Mumbai"]

  },
  {
    from: "Pune",
    to: "Shirdi",
    startTime: "5:30 AM",
    endTime: "10:30 AM",
    mapLink:
      "https://www.google.com/maps/dir/Pune,+Maharashtra/Shirdi,+Maharashtra/@19.1445823,74.2601408,9z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bdc5ba7461768af:0xd802d2c2943c99c!2m2!1d74.4762124!2d19.7645364!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
    stops:["Pune", "Chakan", "Rajgurunagar", "Manchar", "Narayangaon", "Alephata", "Sangamner", "Shirdi"]

  },
  {
    from: "Pune",
    to: "Nashik",
    startTime: "6:30 AM",
    endTime: "12:00 PM",
    mapLink:"https://www.google.com/maps/dir/Pune,+Maharashtra/Nashik,+Maharashtra/@19.2619654,73.6101056,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bddd290b09914b3:0xcb07845d9d28215c!2m2!1d73.7900188!2d19.9993217!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
    stops: ["Pune", "Chakan", "Rajgurunagar", "Manchar", "Narayangaon", "Alephata", "Sangamner", "Sinnar", "Nashik"],
  },
  {
    from: "Pune",
    to: "Nagpur",
    startTime: "5:00 PM",
    endTime: "8:00 AM",
    mapLink:
      "https://www.google.com/maps/dir/Pune,+Maharashtra/Nagpur,+Maharashtra/@20.2797008,71.844139,6.28z/data=!4m14!4m13!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8786239!2d18.5246091!1m5!1m1!1s0x3bd4c0a5a31faf13:0x19b37d06d0bb3e2b!2m2!1d79.0881546!2d21.1458004!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
   stops: ["Pune", "Ahmednagar", "Aurangabad", "Jalna", "Mehkar", "Karanja", "Wardha", "Nagpur"]

  },
];

function Routepage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleStops = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-route">
      <Container className="py-4">
        <h2 className="head-route text-center mb-4">Available Bus Routes</h2>

        {routes.map((route, index) => (
          <Card
            key={`${route.from}-${route.to}`}
            className="route-card shadow rounded-4 p-3 mx-auto mb-4"
            style={{ maxWidth: "900px" }}
          >
            <Card.Body>
              <Card.Title className="route-se">
                {route.from} → {route.to}
              </Card.Title>

              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <a
                href={route.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Button variant=" outline-info text-dark" className='view-button' size=""><CiLocationArrow1  size={35} /> View Route On Map</Button>
              </a>

                <Button
                  variant=""
                  className="down-arrow-button"
                  onClick={() => toggleStops(index)}
                >
                  <MdKeyboardArrowDown
                    className="down-arrow-button-icon"
                    size={25}
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                </Button>

                <Link
                  to="/Buspage"
                  state={{ from: route.from, to: route.to }}
                  className="text-decoration-none"
                >
                  <Button variant="primary" className="book-button">
                    Book Now
                  </Button>
                </Link>
              </div>

              {openIndex === index && (
                <div className="mt-3">
                  <h6>Bus Stops:</h6>
                  <ul className="mb-0 ps-4">
                    {route.stops.map((stop, i) => (
                      <li key={i}>{stop}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Routepage;
