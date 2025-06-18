import React from 'react'
import "./Aboutuspage.css"
import { Card } from 'react-bootstrap'

function Aboutuspage() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
       <Card className="cardabout shadow p-4 my-4">
      <h2 className="mb-3">
        <span className="heading">About YatraNest</span>
      </h2>

      <Card.Body className="fs-6 text-dark">
        <p>
          <strong>YatraNest</strong> is a Pune-based travel business located in Shivajinagar,
          established in 2025 with the mission to provide fast, reliable, and comfortable
          location-to-location travel services. Whether it’s a daily commute, intercity travel,
          airport transfers, or one-way drops, YatraNest ensures smooth and timely transportation
          for individuals, families, and business travelers.
        </p>

        <p>
          Specializing in <strong>point-to-point travel</strong> rather than tour planning,
          YatraNest focuses on making everyday travel simpler and more convenient. With a fleet of
          well-maintained vehicles, experienced drivers, and an easy booking system, we cater to
          both short-distance and long-distance travel needs across Maharashtra and beyond.
        </p>

        <p>
          Our services are designed to offer <strong>affordability</strong> without compromising on
          safety or comfort. Whether you're traveling for work, attending a function, visiting
          family, or simply need a ride to a new city, YatraNest is your dependable partner.
        </p>

        <p>
          Rooted in Pune’s fast-paced lifestyle and growing demand for organized travel, YatraNest
          stands for <strong>punctuality</strong>, <strong>professionalism</strong>, and
          <strong> personalized attention</strong>—making every journey efficient and stress-free.
        </p>

        <p className="fw-semibold fst-italic text-center mt-4">
          YatraNest – Wherever you're going, we’ll take you there.
        </p>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Aboutuspage