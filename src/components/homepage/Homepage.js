import React, { useState } from "react";
import "./Homepage.css";
import Card from "react-bootstrap/Card";
import {  Row, Col } from "react-bootstrap";
import { IoNotifications } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
function Homepage() {
  const [activeTab, setActiveTab] = useState("booking");

  const renderSection = () => {
    switch (activeTab) {
      case "booking":
        return (
          <div className="form-section">
            <div className="form-group">
              <label>From</label>
              <select>
                <option>Nashik</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
            </div>

            <div className="exchange-icon">⇄</div>

            <div className="form-group">
              <label>To</label>
              <select>
                <option>Shirdi</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
            </div>

            <div className="form-group">
              <label>Onward</label>
              <input type="date" defaultValue="2025-06-17" />
            </div>

            <div className="form-group">
              <label>Return</label>
              <input type="date" />
            </div>

            <button className="search-button">SEARCH</button>
          </div>
        );

      case "hire":
        return (
          <div className="form-section">
            <div className="form-group">
              <label>City of Hire eg: Bangalore</label><br></br>
              <input type="text" placeholder="Bangalore" />
            </div>
            <div className="form-group">
              <label>Starting Point eg: Railway station</label>
              <input type="text" placeholder="Railway Station" />
            </div>
            <div className="form-group">
              <label>Destination eg: Airport/Pune</label><br></br>
              <input type="text" placeholder="Airport/Pune" />
            </div>
            <button className="hire-button">HIRE BUSES</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="main">
    <div className="bus-booking">
      <Card className="card-booking">
        <div className="header mb-3">
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



    <div className=" d-flex justify-content-center mt-5">
      <table>
        <Row>
          <Col>
        <Card className="align">
      <Card.Body>
        <Card.Title> <IoNotifications/>    Notification</Card.Title>
        <hr></hr>
        
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
      <Card className="align mx-3">
      <Card.Body>
        <Card.Title><BiSolidOffer /> Ongoing Offers</Card.Title>
        <hr></hr>
        
        <Card.Text>
         10% discount Offer Get 10% Off on booking
        </Card.Text>
    
      </Card.Body>
    </Card>
    </Col>

      <Col>
      <Card className="align">
      <Card.Body>
        <Card.Title> <FaMapLocationDot /> Top Destinations</Card.Title>
      <hr></hr>
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
    </table>

    </div>
    </div>
  );
}

export default Homepage;
