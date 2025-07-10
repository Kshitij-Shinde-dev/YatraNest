import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import styles from "./Booknow.module.css";
import { Link, useLocation } from "react-router-dom";

function Booknow() {
  const [activeTab, setActiveTab] = useState("booking");

  // Set default journey date to today
  const [journeyDate, setJourneyDate] = useState(new Date().toISOString().split("T")[0]);

  const location = useLocation();
  const { from, to } = location.state || {};

  const cityOptions = [
    { value: "Pune", label: "Pune" },
    { value: "Shrirampur", label: "Shrirampur" },
    { value: "Solapur", label: "Solapur" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Shirdi", label: "Shirdi" },
    { value: "Nashik", label: "Nashik" },
    { value: "Nagpur", label: "Nagpur" },
  ];

  const [fromCity, setFromCity] = useState(cityOptions.find((c) => c.value === from) || null);
  const [toCity, setToCity] = useState(cityOptions.find((c) => c.value === to) || null);

  const renderSection = () => {
    if (activeTab === "booking") {
      return (
        <div className={styles.formSection}>
          {/* FROM city selection */}
          <div className="form-group">
            <label>From</label>
            <Select
              options={cityOptions}
              placeholder="Select departure city"
              isSearchable
              className="mb-2"
              value={fromCity}
              onChange={setFromCity}
              required
            />
          </div>

          {/* ⇄ Swap icon */}
          <div className="exchange-icon">⇄</div>

          {/* TO city selection */}
          <div className="form-group">
            <label>To</label>
            <Select
              options={cityOptions}
              placeholder="Select destination city"
              isSearchable
              className="mb-2"
              value={toCity}
              onChange={setToCity}
              required
            />
          </div>

          {/* Date Picker */}
          <div className={styles.dateSelect}>
            <label>Date</label>
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          {/* SEARCH Button that passes from, to, and date */}
          <div className={styles.searchButtonDiv}>
            <Link
              to={"/Buspage"}
              className="text-decoration-none"
              state={{ from: fromCity?.value, to: toCity?.value, date: journeyDate }}
            >
              <button className={styles.searchButton}>SEARCH</button>
            </Link>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.background}>
      <div className={styles.busBooking}>
        <Card className={`${styles.cardBooking} mt-0`}>
          <div className={`mb-3 ${styles.header1}`}>
            <div
              className={`${styles.tab} ${activeTab === "booking" ? styles.active : ""}`}
              onClick={() => setActiveTab("booking")}
            >
              Bus Booking
            </div>
          </div>
          {renderSection()}
        </Card>
      </div>
    </div>
  );
}

export default Booknow;
