import React, { useState } from "react";
import "./Homepage.css";
import Card from "react-bootstrap/Card";
import { Table, Row, Col } from "react-bootstrap";
import { IoNotifications } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiPillow } from "react-icons/gi";
import { TiBatteryCharge } from "react-icons/ti";
import { IoBook } from "react-icons/io5";
import { GiFlexibleLamp } from "react-icons/gi";
import Informationpage from "../informationpage/Informationpage";
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
    <div>
    <div className="background">
    <div className="bus-booking">
      <Card className="card-booking mt-0">
        <div className="header1 mb-3 ">
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
  
    {/* <div>
      <Table>
        <Row>
          <Card>
            <Table>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row>
                 <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Table>
          </Card>
        </Row>
      </Table>
    </div> */}



    <div className=" d-flex justify-content-center mt-5">
      <table>
        <Row>
          <Col>
        <Card className="align">
      <Card.Body>
        <Card.Title> <IoNotifications size={25} color="red"/>    Notification</Card.Title>
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
        <Card.Title><BiSolidOffer size={25} color="#28C941"/> Ongoing Offers</Card.Title>
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
        <Card.Title> <FaMapLocationDot size={25} color="#4B0082"/> Top Destinations</Card.Title>
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



     <div className="facility-div">
      <Table>
        <Row  className="facility-header">Amenities</Row>
        <Row>
      <Col><Card className="facility-card mt-2 bg-light">
      <Card.Body>
          <Card.Title className="text-center"><FaWifi size={30} color="#00BFFF"/></Card.Title>
          <hr></hr>
        <Card.Text className="card-facility">
          Wifi
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

     <Col><Card className="facility-card mt-2 bg-light">
      <Card.Body>
          <Card.Title className="text-center"><FaBottleWater size={30} color="#708090"/></Card.Title>
          <hr></hr>
        <Card.Text className="card-facility">
         Water Bottle
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

     <Col><Card className="facility-card mt-2 bg-light">
      <Card.Body>
          <Card.Title className="text-center"><GiPillow size={30} color="#D8BFD8" /></Card.Title>
          <hr></hr>
        <Card.Text className="card-facility">
          Pillows
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

     <Col><Card className="facility-card mt-2 bg-light">
      <Card.Body>
          <Card.Title className="text-center"><TiBatteryCharge size={30} color="#28CD41"/></Card.Title>
          <hr></hr>
        <Card.Text className="card-facility">
         Charger Point
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

     <Col><Card className="facility-card mt-2 bg-light">
      <Card.Body>
          <Card.Title className="text-center "><IoBook size={30} color="#8B4513" /></Card.Title>
          <hr></hr>
        <Card.Text className="card-facility">
        Novel
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

     <Col><Card className="facility-card mt-2 bg-light ">
      <Card.Body>
          <Card.Title className="text-center"><GiFlexibleLamp size={30} color="#FFD700" /></Card.Title>
          <hr></hr>
        <Card.Text className="card-facility">
         Reading Lamp
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        </Row>
      </Table>
    </div>
    </div>
    <Informationpage></Informationpage>
    </div>
    
  );
}

export default Homepage;
