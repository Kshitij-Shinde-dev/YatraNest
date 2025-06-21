import React, { useState } from 'react';
import './Bookingenquirypage.css';
import { useNavigate } from 'react-router-dom';

function Bookingenquirypage() {
  const [activeTab, setActiveTab] = useState('mobile');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 2500);
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-card">
        <div className="enquiry-header">Booking Enquiry</div>

        <div className="enquiry-tabs">
          <button
            className={`enquiry-tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('mobile');
              setSubmitted(false);
            }}
          >
            Mobile Enquiry
          </button>
          <button
            className={`enquiry-tab ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('email');
              setSubmitted(false);
            }}
          >
            Email Enquiry
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'mobile' && (
            <div className="enquiry-form-group">
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="enquiry-input"
                pattern="[0-9]{10}"
                required
              />
            </div>
          )}

          {activeTab === 'email' && (
            <div className="enquiry-form-group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="enquiry-input"
                required
              />
            </div>
          )}

          <button type="submit" className="enquiry-submit-button">
            Submit
          </button>
        </form>

        {submitted && (
          <div className="enquiry-success">
            We will contact you soon!
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookingenquirypage;
