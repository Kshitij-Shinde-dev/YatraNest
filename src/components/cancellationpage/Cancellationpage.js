import React, { useState } from 'react';
import './Cancellationpage.css';
import { useNavigate } from 'react-router-dom';

function Cancellationpage() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [cancelConfirmed, setCancelConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    contact: '',
    ticketNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPolicy(true);
  };

  const handleConfirm = () => {
    setShowPolicy(false);
    setCancelConfirmed(true);
    setTimeout(() => navigate('/'), 2500);
  };

  const handleBack = () => {
    setShowPolicy(false);
    setCancelConfirmed(false);
  };

  return (
    <div className="enquiry-container">
      <div className={`enquiry-card ${showPolicy ? 'blurred' : ''}`}>
        <div className="enquiry-header">Cancel Booking</div>

        {!showPolicy && !cancelConfirmed && (
          <form onSubmit={handleSubmit}>
            <div className="enquiry-form-group">
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter mobile number or email"
                className="enquiry-input"
                required
              />
            </div>
            <div className="enquiry-form-group">
              <input
                type="text"
                name="ticketNumber"
                value={formData.ticketNumber}
                onChange={handleChange}
                placeholder="Enter ticket number"
                className="enquiry-input"
                required
              />
            </div>
            <button type="submit" className="enquiry-submit-button">
              Submit
            </button>
          </form>
        )}

        {cancelConfirmed && (
          <div className="enquiry-success">Your booking has been cancelled successfully.</div>
        )}
      </div>

      {/* Sliding policy section */}
      <div className={`policy-slideup ${showPolicy ? 'show' : ''}`}>
        <div className="policy-header">Refund Policy</div>
        <table className="policy-table">
          <thead>
            <tr>
              <th>Time Before Departure</th>
              <th>Refund Policy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>More than 24 hours</td>
              <td>90% refund (10% cancellation fee)</td>
            </tr>
            <tr>
              <td>12 – 24 hours</td>
              <td>50% refund</td>
            </tr>
            <tr>
              <td>Less than 12 hours</td>
              <td>No refund</td>
            </tr>
            <tr>
              <td>Bus missed / No show</td>
              <td>No refund</td>
            </tr>
          </tbody>
        </table>

        <div className="policy-buttons">
          <button onClick={handleConfirm} className="enquiry-submit-button">Confirm Cancellation</button>
          <button onClick={handleBack} className="enquiry-back-button">Back</button>
        </div>
      </div>
    </div>
  );
}

export default Cancellationpage;
