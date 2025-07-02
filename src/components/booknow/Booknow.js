import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Select from 'react-select';
import styles from './Booknow.module.css';
import { Link,useLocation  } from "react-router-dom";

function Booknow() {
  const [activeTab, setActiveTab] = useState("booking");
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [journeyDate, setJourneyDate] = useState(new Date().toISOString().split("T")[0]);
  const location = useLocation();
  const { from, to } = location.state || {};

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
      alert("Please fill all fields before proceeding.");
      return;
    }

    window.location.href = '/Selectberthpage';
  };


  const renderSection = () => {
    switch (activeTab) {
      case "booking":
        return (
          <div className={styles.formSection}>
           <div className="form-group">
              <label>From</label>
              <Select
              options={cityOptions}
              placeholder="Select departure city"
              isSearchable
              className="mb-2"
              defaultValue={cityOptions.find(option => option.value === from)}
              required
              />
            </div>

            <div className="exchange-icon">⇄</div>

            <div className="form-group">
              <label>To</label>
              <Select
                options={cityOptions}
                placeholder="Select destination city"
                isSearchable
                className="mb-2"
                defaultValue={cityOptions.find(option => option.value === to)}
                required
              />
            </div>

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

            <div className={styles.searchButtonDiv}>
                <Link to={'/Selectberthpage'} className="text-decoration-none">
              <button className={styles.searchButton}>SEARCH</button></Link>
            </div>
          </div>
        );

      case "hire":
        return (
          <div className={styles.formSection}>
            <div className={styles.formGroup}>
              <label>City of Hire eg: Bangalore</label><br />
              <input type="text" placeholder="Bangalore" />
            </div>
            <div className={styles.formGroup}>
              <label>Starting Point eg: Railway station</label>
              <input type="text" placeholder="Railway Station" />
            </div>
            <div className={styles.formGroup}>
              <label>Destination eg: Airport/Pune</label><br />
              <input type="text" placeholder="Airport/Pune" />
            </div>
            <button className={`${styles.hireButton} mx-auto d-block`}>HIRE BUSES</button>
          </div>
        );

      default:
        return null;
    }
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
            <div
              className={`${styles.tab} ${activeTab === "hire" ? styles.active : ""}`}
              onClick={() => setActiveTab("hire")}
            >
              Bus Hire
            </div>
          </div>
          {renderSection()}
        </Card>
      </div>
    </div>
  );
}

export default Booknow;
