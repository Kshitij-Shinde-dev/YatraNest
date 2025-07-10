import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Card, Container, Button, Row, Col, Form, Offcanvas } from "react-bootstrap";
import {  FaBusAlt ,FaSnowflake, FaBed, FaChair, FaRegSmile } from "react-icons/fa";
import "./Buspage.css";

function Buspage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { from, to, date } = location.state || {};
  const selectedDate = date || new Date().toISOString().split("T")[0];

  const [showFilter, setShowFilter] = useState(false);
  const [selectedBusType, setSelectedBusType] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const busTypes = [
    { label: "AC Sleeper", value: "acSleeper", cost: 180, icon: <FaSnowflake /> },
    { label: "Non-AC Sleeper", value: "nonAcSleeper", cost: 130, icon: <FaBed /> },
    { label: "AC Seater", value: "acSeater", cost: 100, icon: <FaChair /> },
    { label: "Non-AC Seater", value: "nonAcSeater", cost: 50, icon: <FaRegSmile /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allBuses = [
    { from: "Pune", to: "Shrirampur", departure: "5:00 AM", arrival: "9:00 AM", type: "acSeater", date: "2025-07-08" },
    { from: "Pune", to: "Shrirampur", departure: "6:00 AM", arrival: "10:00 AM", type: "acSleeper", date: "2025-07-08" },
    { from: "Pune", to: "Shrirampur", departure: "7:00 AM", arrival: "11:00 AM", type: "nonAcSeater", date: "2025-07-08" },
    { from: "Pune", to: "Shrirampur", departure: "8:00 AM", arrival: "12:00 PM", type: "nonAcSleeper", date: "2025-07-08" },
    { from: "Shrirampur", to: "Pune", departure: "5:30 AM", arrival: "9:30 AM", type: "acSleeper", date: "2025-07-08" },
    { from: "Shrirampur", to: "Pune", departure: "6:30 AM", arrival: "10:30 AM", type: "nonAcSeater", date: "2025-07-08" },
    { from: "Shrirampur", to: "Pune", departure: "7:30 AM", arrival: "11:30 AM", type: "acSeater", date: "2025-07-08" },
    { from: "Pune", to: "Shrirampur", departure: "6:00 AM", arrival: "10:00 AM", type: "acSeater", date: "2025-07-15" },
    { from: "Pune", to: "Shrirampur", departure: "9:00 AM", arrival: "1:00 PM", type: "nonAcSleeper", date: "2025-07-15" },
    { from: "Shrirampur", to: "Pune", departure: "2:30 PM", arrival: "6:30 PM", type: "acSleeper", date: "2025-07-15" },
    { from: "Pune", to: "Shrirampur", departure: "10:00 AM", arrival: "2:00 PM", type: "acSleeper", date: "2025-07-20" },
    { from: "Shrirampur", to: "Pune", departure: "1:00 PM", arrival: "5:00 PM", type: "nonAcSeater", date: "2025-07-20" },
    { from: "Pune", to: "Shrirampur", departure: "7:30 AM", arrival: "11:30 AM", type: "nonAcSeater", date: "2025-07-25" },
    { from: "Shrirampur", to: "Pune", departure: "11:00 AM", arrival: "3:00 PM", type: "acSeater", date: "2025-07-25" },
    { from: "Pune", to: "Shrirampur", departure: "4:00 PM", arrival: "8:00 PM", type: "acSleeper", date: "2025-07-30" },
    { from: "Shrirampur", to: "Pune", departure: "6:30 AM", arrival: "10:30 AM", type: "nonAcSleeper", date: "2025-07-30" },
    { from: "Shrirampur", to: "Pune", departure: "9:30 PM", arrival: "1:30 AM", type: "acSeater", date: "2025-07-30" },
    { from: "Pune", to: "Shrirampur", departure: "9:00 AM", arrival: "1:00 PM", type: "acSeater", date: "2025-07-09" },
    { from: "Pune", to: "Shrirampur", departure: "10:00 AM", arrival: "2:00 PM", type: "acSleeper", date: "2025-07-09" },
    { from: "Shrirampur", to: "Pune", departure: "8:30 AM", arrival: "12:30 PM", type: "nonAcSleeper", date: "2025-07-09" },
    { from: "Shrirampur", to: "Pune", departure: "9:30 AM", arrival: "1:30 PM", type: "acSeater", date: "2025-07-09" },
    { from: "Shrirampur", to: "Pune", departure: "10:30 AM", arrival: "2:30 PM", type: "acSleeper", date: "2025-07-09" },
  ];

  const baseFare = 700;

  const filteredBuses = allBuses
    .filter(
      (bus) =>
        bus.from === from &&
        bus.to === to &&
        bus.date === selectedDate &&
        (!selectedBusType || bus.type === selectedBusType)
    )
    .map((bus) => {
      const typeDetail = busTypes.find((type) => type.value === bus.type);
      return { ...bus, fare: baseFare + (typeDetail?.cost || 0) };
    });

  const sortedBuses = [...filteredBuses].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.fare - b.fare;
    if (sortOrder === "highToLow") return b.fare - a.fare;
    return 0;
  });

  if (!from || !to) {
    return (
      <Container className="py-4 text-center">
        <h2>Route not found!</h2>
        <Button onClick={() => navigate("/")}>Back to Homepage</Button>
      </Container>
    );
  }

  return (
    <div className="bg-route">
      <Container className="py-4">
        <h2 className="text-center head-bus-route mb-2 text-primary">
          {from} → {to}
        </h2>
        <h5 className="text-center mb-4 text-muted">
          Date: <strong>{selectedDate}</strong>
        </h5>

        {/* Filter + Sort */}
        {sortedBuses.length > 0 && (
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
            <Button className="filter-button-orange" onClick={() => setShowFilter(true)}>
              Filter Options
            </Button>

            <Form.Group className="mb-0" style={{ maxWidth: "300px", width: "100%" }}>
              <Form.Label>Sort by Fare</Form.Label>
              <Form.Select
                className="custom-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">None</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </Form.Select>
            </Form.Group>
          </div>
        )}

        {/* Filter Offcanvas */}
        <Offcanvas show={showFilter} onHide={() => setShowFilter(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Bus Type Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              {busTypes.map((type) => (
                <div key={type.value} className="custom-radio mb-2">
                  <input
                    type="radio"
                    id={type.value}
                    name="busType"
                    value={type.value}
                    checked={selectedBusType === type.value}
                    onChange={(e) => setSelectedBusType(e.target.value)}
                  />
                  <label htmlFor={type.value}>
                    <span className="icon-bus">
                      {type.icon}
                    </span>
                    {type.label}
                  </label>
                </div>
              ))}
              <div className="custom-radio mt-3">
                <input
                  type="radio"
                  id="showAll"
                  name="busType"
                  value=""
                  checked={selectedBusType === ""}
                  onChange={() => setSelectedBusType("")}
                />
                <label htmlFor="showAll">
               <span className="icon-bus">
              <FaBusAlt />
    </span>
    Show All
  </label>
              </div>
              <hr />
              <Button variant="secondary" onClick={() => setSelectedBusType("")} className="mt-2">
                Clear Filter
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Bus Cards */}
        <Row>
          <Col>
            {sortedBuses.length === 0 ? (
              <p className="text-center text-muted">No buses available for selected filters.</p>
            ) : (
              sortedBuses.map((bus, index) => (
                <Card key={index} className="mb-4 shadow rounded-3 p-3 buspage-card">
                  <Card.Body>
                    <Row>
                      <Col>
                        <p><strong>Departure:</strong> {bus.departure}</p>
                        <p><strong>Arrival:</strong> {bus.arrival}</p>
                        <p><strong>Type:</strong> {busTypes.find(t => t.value === bus.type)?.label}</p>
                        <p><strong>Date:</strong> {bus.date}</p>
                      </Col>
                      <Col xs="auto" className="d-flex flex-column justify-content-between align-items-end">
                        <p className="text-success fw-semibold mb-2">₹{bus.fare}</p>
                        <Link
                          to="/Selectberthpage"
                          state={{
                            from,
                            to,
                            departure: bus.departure,
                            arrival: bus.arrival,
                            fare: bus.fare,
                            date: bus.date,
                          }}
                          className="no-decoration"
                        >
                          <Button className="view-seats-button">View Seats</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>
        </Row>

        {/* Back Button */}
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Back
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Buspage;
