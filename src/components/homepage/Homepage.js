import React, { useState,useEffect } from "react";
import "./Homepage.css";
import Card from "react-bootstrap/Card";
import { Table, Row, Col } from "react-bootstrap";
import { IoNotifications, IoBook } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiPillow, GiFlexibleLamp } from "react-icons/gi";
import { TiBatteryCharge } from "react-icons/ti";
import Informationpage from "../informationpage/Informationpage";
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Homepage() {
  const [activeTab, setActiveTab] = useState("booking");
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [journeyDate, setJourneyDate] = useState(new Date().toISOString().split("T")[0]);

  const cityOptions = [
    { value: 'Nashik', label: 'Nashik' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Shirdi', label: 'Shirdi' },
    { value: 'Shrirampur', label: 'Shrirampur' },
    { value: 'Solapur', label: 'Solapur' },
  ];

  const handleSearch = () => {
    if (!fromCity || !toCity || !journeyDate) {
      toast.error("Please fill all fields before proceeding.");
      return;
    }
    if (fromCity.value.trim() === toCity.value.trim()) {
      toast.warn("Pickup and dropoff points cannot be the same.");
      return;
    }

    window.location.href = '/Selectberthpage';
  };
  useEffect(() => {
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = () => {
    window.history.go(1); // disable back
  };
  return () => window.onpopstate = null;
}, []);

  const handleExchange=()=>{
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  }

  const renderSection = () => {
    switch (activeTab) {
      case "booking":
        return (
          <div className="form-section">
            <div className="form-group">
              <label>From</label>
              <Select
                options={cityOptions}
                placeholder="Select departure city"
                value={fromCity}
                onChange={setFromCity}
              />
            </div>

            <div className="exchange-icon" onClick={handleExchange}>⇄</div>

            <div className="form-group">
              <label>To</label>
              <Select
                options={cityOptions}
                placeholder="Select destination city"
                value={toCity}
                onChange={setToCity}
              />
            </div>

            <div className="date-select">
              <label>Date</label>
              <input
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div className="search-button-div">
              <button className="search-button" onClick={handleSearch}>
                SEARCH
              </button>
            </div>
          </div>
        );

      case "hire":
        return (
          <div className="form-section">
            <div className="form-group">
              <label>City of Hire eg: Bangalore</label><br />
              <input type="text" placeholder="Bangalore" required />
            </div>
            <div className="form-group">
              <label>Starting Point eg: Railway station</label>
              <input type="text" placeholder="Railway Station" required />
            </div>
            <div className="form-group">
              <label>Destination eg: Airport/Pune</label><br />
              <input type="text" placeholder="Airport/Pune" required />
            </div>
            <button className="hire-button mx-auto d-block">HIRE BUSES</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="background">
        <div className="bus-booking">
          <Card className="card-booking mt-0">
            <div className="header1 mb-3">
              <div
                className={`tab ${activeTab === "booking" ? "active" : ""}`}
                onClick={() => setActiveTab("booking")}
              >
                Bus Booking
              </div>
              <div
                className={`tab ${activeTab === "hire" ? "active" : ""}`}
                onClick={() => setActiveTab("hire")}
              >
                Bus Hire
              </div>
            </div>
            {renderSection()}
          </Card>
        </div>
        {/* Notification / Offers / Top Destinations */}
        <div className="d-flex justify-content-center mt-5">
          <Row>
            <Col>
              <Card className="align mx-auto my-3">
                <Card.Body>
                  <Card.Title><IoNotifications size={25} color="red" /> Notification</Card.Title>
                  <hr />
                  <Card.Text>
                    <ul>
                      <li>Multiple telephone lines for ticket enquiries</li>
                      <li>Professionally managed staff and Convenient office locations</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="align mx-auto my-3">
                <Card.Body>
                  <Card.Title><BiSolidOffer size={25} color="#28C941" /> Ongoing Offers</Card.Title>
                  <hr />
                  <Card.Text>
                    10% discount Offer - Get 10% Off on booking
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="align mx-auto my-3">
                <Card.Body>
                  <Card.Title><FaMapLocationDot size={25} color="#4B0082" /> Top Destinations</Card.Title>
                  <hr />
                  <Card.Text>
                    <ul>
                      <li>Pune - Nashik</li>
                      <li>Pune - Shrirampur</li>
                      <li>Pune - Solapur</li>
                      <li>Pune - Mumbai</li>
                      <li>Pune - Shirdi</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Amenities */}
        <div className="facility-div">
          <Row className="facility-header">Amenities</Row>
          <Row>
            <Col>
              <Card className="facility-card mt-2 bg-light">
                <Card.Body>
                  <Card.Title className="text-center"><FaWifi size={30} color="#00BFFF" /></Card.Title>
                  <hr />
                  <Card.Text className="card-facility">Wifi</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="facility-card mt-2 bg-light">
                <Card.Body>
                  <Card.Title className="text-center"><FaBottleWater size={30} color="#708090" /></Card.Title>
                  <hr />
                  <Card.Text className="card-facility">Water Bottle</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="facility-card mt-2 bg-light">
                <Card.Body>
                  <Card.Title className="text-center"><GiPillow size={30} color="#D8BFD8" /></Card.Title>
                  <hr />
                  <Card.Text className="card-facility">Pillows</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="facility-card mt-2 bg-light">
                <Card.Body>
                  <Card.Title className="text-center"><TiBatteryCharge size={30} color="#28CD41" /></Card.Title>
                  <hr />
                  <Card.Text className="card-facility">Charger Point</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="facility-card mt-2 bg-light">
                <Card.Body>
                  <Card.Title className="text-center"><IoBook size={30} color="#8B4513" /></Card.Title>
                  <hr />
                  <Card.Text className="card-facility">Novel</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="facility-card mt-2 bg-light">
                <Card.Body>
                  <Card.Title className="text-center"><GiFlexibleLamp size={30} color="#FFD700" /></Card.Title>
                  <hr />
                  <Card.Text className="card-facility">Reading Lamp</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Informationpage />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default Homepage;
