import React, { useState,useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Card, Container, Button, Row, Col, Form, Offcanvas } from "react-bootstrap";
import "./Buspage.css";

function Buspage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to } = location.state || {};
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const allBuses = [
    { from: "Pune", to: "Shrirampur", departure: "6:00 AM", arrival: "10:00 AM", type: "acSleeper" },
    { from: "Pune", to: "Shrirampur", departure: "7:30 AM", arrival: "11:30 AM", type: "nonAcSleeper" },
    { from: "Pune", to: "Shrirampur", departure: "9:00 AM", arrival: "1:00 PM", type: "acSeater" },
    { from: "Pune", to: "Shrirampur", departure: "10:30 AM", arrival: "2:30 PM", type: "nonAcSeater" },
    { from: "Pune", to: "Shrirampur", departure: "12:00 PM", arrival: "4:00 PM", type: "acSleeper" },
    { from: "Pune", to: "Shrirampur", departure: "1:30 PM", arrival: "5:30 PM", type: "nonAcSeater" },
  ];

  const filteredBuses = allBuses.filter(
    (bus) => bus.from === from && bus.to === to
  );

  const [showFilter, setShowFilter] = useState(false);
  const [selectedBusType, setSelectedBusType] = useState("");

  const busTypes = [
    { label: "AC Sleeper", value: "acSleeper", cost: 180 },
    { label: "Non-AC Sleeper", value: "nonAcSleeper", cost: 130 },
    { label: "AC Seater", value: "acSeater", cost: 100 },
    { label: "Non-AC Seater", value: "nonAcSeater", cost: 50 },
  ];

  const handleFilterChange = (e) => {
    setSelectedBusType(e.target.value);
  };

  const clearFilters = () => {
    setSelectedBusType("");
  };

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
        <h2 className="text-center head-bus-route mb-4 text-primary">
          {from} → {to}
        </h2>

        {/* Filter Toggle */}
        <Button variant="outline-primary" onClick={() => setShowFilter(true)} className="mb-4">
          Filter Options
        </Button>

        {/* Filter Sidebar */}
        <Offcanvas show={showFilter} onHide={() => setShowFilter(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Bus Type Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              {busTypes.map((type) => (
                <div key={type.value} className="custom-radio">
                  <input
                    type="radio"
                    id={type.value}
                    name="busType"
                    value={type.value}
                    checked={selectedBusType === type.value}
                    onChange={handleFilterChange}
                  />
                  <label htmlFor={type.value}>{type.label}</label>
                </div>
              ))}
              <div className="custom-radio">
                <input
                  type="radio"
                  id="showAll"
                  name="busType"
                  value=""
                  checked={selectedBusType === ""}
                  onChange={handleFilterChange}
                />
                <label htmlFor="showAll">Show All</label>
              </div>
              <hr />
              <Button variant="secondary" onClick={clearFilters} className="mt-2">
                Clear Filter
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Bus Cards */}
        <Row>
          <Col xs={12}>
            {filteredBuses
              .filter((bus) => !selectedBusType || bus.type === selectedBusType)
              .map((bus, index) => {
                const baseFare = 700;
                const typeDetails = busTypes.find((t) => t.value === bus.type);
                const fare = baseFare + (typeDetails?.cost || 0);

                return (
                  <Card key={index} className="mb-4 shadow rounded-3 p-3">
                    <Card.Body>
                      <Row>
                        <Col>
                          <p><strong>Departure:</strong> {bus.departure}</p>
                          <p><strong>Arrival:</strong> {bus.arrival}</p>
                          <p><strong>Type:</strong> {typeDetails?.label || "N/A"}</p>
                        </Col>
                        <Col xs="auto" className="d-flex flex-column justify-content-between align-items-end">
                          <p className="text-success fw-semibold mb-2">₹{fare}</p>
                          <Link
                            to="/Selectberthpage"
                            state={{ from, to, departure: bus.departure, arrival: bus.arrival, fare }}
                            className="no-decoration"
                          >
                            <Button variant="primary" className="view-seats-button">
                              View Seats
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })}
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
